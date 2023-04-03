<template>
  <div>
    <select
      id="locale-select"
      v-model="selectedLocale"
      @change="changeLocale($event)"
    >
      <option value="ru">{{ $t("russian") }}</option>
      <option value="eng">{{ $t("english") }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import i18n from "../../dictionary/index";
export default defineComponent({
  name: "LocaleSelector",
  setup() {
    // const { i18n } = useI18n();
    const selectedLocale = computed({
      get: () => i18n.global.locale.value,
      set: (value: "ru" | "eng") => {
        i18n.global.locale.value = value;
      },
    });

    const changeLocale = (event: Event) => {
      const locale = (event.target as HTMLSelectElement).value as "ru" | "eng";
      selectedLocale.value = locale;
    };

    return { selectedLocale, changeLocale };
  },
});
</script>
