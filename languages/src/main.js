/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import { parse, build } from 'node-xlsx'

import { readdir, writeFileSync } from 'fs'

let sheetsList = [
    {
        name: 'StarAcademy',
        value: 'StarAcademy'
    }
]

let languagesType = [
    {
        name: 'English',
        value: 'en-US'
    }, {
        name: 'Russian',
        value: 'ru-RU'
    }, {
        name: 'Spanish',
        value: 'es-ES'
    }, {
        name: 'العربية',
        value: 'ar-SA'
    }
]

readdir('.', function (err, files) {

    files.forEach((file) => {
        if (file.endsWith('.xlsx')) {
            let path = `./${file}`
            let sheetList = parse(path)
            sheetList.forEach((sheet) => {
                let nameList = sheetsList.filter((item) => item.value == sheet.name)
                if (nameList.length > 0) {
                    sheet.data.forEach((row, index) => {
                        let rowIndex = index
                        row.forEach((cell, index) => {
                            let colIndex = index
                            if (cell !== undefined) {
                                sheet.data[rowIndex][colIndex] = cell.replace(/replaced text1/g, '')
                                    .replace(/replaced text2/g, '')
                                let reg = /\{([\u4e00-\u9fa5\.\w\:\、\/\d\s《》-]*)\|[\u4e00-\u9fa5\.\w\:\、\/\d\s《》-]*\}/
                                let tempStr = sheet.data[rowIndex][colIndex]
                                while (reg.test(tempStr)) {
                                    tempStr = tempStr.replace(reg, RegExp.$1)
                                }
                                sheet.data[rowIndex][colIndex] = tempStr
                            }
                        })
                    })
                }
            })
            
            let textArray = []
            for (let i = 0; i < sheetsList.length; i++) {
                let idx = sheetsList[i]['value']
                textArray[idx] = {}
                for (let l = 0; l < languagesType.length; l++) {
                    let index = languagesType[l]['value']
                    textArray[idx][index] = {}
                }
            }
            sheetList.forEach((list) => {
                let newList = sheetsList.filter((item) => item.value == list.name)
                if (newList.length > 0) {
                    list.data.forEach((value, index) => {
                        if (index !== 0 && value.length > 1) {
                            combin(textArray[list.name], value)
                        }
                    })
                }
            })
            // eslint-disable-next-line no-unused-vars
            let buff = build(sheetList)
            // eslint-disable-next-line no-unused-vars
            sheetsList.forEach((val, key) => {
                languagesType.forEach((val) => {
                    let writePath = `${__dirname.split('languages')[0]}src/translate/${val.value}Lang/${val['value']}.js`
                    let content = odefile(textArray[val['value']][val['value']], val['value'])
                    writeFileSync(writePath, content, 'utf8', function (err) {
                        if (err) {
                            console.log(err)
                            return
                        }
                    })
                })
            })
        }
    })
})
function combin(a, b) {
    for (var i = 1; i < b.length; i++) {
        a[languagesType[i - 1]['value']][b[0]] = b[i]
    }
    return a
}
function odefile(arr, type) {
    let content = `import Locale from 'element-plus/lib/locale/lang/${type}'
    import 'dayjs/locale/${type}'
    const langs = {
        language: ${JSON.stringify(arr)},
        ...Locale
    }
    export default langs   
    `
    return content
}