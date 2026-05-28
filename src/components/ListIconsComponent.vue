<template>
  <div>
    <dl>
      <div class="is-flex mb-2">
        <b-icon class="mr-2" pack="fa-solid" type="is-white" :icon=titleicon></b-icon>
        <dt><h5>{{title}}</h5></dt>
      </div>
      <div v-for="(item, key) in icons" v-bind:key>
        <dd>
          <div v-if="item[0].includes('/')" class="is-flex">
            <figure class="image is-24x24 mr-2">
              <img :src=item[0] />
            </figure>
            <p>{{item[1]}}</p>
          </div>
          <div v-else class="is-flex">
            <b-icon class="mr-2 mb-1" pack="fa-brands" type="is-white" :icon=item[0]></b-icon>
            <p>{{item[1]}}</p>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
  export default {
    props: ['title','titleicon','icons'],
}
</script>
