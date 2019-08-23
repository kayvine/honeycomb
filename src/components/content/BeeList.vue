<template>
  <div>
    <div v-if="selectedItems[0]" class="selected-items px-1">
      <span>{{ selectedItems.length }} selected</span>
      <v-btn>Delete</v-btn>
    </div>

    <v-card flat>
      <div>
        <template v-for="(item, index) in contentitems">
          <v-hover 
            v-slot:default="{ hover }" 
            :key="item.id"
          >
            <v-sheet :key="item.id" class="item d-flex">
              <div class="item__checkbox">
                <v-checkbox 
                  v-model="selectedItems" 
                  :value="item.title"
                  :class="hover ? 'd-flex' : 'd-none'"
                ></v-checkbox>
              </div>
              <div class="item__icon">
                <v-icon class="icon">local_post_office</v-icon>
              </div>
              <div class="item__details">
                <h4 v-text="item.title" color="indigo"></h4>
                <p>
                  <span>News</span>
                  <span><b>-</b> Extra news</span>
                </p>
              </div>
              <div class="item__status"></div>
              <div class="item__stats"></div>
              <div class="item__actions">
                <template v-if="hover">
                  <v-btn tile depressed min-width="110">View</v-btn>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn tile depressed v-on="on" class="dd-right">
                        <v-icon>arrow_drop_down</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Replicate</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Delete</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </div>
            </v-sheet>
          </v-hover>
          <v-divider
            v-if="index + 1 < contentitems.length"
            :key="index"
          ></v-divider>
        </template>
      </div>
    </v-card>

    <!-- <v-list>
      <v-list-item v-for="(contentitem, index) in contentitems" :key="index">
        <bee-list-item :item="contentitem"></bee-list-item>
      </v-list-item>
    </v-list> -->
  </div>
</template>

<script>
// import BeeListItem from "./BeeListItem";

export default {
  name: "BeeList",
  components: {
    // BeeListItem
  },
  props: ["contentitems"],
  data: () => ({
    selectedItems: [],
  }),
};
</script>

<style lang="scss" scoped>
.item {
  padding-left: 4px;
  padding-top: 18px;
  padding-bottom: 18px;

  .item__checkbox {
    position: absolute;
    top: 0;
    left: -36px;
    padding: 0 24px 24px 0;
  }

  .item__icon {
    margin-right: 18px;
  }

  .item__details {
    flex: 1 1 200px;
  }

  .item__status {
    flex: 0 0 120px;
  }

  .item__stats {
    flex: 0 0 280px;
  }

  .item__actions {
    flex: 0 0 180px;

    .dd-right {
      border-left: 1px solid #fff;
      min-width: inherit;
    }
  }

}
</style>
