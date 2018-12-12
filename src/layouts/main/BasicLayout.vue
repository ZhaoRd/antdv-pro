<template>
  <a-layout>
    <a-layout-sider
      collapsible
    >
      <div class="logo" />
    </a-layout-sider>
    <a-layout>
      <app-header></app-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>尾部</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from './Header.vue';

@Component({
  components: {
    'app-header':Header
  },
})
export default class BasicLayout extends Vue {}
</script>
