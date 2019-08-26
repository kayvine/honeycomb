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
              <v-list-item-subtitle>{{ user.company }}</v-list-item-subtitle>
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

    <v-app-bar app flat>
      <v-toolbar-items>
        <v-btn
          text
          class="user-company"
          width="100%"
          max-width="240px"
          @click.stop="drawer = !drawer"
        >
          <span class="company-name" v-text="user.company"></span>
          <v-spacer></v-spacer>
          <v-icon>menu</v-icon>
        </v-btn>
        <v-btn text to="/">Dashboard</v-btn>
        <v-btn text to="/content">Content</v-btn>
        <v-btn text to="/web">Web</v-btn>
        <v-btn text to="/mailing">Mailing</v-btn>
        <v-btn text to="/social">Social</v-btn>
        <v-btn text to="/insights">Insights</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn depressed color="primary">Create</v-btn>

      <v-divider class="mx-4" inset vertical></v-divider>

      <v-btn icon>
        <v-icon>contact_support</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge overlap>
          <template v-slot:badge
            >2</template
          >
          <v-icon>notification_important</v-icon>
        </v-badge>
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
      <router-view></router-view>
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
    user: {
      id: 123,
      name: "Johnny Strong",
      company: "Spaceforce Alpha",
      websites: [
        { url: "spaceforce.com", favicon: "dashboard" },
        { url: "alpha-force.org", favicon: "hot_tub" }
      ]
    },
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
    userWebsites() {
      return this.user.websites;
    }
  },
  methods: {
    changeClient() {
      alert("Changing clients");
    }
  }
};
</script>

<style lang="scss">
.theme--light.v-application {
  background: #fff !important;
}
.v-overlay.v-overlay--active {
  z-index: 6 !important;
}
.org-options.v-navigation-drawer {
  transition-duration: 0.4s;
}
header.theme--light.v-sheet {
  background-color: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.v-app-bar .v-toolbar__content {
  padding-left: 0;
}
.user-company {
  box-shadow: inset -1px 0 2px 0 rgba(41, 41, 41, 0.04),
    inset -2px 0 5px 0 rgba(41, 41, 41, 0.035);

  .company-name {
    overflow: hidden;
    max-width: 175px;
    text-overflow: ellipsis;
  }
}
.v-toolbar.position--fixed {
  position: fixed;
  z-index: 4;
}
</style>
