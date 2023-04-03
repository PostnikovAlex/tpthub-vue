<template>
  <MainLayout>
    <template #subHeader>
      <v-btn color="primary" @click="$router.go(-1)">{{ $t("back") }}</v-btn>
    </template>
    <template #mainContent>
      <v-container>
        <v-row>
          <v-col>
            <div>
              <h2>{{ heading }}</h2>
              <v-card>
                <v-card-title>{{ fact.type }}</v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>Status:</v-list-item-content>
                      <v-list-item-content>{{
                        fact.status
                      }}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>User:</v-list-item-content>
                      <v-list-item-content>{{ fact.user }}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Text:</v-list-item-content>
                      <v-list-item-content>{{ fact.text }}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Source:</v-list-item-content>
                      <v-list-item-content>{{
                        fact.source
                      }}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Created At:</v-list-item-content>
                      <v-list-item-content>{{
                        fact.createdAt
                      }}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Updated At:</v-list-item-content>
                      <v-list-item-content>{{
                        fact.updatedAt
                      }}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Deleted:</v-list-item-content>
                      <v-list-item-content>{{
                        fact.deleted
                      }}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>Used:</v-list-item-content>
                      <v-list-item-content>{{ fact.used }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Ifact } from "../api/axios";
// Components
import MainLayout from "../components/layout/MainLayout.vue";
import { fetchFact } from "../api/axios";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      fact: {} as Ifact,
    };
  },
  components: {
    MainLayout,
  },
  methods: {
    async fetchData(id: string) {
      let fetched = await fetchFact(id);
      this.fact = fetched;
    },
  },

  mounted() {
    this.fetchData(this.$route.params.id as string);
  },
});
</script>
