import { createTranslate } from 'vue-i18n';

/* Importing the default language of the element-plus library. */
import EnglishLocal from 'element-plus/lib/locale/lang/en';

// language number 1
Object.assign(
    /**languages */
)
// language number 2
Object.assign(
    /** languages */
)

const language = 'ar' /**get language from store or set it */

export const translate = createTranslate({
    legacy: false,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
    fallbackWarn: false,
    locale: language,
    fallbackLocale: EnglishLocal.name,
    globalInjection: true,
})