<template>
  <div id="main-card-projet-component">
    <div class="cell">
      <div
        class="box is-flex is-flex-direction-column is-justify-content-space-between"
      >
        <div class="containers">
          <b-image
            :src="datas.imageSrc"
            alt="A random image"
            ratio="3by1"
          ></b-image>
        </div>
        <hr class="divider is-green" />
        <div class="containers mb-5">
          <div class="content">
            <div class="is-flex is-justify-content-center">
              <h2>{{ datas.title }}</h2>
            </div>
            <div style="overflow-y: scroll; height: 10vh">
              <p>{{ datas.resume }}</p>
            </div>
          </div>
        </div>
        <div class="containers">
          <div class="is-flex is-justify-content-center">
            <div v-for="(item, key) in datas.icons" :key="key">
              <dd>
                <div v-if="item.includes('/')" class="is-flex">
                  <figure class="image is-24x24 mr-2">
                    <img :src="item" />
                  </figure>
                </div>
                <div v-else class="is-flex">
                  <b-icon
                    class="mr-2 mb-1"
                    pack="fa-brands"
                    type="is-white"
                    :icon="item"
                  ></b-icon>
                </div>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["datas"],
});
</script>

<style lang="scss">
@import url("../../src/assets/cardProjetComponentStyle.scss");
</style>
