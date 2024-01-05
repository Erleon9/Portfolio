<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <div>
    <q-list>
      <q-item clickable v-close-popup>
        <q-item-section>New tab</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>New incognito tab</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-close-popup>
        <q-item-section>Recent tabs</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>History</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>Downloads</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-close-popup>
        <q-item-section>Settings</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-close-popup>
        <q-item-section>Help &amp; Feedback</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style></style>
