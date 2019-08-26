<template>
  <div id="b-content" class="b-beeContent">
    <v-toolbar class="b-beeContent_toolbar position--fixed" dense flat width="100%">
      <v-toolbar-title>Contentmanagement</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container class="pt-12">
      <div class="pb-12" style="width: 100%"></div>
      <v-row>
        <v-col class="pt-0">
          <bee-content-sidebar />
        </v-col>
        <v-col cols="12" sm="9" class="pl-12 pt-0">
          <div class="b-beeContent_listOuter">
            
            <bee-content-actionbar />

            <div class="b-beeContent_listWrapper">
              <div class="b-beeContent_list">
                <bee-list v-bind:contentitems="items" />
              </div>
            </div>

            <ul>
              <li v-for="(post, index) in posts" :key="index">
                {{ post.title }}
              </li>
            </ul>

          </div><!--  .b-beeContent_listOuter -->
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import BeeContentSidebar from "../components/content/BeeContentSidebar";
import BeeContentActionbar from "../components/content/BeeContentActionbar";
import BeeList from "../components/content/BeeList";
import { mapState } from 'vuex'
import axios from "axios";

export default {
  components: {
    BeeContentSidebar,
    BeeContentActionbar,
    BeeList
  },
  data: () => ({
    posts: [], // declare an empty array to fill with API request
    // list example below
  }),
  computed: {
    ...mapState([
      'items'
    ])
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  }
};
</script>
