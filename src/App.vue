<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LayoutMain from "@/layout/LayoutMain.vue";
import LayoutSecond from "@/layout/LayoutSecond.vue";

const route = useRoute();

const layout = computed(() => {
  const layoutName = route.meta?.layout || 'second';
  switch (layoutName) {
    case 'main':
      return LayoutMain;
    case 'second':
      return LayoutSecond;
    default:
      return { template: '<router-view />' };
  }
});
</script>

<style>
@import 'assets/css/index.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
  background-color: #f4f7fb;
}
</style>
