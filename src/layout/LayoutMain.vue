<template>
  <div>
    <header-comp />
    <main calass="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <footer-comp />
  </div>
</template>

<script setup>
import HeaderComp from "../components/HeaderComp.vue"
import FooterComp from "../components/FooterComp.vue"
</script>

<style scoped>
main {
  min-height: calc(100vh - 120px); /* Adjust based on header/footer height */
  padding: 1rem;
  box-sizing: border-box;
}
</style>