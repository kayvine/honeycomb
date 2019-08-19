<template>
  <div>
    <v-list-item-title>{{ contentitem.title }}</v-list-item-title>
  </div>
</template>

<script>
export default {
  name: "BeeItem",
  props: ["contentitem"]
};
</script>
