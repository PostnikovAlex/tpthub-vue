<template>
  <header>
    <v-container>
      <v-row align="center" class="text-center">
        <v-col cols="2">
          <v-img
            :src="require('../../assets/logo.svg')"
            class="my-3"
            contain
            height="50"
            width="50"
          />
        </v-col>
        <v-spacer cols="6"></v-spacer>
        <v-col cols="2">
          <Select></Select>
          <!-- </select> -->
        </v-col>
        <v-col cols="2">
          <v-app-bar-nav-icon icon="text" variant="text">
            <v-icon size="large" color="black" icon="mdi-menu"></v-icon>
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>
      <v-row>
        <div v-if="$slots.subHeader" class="sub-header">
          <slot name="subHeader"></slot>
        </div>
      </v-row>
    </v-container>
  </header>

  <main>
    <slot name="mainContent"></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import i18n from "../../dictionary/index";
import Select from "../ui/Select.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    Select,
  },
  methods: {
    changeLocale(event: Event) {
      const locale = (event.target as HTMLSelectElement).value as "ru" | "eng";
      // i18n.global.locale = locale;
    },
  },
});
</script>
