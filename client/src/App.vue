<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'

const routes = {
  '/': Home,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="/">Home</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>