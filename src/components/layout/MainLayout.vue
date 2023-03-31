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
          <select>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </v-col>
        <v-col cols="2">
          <v-app-bar-nav-icon icon="text" variant="text">
            <v-icon size="large" color="black" icon="mdi-menu"></v-icon>
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
  </header>
  <div class="sub-header">
    <slot name="sub-header"></slot>
  </div>
  <main></main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {};
  },
});
</script>
