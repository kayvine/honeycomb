<template>
  <div class="b-beeContent_actionBar">

    <div 
      class="b-beeContent_selectActions pb-3" 
      :class="{'b-beeContent_selectActions--visible': getSelectedCount}"
    >

      <div>
        <span class="b-beeContent_selectActions_selectionCount pr-3">
          <!-- if 1 item => 'item' (singular) -->
          <span>{{ getSelectedCount }} item(s)</span> selected
        </span>
        <v-btn>Deselect All</v-btn>
      </div>

      <div>
        <!-- Possible feature: 'add to folder' -->
        <div class="folders-btn"></div>

        <v-btn>
          <span class="hide-mobile">Delete</span>
          <!-- Replace text with icon on mobile -->
          <span class="show-mobile hide-desktop freddicon trash"></span>
        </v-btn>

      </div>

    </div>


    <div class="b-beeContent_searchBox" style="max-width: 600px">
      <!-- <p>Advanced custom options<br>https://vuetifyjs.com/en/components/combobox
      The v-combobox improves upon the added functionality from v-select and v-autocomplete. This provides 
      you with an expansive interface to create truly customized implementations. This example takes advantage 
      of some more advanced features such as a custom filter algorithm, inline list editing and dynamic input items.</p> -->
      <v-text-field
        v-model="somefilter"
        solo
        hide-details
        append-icon="filter_list"
        clear-icon="cancel"
        clearable
        label="Filter"
        class="hidden-sm-and-down"
      ></v-text-field>
    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "BeeContentActionbar",
  data: () => ({
    somefilter: ""
  }),
  computed: {
    ...mapGetters([
      'getSelectedCount'
    ])
  },
};
</script>

<style lang="scss" scoped>
.b-beeContent_actionBar {
  position: relative;
  padding-bottom: 2px;
}

.b-beeContent_selectActions {
  position: absolute;
  top: -50px;
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  top: -50px;
  left: 0;
  opacity: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
  transition: opacity 0.3s cubic-bezier(0.62, 0.25, 0.15, 0.87), 
              top 0.3s cubic-bezier(0.62, 0.25, 0.15, 0.87), 
              z-index 0.3s ease-in, 
              visibility 0s 0.3s;
}

.b-beeContent_selectActions--visible {
  visibility: visible;
  opacity: 1;
  top: 0;
  transition: opacity 0.3s cubic-bezier(0.62, 0.25, 0.15, 0.87), 
              top 0.3s cubic-bezier(0.62, 0.25, 0.15, 0.87), 
              z-index 0.3s ease-in, 
              visibility 0s 0s;
}
</style>