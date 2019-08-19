<template>
  <div>
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
