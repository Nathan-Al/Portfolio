import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck, faEnvelope, faSchoolFlag, faBuilding, faBriefcase,
  faGraduationCap, faFileContract,
  faWrench, faCode, faToolbox, faTerminal
} from "@fortawesome/free-solid-svg-icons";
import {
  faBuilding as regulfaBuilding
} from "@fortawesome/free-regular-svg-icons";
import {
  faFontAwesome ,faGithub, faLinkedin, faVuejs, faTypescript,
  faJs, faSass, faGit, faFigma,
  faFlutter, faPhp, faRust, faCss, faHtml5,
  faPostgresql, faDartLang as dart, faGolang,
  faSymfony, faNode, faGitlab, faJenkins,
  faDev, faDocker, faWindows, faLinux
} from '@fortawesome/free-brands-svg-icons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

library.add(
  faFontAwesome, faGithub, faLinkedin, faVuejs,
  faFlutter, faPhp, faRust, faCss, faHtml5,
  faTypescript, faSass, faGit, faFigma, faCheck,
  faSchoolFlag, faFileContract, faGraduationCap,
  faBuilding, regulfaBuilding, faBriefcase, faWrench,
  faCode, faPostgresql, dart, faGolang, faSymfony, faJs,
  faNode, faGitlab, faJenkins, faEnvelope, faToolbox,
  faDev, faDocker, faTerminal, faWindows, faLinux
);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('vue-fontawesome', FontAwesomeIcon);
app.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
});

app.mount('#app')
