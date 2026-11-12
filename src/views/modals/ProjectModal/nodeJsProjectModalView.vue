<template>
  <div id="main-div-modal-project" class="modal-card modal-size">
    <header class="modal-card-head">
      <h1>{{ datas.title }}</h1>
    </header>
    <div class="modal-card-body">
      <div class="columns">
        <div class="column is-one-quarter">
          <aside class="menu">
            <p class="menu-label">Menu</p>
            <ul class="menu-list">
              <li><a>Présentation</a></li>
            </ul>
            <p class="menu-label">Documentations</p>
            <ul class="menu-list">
              <li>Roadmap</li>
              <p class="menu-label">Base de données</p>
              <ul class="menu-list">
                <li><a>MCD</a></li>
                <li><a>MLD</a></li>
                <li><a>Script</a></li>
              </ul>
            </ul>
            <p class="menu-label">Réalisations</p>
            <ul class="menu-list">
              <li><a>Produit</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <div class="content">
            <b-image :src="datas.imageSrc" ratio="3by1"></b-image>
            <p>Ceci est t'un projet que j'ai créé pour vivre</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident at alias quaerat laborum dolor, explicabo voluptatibus
              blanditiis pariatur
            </p>
          </div>
        </div>
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
@import url("@../../../../../assets/modalStyle.scss");
</style>
