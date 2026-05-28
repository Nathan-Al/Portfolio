<template>
  <div id="div-view-tav-et-proj">
    <div class="container">
      <div class="fixed-grid has-2-cols">
        <div class="grid is-row-gap-3 is-column-gap-3">
          <cardProjet title="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import cardProjet from '/src/components/CardProjetComponent.vue'
  export default defineComponent({
    components: {
      cardProjet,
    },
  })
</script>
