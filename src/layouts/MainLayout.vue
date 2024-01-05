<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="desktop-only">
      <ToolbarNavbar title="Eros León" />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="mobile-only">
      <ToolbarNavbar title="Eros León" />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ToolbarNavbar from 'src/components/ToolbarNavbar.vue';
</script>
