<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      class="org-options"
      temporary
      app
      width="340"
    >
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-list-item link v-on="on">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/78.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">Organization</v-list-item-title>
              <v-list-item-subtitle>{{ userCompany }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>arrow_drop_down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
        <v-list>
          <v-list-item
            v-for="(client, i) in clients"
            :key="i"
            @click="changeClient"
          >
            <v-list-item-title>{{ client }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-list nav dense>
        <v-subheader>Sites</v-subheader>
        <v-list-item-group color="indigo">
          <v-list-item v-for="(site, i) in userWebsites" :key="i">
            <v-list-item-icon>
              <v-icon v-text="site.favicon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="site.url"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>settings</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Organization settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-items>
        <v-btn
          text
          width="100%"
          height="100%"
          max-width="240px"
          @click.stop="drawer = !drawer"
        >
          {{ userCompany }}
          <v-spacer></v-spacer>
          <v-icon>menu</v-icon>
        </v-btn>
        <v-btn text to="/content">Content</v-btn>
        <v-btn text to="/web">Web</v-btn>
        <v-btn text to="/mail">Mail</v-btn>
        <v-btn text to="/about">About</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-btn icon>
        <v-icon>contact_support</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notification_important</v-icon>
      </v-btn>
      <v-btn icon>
        <v-avatar size="32">
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            :alt="user.name"
          >
          </v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-content role="main">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import AppBarSidepanelTrigger from "./components/AppBarSidepanelTrigger";

export default {
  name: "App",
  components: {
    // AppBarSidepanelTrigger
  },
  data: () => ({
    drawer: null,
    user: [
      {
        id: 123,
        name: "Johnny Strong",
        company: "Spaceforce Alpha",
        websites: [
          { url: "spaceforce.com", favicon: "dashboard" },
          { url: "alpha-force.org", favicon: "hot_tub" }
        ]
      }
    ],
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    clients: [
      "Autoviger",
      "B-one-coaching",
      "Bouhon",
      "Go2theworld",
      "Hansea",
      "Heidebloem",
      "Jejowines",
      "Some company"
    ]
  }),
  computed: {
    userCompany() {
      return this.user[0].company;
    },
    userWebsites() {
      return this.user[0].websites;
    }
  },
  methods: {
    changeClient() {
      alert("Changing clients");
    }
  }
};
</script>

<style>
.v-overlay.v-overlay--active {
  z-index: 6 !important;
}
.org-options.v-navigation-drawer {
  transition-duration: 0.4s;
}
</style>
