<template>
  <div id="main-card-projet-component">
    <div class="cell">
      <div class="box">
        <div>
          <b-image
            src="https://picsum.photos/600/400"
            alt="A random image"
            ratio="3by1"
          ></b-image>
        </div>
        <hr class="divider is-green">
        <div class="content">
          <div class="is-flex is-justify-content-center">
            <h2>TITRE</h2>
          </div>
          <p>informations</p>
        </div>
        <div class="is-flex is-justify-content-center">
          <div v-for="(item, key) in iconss" v-bind:key>
            <dd>
              <div v-if="item.includes('/')" class="is-flex">
                <figure class="image is-24x24 mr-2">
                  <img :src=item />
                </figure>
              </div>
              <div v-else class="is-flex">
                <b-icon class="mr-2 mb-1" pack="fa-brands" type="is-white" :icon=item></b-icon>
              </div>
            </dd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: ['title','titleicon','icons'],
    data() {
      const iconss:string[] = ['flutter','rust','php']
      return {
        iconss
      }
    },
  })
</script>
