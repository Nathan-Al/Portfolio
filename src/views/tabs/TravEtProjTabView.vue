<template>
  <div id="div-view-tav-et-proj">
    <div class="container">
      <div class="fixed-grid has-2-cols">
        <div class="grid is-row-gap-3 is-column-gap-3">
          <cardProjet @click="isComponentModalActive = true"/>
        </div>
      </div>
    </div>
    <b-modal
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="true"
        :auto-focus="true"
        aria-role="dialog"
        aria-label="Project Modal"
        close-button-aria-label="Close"
        aria-modal
    >
      <projectModal></projectModal>
    </b-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { BModal } from "buefy";
  import cardProjet from '@/components/CardProjetComponent.vue'
  import projectModal from '@/views/modals/ProjectModalView.vue'

  export default defineComponent({
    components: {
      cardProjet,
      projectModal,
      BModal,
    },
    data() {
      const projectData = [
        {
          title:"eee",
          imageSrc:"",
          content:"",
          icons:[]
        }
      ];
      return {
        isComponentModalActive: false,
        projectData,
      };
    },
  })
</script>
