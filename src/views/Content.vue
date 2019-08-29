<template>
  <div id="b-content" class="b-beeContent">
    <v-toolbar
      class="b-beeContent_toolbar position--fixed"
      dense
      flat
      height="60px"
      width="100%"
    >
      <v-toolbar-title class="pr-10">Contentmanagement</v-toolbar-title>

      <bee-filter class="b-beeContent_searchBox"></bee-filter>

      <div class="flex-grow-1"></div>

      <bee-context-actions class="b-beeContent_searchBox"></bee-context-actions>
    </v-toolbar>

    <v-container class="padding--toolbar">
      <v-row>
        <v-col class="pt-0">
          <bee-content-sidebar />
        </v-col>
        <v-col cols="12" sm="9" class="pt-0">
          <div class="b-beeContent_listOuter pl-12">
            <bee-content-actionbar />

            <div class="b-beeContent_listWrapper pt-10">
              <div class="b-beeContent_list">
                <bee-list v-bind:contentitems="items" />
              </div>
            </div>

            <ul>
              <li v-for="(post, index) in posts" :key="index">
                {{ post.title }}
              </li>
            </ul>
          </div>
          <!--  .b-beeContent_listOuter -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BeeContentSidebar from "../components/content/BeeContentSidebar";
import BeeFilter from "../components/content/BeeFilter";
import BeeContextActions from "../components/content/BeeContextActions";
import BeeContentActionbar from "../components/content/BeeContentActionbar";
import BeeList from "../components/content/BeeList";
import { mapState } from "vuex";
import axios from "axios";

export default {
  components: {
    BeeContentSidebar,
    BeeFilter,
    BeeContextActions,
    BeeContentActionbar,
    BeeList
  },
  data: () => ({
    posts: [] // declare an empty array to fill with API request
  }),
  computed: {
    ...mapState(["items"])
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss">
.b-beeContent_listOuter {
  position: relative;
}
</style>
