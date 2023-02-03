import { createPinia } from "pinia";
import {userStore} from './user'
import {publicStore} from './public'

/* Creating a new instance of pinia. */
const pinia = createPinia();

/* Exporting the pinia instance and the two stores. */
export {userStore,publicStore};
export default pinia;
