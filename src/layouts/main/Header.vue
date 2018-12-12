<template>
  <a-layout-header>
    <global-header></global-header>
  </a-layout-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GlobalHeader from '@/components/globalHeader/Index.vue';

@Component({
  components: {
    GlobalHeader
  },
})
export default class Header extends Vue {}
</script>
