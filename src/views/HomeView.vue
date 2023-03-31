<template>
  <MainLayout>
    <template #sub-header>
      <v-btn>{{ $t("back") }}</v-btn>
    </template>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import MainLayout from "../components/layout/MainLayout.vue";
export default defineComponent({
  name: "HomeView",

  components: {
    MainLayout,
  },
});
</script>
