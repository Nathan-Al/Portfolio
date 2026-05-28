<template>
  <div id="main-div-view-a-propos" class="content is-normal">
    <div class="columns">
      <div class="column">
        <div class="is-flex">
          <b-icon pack="fa-solid" type="is-white" icon="school-flag"></b-icon>
          <h4 class="ml-2">Parcours academique</h4>
        </div>
        <dl>
          <div class="is-flex is-flex-direction-column mb-2">
            <dt class="mb-2">BAC PRO</dt>
            <dd>
              <div class="is-flex is-align-items-center">
                <b-icon class="mr-2" pack="fa-solid" type="is-white" icon="graduation-cap"></b-icon>
                <p>SYSTEMES ELECTRONIQUES NUMERIQUES</p><br>
              </div>
              <div class="is-flex is-align-items-center">
                <b-icon class="mr-2" pack="fa-regular" type="is-white" icon="building"></b-icon>
                <p>LYCEE RAOUL GEORGES NICOLO</p>
              </div>
            </dd>
          </div>
          <div class="is-flex is-flex-direction-column mb-2">
            <dt class="mb-2">BAC +2</dt>
            <dd>
              <div class="is-flex is-align-items-center mb-2">
                <b-icon class="mr-2" pack="fa-solid" type="is-white" icon="graduation-cap"></b-icon>
                <p>BTS SERVICE INFORMATIQUE AUX ORGANISATION Option SLAM</p>
              </div>
              <div class="is-flex is-align-items-center">
                <b-icon class="mr-2" pack="fa-regular" type="is-white" icon="building"></b-icon>
                <p>LYCEE PERSEVERANT</p>
              </div>
            </dd>
          </div>
          <div class="is-flex is-flex-direction-column mb-2">
            <dt class="mb-2">LICENCE +3</dt>
            <dd>
              <div class="is-flex is-align-items-center mb-2">
                <b-icon class="mr-2" pack="fa-solid" type="is-white" icon="graduation-cap"></b-icon>
                <p>CONCEPTEUR DEVELOPPEUR D'APPLICATIONS</p>
              </div>
              <div class="is-flex is-align-items-center">
                <b-icon class="mr-2" pack="fa-regular" type="is-white" icon="building"></b-icon>
                <p>CENTRE DE FORMATION FORE</p>
              </div>
            </dd>
          </div>
        </dl>
        <hr class="divider is-green">
        <div class="is-flex">
          <b-icon pack="fa-solid" type="is-white" icon="briefcase"></b-icon>
          <h4 class="ml-2">Expériences professionnelles</h4>
        </div>
        <dl>
          <div class="is-flex is-flex-direction-column mb-2">
            <dt class="mb-2">EIDOLOON</dt>
            <dd class="mb-1">
              <div class="is-flex is-align-items-center mb-2">
                <b-icon class="mr-2" pack="fa-regular" type="is-white" icon="building"></b-icon>
                <p>Entreprise de conception de logiciels</p>
              </div>
              <div class="is-flex is-align-items-center">
                <b-icon class="mr-2" pack="fa-solid" type="is-white" icon="file-contract"></b-icon>
                Alternance de 1 AN
              </div>
              <ul class="mt-0">
                <li>Développeur full stack junior</li>
              </ul>
            </dd>
          </div>
          <div class="is-flex is-flex-direction-column mb-2">
            <dt class="mb-2">LYCEE RAOUL GEORGES NICOLO</dt>
            <dd>
              <div class="is-flex is-align-items-center mb-2">
                <b-icon class="mr-2" pack="fa-regular" type="is-white" icon="building"></b-icon>
                <p>Lycéee des métiers générale et professionnelle</p>
              </div>
              <div class="is-flex is-align-items-center">
                <b-icon class="mr-2" pack="fa-solid" type="is-white" icon="file-contract"></b-icon>
                <p>Contrat CDD de 4 ANS</p>
              </div>
              <ul class="mt-0">
                <li>Administrateur Systèmes et Réseaux</li>
                <li>Technicien de maintenance en informatique</li>
                <li>Développeur back-end</li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div class="is-flex is-justify-content-center pl-2 pr-2">
        <hr class="container divider-vertical is-green">
      </div>
      <div class="column">
        <div class="is-flex">
          <b-icon pack="fa-solid" type="is-white" icon="wrench"></b-icon>
          <h4 class="ml-2">Compétences</h4>
        </div>
        <div class="columns is-mobile mb-0">
          <div class="column is-6 mb-0 pb-0">
            <ListIconsComponent :icons=logosLangage title="Langage" titleicon="code" />
          </div>
          <div class="column is-6 mb-0 pb-0">
            <ListIconsComponent :icons=logosFramework title="Framework" titleicon="toolbox" />
          </div>
        </div>
        <hr class="divider is-green">
        <div class="columns mb-0">
          <div class="column mb-0">
            <ListIconsComponent :icons=logosSoftwareCoverage title="Logiciels de tests et de couverture de code" titleicon="code" />
          </div>
          <div class="column">
            <ListIconsComponent :icons=logosSysadmin title="Sysadmin" titleicon="terminal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import ListIconsComponent from '/src/components/ListIconsComponent.vue';

  export default defineComponent({
    components: {
      ListIconsComponent
    },
    setup() {
      const logosLangage = ref([
        ['html5','Html'],
        ['css','Css'],
        ['rust','Rust'],
        ['js','Javascript'],
        ['typescript','Typescript'],
        ['php','Php'],
        ['/Icons/mysql-light.svg','Sql'],
        ['dart-lang','Dart'],
        ['golang','Holang'],
        ['sass','Sass']
      ])
      const logosFramework = ref([
        ['symfony','Symfony'],
        ['vuejs','Vue JS'],
        ['flutter','Flutter'],
        ['node','NodeJS']
      ])
      const logosTech = ref(['git','github','gitlab','jenkins','docker'])
      const logosSoftwareCoverage = ref([
        ['js','Cypress'],
        ['js','ESLint'],
        ['flutter','Flutter Tests'],
        ['php','PHPUnit'],
        ['php','PHPCS & PHPCSNF'],
        ['php','Xdebug']
      ])
      const logosSysadmin = ref([
        ['/Icons/proxmox-light.svg','Proxmox'],
        ['/Icons/qemu-light.svg','Qemu'],
        ['/Icons/wazuh-light.svg','Wazuh'],
        ['/Icons/openldap-light.svg','Openldap'],
        ['/Icons/glpi-light.svg','Glpi'],
        ['/Icons/ubiquiti-unifi-light.svg','Unifi'],
        ['windows','Active Directory'],
        ['linux','Linux server'],
        ['windows','Windows server']
      ])
      return {
        logosLangage,
        logosTech,
        logosFramework,
        logosSoftwareCoverage,
        logosSysadmin
      };
    },
  });
</script>
