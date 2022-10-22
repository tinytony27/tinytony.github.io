import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowUpRightFromSquare, faHouseUser, faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faTwitter, faArrowUpRightFromSquare, faAddressCard, faHouseUser, faEnvelope, faBoxArchive)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
