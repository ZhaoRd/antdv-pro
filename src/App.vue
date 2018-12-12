<template>
<!--
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
-->
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>

</template>

<style lang="less">

</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';

@Component({
  components: {
  },
})
export default class App extends Vue {
  private locale = zh_CN;
}
</script>

