<template>
  <v-list flat>
    <v-subheader>View by Status</v-subheader>
    <v-list-item-group v-model="statusview">
      <v-list-item v-for="(state, i) in status" :key="i">
        <v-list-item-icon>
          <v-icon v-text="state.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="state.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-divider></v-divider>
    <v-subheader>View by Type</v-subheader>
    <v-list-item-group v-model="typeview">
      <v-list-item v-for="(type, i) in types" :key="i">
        <v-list-item-icon>
          <v-icon v-text="type.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="type.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "ContentSidebar",
  components: {
    // HelloWorld
  },
  data: () => ({
    statusview: 1,
    typeview: 1,
    status: [
      { text: "Recent", icon: "access_time" },
      { text: "Ongoing", icon: "arrow_right_alt" },
      { text: "Draft", icon: "drafts" },
      { text: "Archived", icon: "archive" }
    ],
    types: [
      { text: "News", icon: "local_post_office" },
      { text: "Attractions", icon: "local_activity" },
      { text: "Dining", icon: "restaurant" },
      { text: "Books", icon: "book" },
      { text: "Family", icon: "directions_run" },
      { text: "Office", icon: "content_cut" },
      { text: "Promotions", icon: "local_offer" },
      { text: "Health", icon: "healing" }
    ]
  })
};
</script>
