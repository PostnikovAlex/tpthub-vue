<template>
  <MainLayout>
    <template #mainContent>
      <v-container>
        <v-row>
          <v-col>
            <v-table>
              <thead>
                <tr>
                  <th v-for="header in headers" :key="header.value">
                    {{ header.text }}
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tableData" :key="item.id">
                  <td v-for="value in item" :key="value">
                    {{ value }}
                  </td>
                  <td>
                    <v-btn color="primary" @click="openModal(item)"
                      ><v-icon
                        size="large"
                        color="white"
                        icon="mdi-eye"
                      ></v-icon
                    ></v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog v-model="columnModalOpen">
        <v-card>
          <v-card-title>Select columns to hide:</v-card-title>
          <v-card-text>
            <v-checkbox
              v-for="header in headers"
              :key="header.value"
              :label="header.text"
              v-model="hiddenColumns"
              :value="header.value"
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
      headers: [
        { text: "id", value: "id" },
        { text: "created", value: "created" },
        { text: "text", value: "text" },
      ],
      tableData: [] as Array<Partial<Ifact>>,
      columnModalOpen: false,
      hiddenColumns: [],
    };
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
      ).map(facts => ({
        id: facts._id,
        created: facts.createdAt,
        text: facts.text,
      }));

      this.tableData = fetched;
    },
    showColumnModal(header: string) {
      this.hiddenColumns = []; // reset hidden columns
      // console.log(header);
      // this.hiddenColumns.push(header.value); // set hidden column to current header
      this.columnModalOpen = true;
    },
    closeColumnModal() {
      this.columnModalOpen = false;
      // console.log(this.headers);
      // this.headers = this.headers.filter(
      //   header => !this.hiddenColumns.includes(header.value),
      // );
    },
  },
});
</script>
