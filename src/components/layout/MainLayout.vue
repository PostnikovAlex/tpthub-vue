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
          <select v-model="$i18n.locale" @change="changeLocale">
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale }}
            </option>

            <!-- <option
              :key="langObj.value"
              v-for="langObj in languages"
              :value="langObj.value"
            >
              {{ langObj.label }}
            </option> -->
            <!-- <option value="eng">{{ $t("eng.avaliableLanguages.0") }}</option>
            <option value="ru">{{ $t("ru.avaliableLanguages.0") }}</option> -->
          </select>
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
import { AVAILABLE_LANGUAGES } from "../../dictionary/index";
export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      languages: AVAILABLE_LANGUAGES,
    };
  },
  methods: {
    changeLocale(event: Event) {
      const locale: any = (event.target as HTMLSelectElement).value;
      console.log(i18n);
      i18n.global.locale = locale;
    },
  },
});
</script>
