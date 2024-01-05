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
});
const showMenu = ref(false);

const isCurrentChildRoute = (childRoute: any) => route.name === childRoute.name;
const allChildRoutes = router.value.flatMap((mainRoute) =>
  (mainRoute.children ?? []).flatMap((child) => child)
);
</script>

<template>
  <q-dialog v-model="showMenu" v-if="$q.platform.is.mobile">
    <q-list class="bg-red q-pa-none" style="width: 100%">
      <q-item
        clickable
        v-close-popup
        v-for="childRoute in allChildRoutes"
        :key="childRoute.name"
      >
        <q-item-section>{{ childRoute.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-dialog>
  <q-toolbar style="background: #14192d">
    <q-toolbar-title
      :class="
        $q.platform.is.mobile
          ? 'text-teal-4 q-pa-md text-weight-bolder'
          : 'text-teal-4 text-h4 q-pa-md text-weight-bolder'
      "
    >
      {{ props.title }}</q-toolbar-title
    >
    <div v-if="!$q.platform.is.mobile" class="row">
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
    </div>
    <div v-else>
      <q-btn
        flat
        class="text-h6 text-weight-bold hoverable"
        @click="showMenu = !showMenu"
      >
        <q-icon name="menu" color="teal-4" size="2em" />
      </q-btn>
    </div>
  </q-toolbar>
</template>

<style>
.q-dialog__inner--minimized {
  padding: 0px !important;
}
</style>
