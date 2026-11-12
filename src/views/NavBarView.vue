<template>
  <div id="main-div-navbar-view">
    <b-tabs v-model="activeTab">
        <b-tab-item class="main-tab-content" label="A propos de moi">
          <APropos />
        </b-tab-item>
        <b-tab-item class="main-tab-content" label="Travaux et projets">
          <TravauxEtProjet />
        </b-tab-item>
        <b-tab-item class="main-tab-content" label="Modélisation et animations">
          <ModelisationEtAnimation />
        </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import APropos from '@/views/tabs/AProposTabView.vue'
  import TravauxEtProjet from '@/views/tabs/TravEtProjTabView.vue'
  import ModelisationEtAnimation from "@/views/tabs/ModelisationEtAnimationTabView.vue";

  export default defineComponent({
      components: {
          APropos,
          TravauxEtProjet,
          ModelisationEtAnimation
      },
      data() {
          return {
              activeTab: 0,
          };
      },
  });
</script>
