<template>
  <div>
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
</template>

<script>
export default {
  name: "SomeFilterTool",
  data: () => ({
    somefilter: ""
  })
};
</script>
