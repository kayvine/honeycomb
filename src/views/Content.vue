<template>
  <div id="content" class="">
    <v-toolbar class="position--fixed" dense flat width="100%">
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
      <v-row>
        <v-col>
          <content-sidebar />
        </v-col>
        <v-col cols="12" sm="9" class="pl-12">
          <some-filter-tool class="pa-1" />

          <bee-list v-bind:contentitems="items" />

          <ul>
            <li v-for="(post, index) in posts" :key="index">
              {{ post.title }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContentSidebar from "../components/content/ContentSidebar";
import SomeFilterTool from "../components/content/SomeFilterTool";
import BeeList from "../components/content/BeeList";
import axios from "axios";

export default {
  components: {
    ContentSidebar,
    SomeFilterTool,
    BeeList
  },
  data: () => ({
    posts: [], // declare an empty array to fill with API request
    // list example below
    items: [
      {
        id: 15001,
        title: "Brunch this weekend?",
        type: "News",
        icon: "local_post_office",
        author: "Ali Connors",
        createdOn: "2019-08-21T13:28:06.419Z",
        action: "draft"
      },
      {
        id: 14854,
        title: "Summer BBQ",
        type: "Event",
        icon: "local_activity",
        author: "Me",
        createdOn: "2019-08-17T13:28:06.419Z",
        action: "published"
      },
      {
        id: 14850,
        title: "Oui oui",
        type: "Books",
        icon: "book",
        author: "Me",
        createdOn: "2019-07-30T13:28:06.419Z",
        action: "published"
      },
      {
        id: 14793,
        title: "Birthday gift",
        type: "Promotions",
        icon: "local_offer",
        author: "Trevor Hansen",
        createdOn: "2019-07-28T13:28:06.419Z",
        action: "published"
      },
      {
        id: 14792,
        title: "Item title",
        type: "Trevor Hansen",
        icon: "book",
        author: "Ali Connors",
        createdOn: "2019-07-28T12:30:06.419Z",
        action: "draft"
      },
    ]
  }),
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  }
};
</script>
