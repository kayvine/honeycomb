<template>
  <v-list>
    <v-list-item v-for="(item, i) in contentitems" :key="i">
      <bee-item :contentitem="item"></bee-item>
    </v-list-item>
  </v-list>
</template>

<script>
import BeeItem from "./BeeItem";

export default {
  name: "ListView",
  components: {
    BeeItem
  },
  props: ["contentitems"]
};
</script>
