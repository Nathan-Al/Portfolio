<template>
  <div id="main-div-main-view">
    <div class="div-decoration-lumiere"></div>
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="pt-0 is-one-third is-flex-direction-column is-justify-content-flex-start">
          <InfosSectionView />
        </div>
      </div>
      <div class="column is-three-quarters">
        <div class="box">
          <NavBarView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import NavBarView from '/src/views/NavBarView.vue';
  import InfosSectionView from '/src/views/InfosSectionView.vue';
</script>
