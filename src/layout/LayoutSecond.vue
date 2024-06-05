<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
main {
  min-height: calc(100vh - 120px); /* Adjust based on header/footer height */
  padding: 1rem;
  box-sizing: border-box;
}
</style>