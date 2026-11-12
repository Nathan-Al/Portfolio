<template>
  <div id="main-div-section-infos" class="is-flex is-justify-content-space-evenly is-flex-direction-column div-infos box pb-3">
    <div class="is-flex is-flex-direction-column is-align-content-center">
      <div class="mt-5 mb-5">
        <div class="container is-flex is-justify-content-center">
          <div class="is-flex is-justify-content-center">
            <figure class="image profil-photo">
              <div class="div-decoration-box-shadow"></div>
              <img src="https://www.thispersondoesnotexist.com/random-person.jpeg" alt="Placeholder image"/>
            </figure>
          </div>
        </div>
      </div>

      <div class="container is-flex is-justify-content-center">
        <h1 class="title is-4">PRUDENTOS ALLAN</h1>
      </div>
      <hr class="divider is-green">
      <div class="content">
        <h4>Bonjour et bienvenue sur mon Portfolio !</h4>
        <p>Vous trouverez ici des informations sur mon parcours professionnel, mes projets personnels ainsi que mes travaux effectués en entreprise.</p>
      </div>
    </div>
    <hr class="divider is-green">
    <div class="is-flex">
      <div class="is-flex">
        <figure class="image">
          <div class="div-decoration-box-shadow"></div>
          <img src="/media/10fgv08HUIHea51.png" alt="Image de decoration" />
        </figure>
      </div>
    </div>
    <hr class="divider is-green">
    <div class="fixed-grid has-3-cols mb-0">
      <div class="grid is-gap-0.5">
        <div class="cell is-flex is-justify-content-center">
          <a href="https://www.github.com/">
            <div class="div-icon is-flex is-align-items-center p-1">
              <b-icon pack="fa-brands" type="is-black" icon="github"></b-icon>
            </div>
          </a>
        </div>
        <div class="cell is-flex is-justify-content-center">
          <a href="https://www.linkedin.com/in/al-prd-6095401a2">
            <div class="div-icon is-flex is-align-items-center p-1">
              <b-icon pack="fa-brands" type="is-black" icon="linkedin"></b-icon>
            </div>
          </a>
        </div>
        <div class="cell is-flex is-justify-content-center">
          <a href="mailto:allan.prudentos@outlook.fr">
            <div class="div-icon is-flex is-align-items-center p-1">
              <b-icon pack="fa" type="is-black" icon="envelope"></b-icon>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="div-slider mt-5">
      <div class="slider mt-1">
        <div class="slide-track is-flex is-flex-direction-row">
          <div v-for="(item, key) in logosCarroussel" class="slide is-flex is-justify-content-center" v-bind:key>
            <a v-if="!item[0]!.includes('/')" :href=item[1]><b-icon size="is-medium" pack="fa-brands" type="is-white" :icon=item[0]></b-icon></a>
            <figure v-else class="image is-32x32">
               <a :href=item[1]><img :src=item[0] /></a>
            </figure>
          </div>
        </div>
        <div aria-hidden class="slide-track is-flex is-flex-direction-row">
          <div v-for="(item, key) in logosCarroussel" class="slide is-flex is-justify-content-center" v-bind:key>
            <a v-if="!item[0]!.includes('/')" :href=item[1]><b-icon size="is-medium" pack="fa-brands" type="is-white" :icon=item[0]></b-icon></a>
            <figure v-else class="image is-32x32">
              <a :href=item[1]><img :src=item[0] /></a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
      setup() {
        const logosCarroussel = ref([
          ['github','https://github.com/'],
          ['typescript','https://www.typescriptlang.org'],
          ['vuejs','https://vuejs.org'],
          ['sass','https://sass-lang.com'],
          ['font-awesome','https://fontawesome.com'],
          ['/Icons/selfh-st-light.svg','https://selfh.st/icons/'],
          ['/Icons/mysql-light.svg','https://www.mysql.com/']
        ])
        return {
          logosCarroussel
        };
      },
  });
</script>
