<template>
  <div id="main-div-modal-project" class="modal-card modal-size">
    <header class="modal-card-head">
      <h1>{{ datas.title }}</h1>
    </header>
    <div class="modal-card-body">
      <div class="content">
        <b-image :src="datas.imageSrc" ratio="3by1"></b-image>
        <p>Ceci est t'un projet que j'ai créé pour vivre</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at
          alias quaerat laborum dolor, explicabo voluptatibus blanditiis
          pariatur
        </p>
        nihil maiores placeat id natus aliquam ipsam libero impedit consequuntur
        tempore enim. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Qui beatae maxime voluptates ipsa fugiat in temporibus enim harum nihil
        at dolore optio numquam, sit nostrum architecto esse suscipit dolorum
        veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores dolorum rerum quia architecto, enim, provident placeat maxime
        voluptate totam quo pariatur incidunt iure repellendus, natus aliquid
        sequi numquam ducimus eum? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae optio repudiandae repellendus molestiae
        saepe exercitationem ipsam sed nulla, autem est labore voluptatum
        repellat fugit totam iure nisi, aspernatur maxime voluptates? loreù
      </div>
    </div>
    <footer class="modal-card-foot">Copyright 1999-2026</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["datas"],
});
</script>
<style lang="scss">
@import url("@../../../../assets/modalStyle.scss");
</style>
