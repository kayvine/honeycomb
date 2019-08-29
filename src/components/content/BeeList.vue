<template>
  <div>
    <v-card flat>
      <div>
        <template v-for="(item, index) in contentitems">
          <v-hover v-slot:default="{ hover }" :key="item.id">
            <v-sheet class="item d-flex">
              <div class="item__checkbox">
                <v-checkbox v-model="selected" :value="item.id"></v-checkbox>
              </div>
              <div class="item__icon">
                <v-icon v-text="item.icon"></v-icon>
              </div>
              <div class="item__details">
                <h4 v-text="item.title"></h4>
                <p>
                  <span v-text="item.type"></span>
                  <span><b> ·</b> Article</span>
                </p>
              </div>
              <div class="item__status">
                <v-chip
                  small
                  v-text="item.status"
                  class="ma-1"
                  :class="{ success: item.status === 'published' }"
                ></v-chip>
              </div>
              <div class="item__stats"></div>
              <div class="item__actions">
                <div :class="hover ? 'd-flex' : 'd-none'">
                  <v-btn tile depressed min-width="110">View</v-btn>
                  <v-menu>
                    <template v-slot:activator="{ on: menu }">
                      <v-btn tile depressed v-on="menu" class="dd-right">
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
                </div>
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
// import { mapState, mapMutations } from 'vuex'

export default {
  name: "BeeList",
  components: {
    // BeeListItem
  },
  props: ["contentitems"],
  data: () => ({
    //
  }),
  computed: {
    // store form handling
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        this.$store.commit("updateSelected", value);
      }
    }
  }
  // methods: {},
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
    padding: 0 4px 24px 0;
    height: 50px;
    width: 36px;

    .v-input--checkbox {
      display: none;

      &.v-input--is-label-active {
        display: flex;
      }
    }
  }

  .item__icon {
    margin-right: 18px;
  }

  .item__details {
    flex: 0 1 200px;
  }

  .item__status {
    flex: 0 0 120px;

    .success {
      background-color: #d8eacc !important;
      color: #241c15;
    }
  }

  .item__stats {
    flex: 1 0 auto;
    min-width: 80px;
  }

  .item__actions {
    flex: 0 0 180px;

    .dd-right {
      border-left: 1px solid #fff;
      min-width: inherit;
    }
  }

  &:hover {
    .item__checkbox .v-input--checkbox {
      display: flex;
    }
  }
}
</style>
