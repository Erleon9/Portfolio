<script setup lang="ts">
import { ref } from 'vue';
import routes from 'src/router/routes';
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const router = ref(routes);
const route = useRoute();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  },
});

const isCurrentChildRoute = (childRoute: any) => route.name === childRoute.name;
const allChildRoutes = router.value.flatMap((mainRoute) =>
  (mainRoute.children ?? []).flatMap((child) => child)
);
</script>

<template>
  <q-toolbar style="background: #14192d">
    <q-toolbar-title class="text-teal-4 text-h4 q-pa-md text-weight-bolder">
      {{ props.title }}</q-toolbar-title
    >
    <div v-for="childRoute in allChildRoutes" :key="childRoute.name">
      <router-link :to="childRoute.path">
        <q-btn
          flat
          :label="childRoute.name"
          :color="isCurrentChildRoute(childRoute) ? 'teal-1' : 'teal-4'"
          class="q-mx-sm text-h6 text-weight-bold hoverable"
        />
      </router-link>
    </div>
  </q-toolbar>
</template>

<style></style>
