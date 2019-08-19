<template>
  <div id="content" class="">
    <v-row>
      <v-col>
        <content-sidebar />
      </v-col>
      <v-col cols="12" sm="9">
        <some-filter-tool />
        <h1 class="mb-3">Contentmanagement</h1>
        <list-view :contentitems="posts" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContentSidebar from "../components/content/ContentSidebar";
import SomeFilterTool from "../components/content/SomeFilterTool";
import ListView from "../components/content/ListView";
import axios from "axios";

export default {
  components: {
    ContentSidebar,
    SomeFilterTool,
    ListView
  },
  data: () => ({
    posts: []
  }),
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  }
};
</script>
