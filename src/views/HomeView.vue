<template>
  <MainLayout>
    <template #mainContent>
      <v-container>
        <v-row>
          <v-col>
            <v-table>
              <thead>
                <tr>
                  <th v-for="(header, index) in headings" :key="header.value">
                    <div v-if="!hiddenColumns.includes(index)">
                      {{ header.text }}
                      <v-btn
                        height="25"
                        width="25"
                        icon
                        color="primary"
                        @click="showColumnModal(index)"
                      >
                        <v-icon :size="15">mdi-eye-off-outline</v-icon>
                      </v-btn>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tableData" :key="item.id">
                  <td v-for="(value, key, index) in item" :key="value">
                    <div v-if="!hiddenColumns.includes(index)">
                      <router-link
                        :to="{ name: 'detailed', params: { id: value } }"
                        v-if="key as string === 'id'"
                        >{{ value }}</router-link
                      >
                      <span v-else>{{ value }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog v-model="columnModalOpen">
        <v-card>
          <v-card-title>{{ $t("selectColHide") }}</v-card-title>
          <v-card-text>
            <v-checkbox
              v-for="(header, index) in headers"
              :key="header.value"
              :label="header.text"
              v-model="hiddenColumns"
              :value="index"
            ></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="closeColumnModal">Save</v-btn>
            <v-btn @click="closeColumnModal">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Ifact } from "../api/axios";
// Components
import MainLayout from "../components/layout/MainLayout.vue";
import { fetchFacts } from "../api/axios";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      tableData: [] as Array<Partial<Ifact>>,
      columnModalOpen: false,
      hiddenColumns: [] as number[],
    };
  },
  computed: {
    headings(): any {
      return [
        { text: this.$t("id"), value: "id" },
        { text: this.$t("text"), value: "text" },
        { text: this.$t("phone"), value: "phone" },
        { text: this.$t("type"), value: "type" },
      ];
    },
  },
  components: {
    MainLayout,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let fetched = await (
        await fetchFacts()
      ).map(element => ({
        id: element._id,
        text: element.text,
        updatedAt: element.updatedAt,
        type: element.type,
      }));
      this.tableData = fetched;
    },
    showColumnModal(index: number) {
      this.hiddenColumns = [...this.hiddenColumns, index]; // add index to hidden columns
      this.columnModalOpen = true;
    },
    closeColumnModal() {
      this.columnModalOpen = false;
    },
  },
});
</script>
