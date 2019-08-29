<template>
  <div id="b-web" class="b-beeContent">
    <v-toolbar 
      class="b-beeContent_toolbar position--fixed"
      dense 
      flat 
      width="100%">
      <v-toolbar-title>'website name/url' dd-switch</v-toolbar-title>

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

    <v-container class="padding--toolbar">

      <v-card class="b-beeContent_sitemap" width="300" tile>
        <div class="b-beeContent_sitemapInner">
          <bee-content-sitemap />
        </div>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import BeeContentSitemap from "@/components/web/BeeContentSitemap";

export default {
  components: {
    BeeContentSitemap,
  },
  data: () => ({
    // 
  }),
}
</script>

<style lang="scss" scoped>
.b-beeContent_sitemap {
  position: fixed;
  top: calc(65px + 49px);;
  left: 0;
  height: calc(100% - 65px - 49px);
  overflow-y: auto;
}
.b-beeContent_sitemapInner {
  padding: 1rem;
}
</style>