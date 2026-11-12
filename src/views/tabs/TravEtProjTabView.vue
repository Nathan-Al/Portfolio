<template>
  <div id="div-view-tav-et-proj">
    <div class="container">
      <div class="fixed-grid has-2-cols">
        <div class="grid is-row-gap-3 is-column-gap-3">
          <div v-for="(item, key) in projectData" :key="key">
            <cardProjet
              class="card-project-style"
              :datas="item"
              @click="item.isComponentModalActive = true"
              :key="key"
              :v-bind="key"
            />
            <b-modal
              v-model="item.isComponentModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="true"
              :auto-focus="true"
              aria-role="dialog"
              aria-label="Project Modal"
              close-button-aria-label="Close"
              aria-modal
              :key="key"
              :v-bind="key"
            >
              <component :is="item.component" :key="key" :datas="item" />
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw, shallowRef } from "vue";
import { BModal } from "buefy";
import cardProjet from "@/components/CardProjetComponent.vue";
import nodeJsModal from "@/views/modals/ProjectModal/nodeJsProjectModalView.vue";
import domaineProjectModal from "@/views/modals/ProjectModal/domaineProjectModalView.vue";
import ciradiaProjectModal from "@/views/modals/ProjectModal/ciradiaProjectModalView.vue";

export default defineComponent({
  components: {
    cardProjet,
    domaineProjectModal,
    nodeJsModal,
    ciradiaProjectModal,
    BModal,
  },
  data() {
    const projectData = [
      {
        title: "Mise en place d'un domaine sous Windows",
        imageSrc: "https://picsum.photos/600/400",
        resume:
          "Dans le cadre de l'amélioration du SI d'un lycée j'ai eu l'ocassion de créer un domaine " +
          "tournant sur une VM Windows Server ainsi que de créer les comptes et GPO nécessitant des critères.",
        icons: [
          "windows",
          "/Icons/synology-light.svg",
          "/Icons/ldap-light.svg",
          "/Icons/powershell-svgrepo-com.svg",
          "/Icons/azure-active-directory-aad-svgrepo-com.svg",
        ],
        isComponentModalActive: false,
        component: shallowRef(domaineProjectModal),
      },
      {
        title: "Création d'un service de traitement de rapport d'incident",
        imageSrc: "media/280rgrgrgJIEJ5285EJHA.png",
        resume:
          "Une entreprise ma commandé une application qui permetrait a des personne de leur envoyer des rapports d'incident " +
          "qu'ill pourrait par la suite traiter dans leur services. J'ai fais l'application ainsi que le site web permettant le traitement des données.",
        icons: ["flutter", "dart-lang", "vuejs", "html5", "sass", "js"],
        isComponentModalActive: false,
        component: shallowRef(ciradiaProjectModal),
      },
      {
        title: "Serveur d'application RapideNodeJS",
        imageSrc: "media/fdgedg01961rr810gh1r9rhr.png",
        resume:
          "Un projet personelle qui permet de faire rapidement une application web en NODEJS de façon simple.",
        icons: ["node", "html5", "css", "js", "docker"],
        isComponentModalActive: false,
        component: shallowRef(nodeJsModal),
      },
    ];
    return {
      projectData,
    };
  },
});
</script>

<style lang="scss">
@import url("@../../../src/assets/styles/views/tabTravEtProjetStyle.scss");
</style>
