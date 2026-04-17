<template>
  <NavbarComp />

  <router-view />

  <FooterComp />
</template>

<script setup>
import NavbarComp from './components/TheNavbar.vue'
import FooterComp from './components/TheFooter.vue'
</script>