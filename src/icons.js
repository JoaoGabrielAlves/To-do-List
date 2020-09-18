import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faPlusSquare, faTrash, faCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare, faCheck, faTrash)

Vue.component('fa-icon', FontAwesomeIcon)