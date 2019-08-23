<template>
  <div>
    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </div>
</template>

<script>
export default {
  name: "BeeListItem",
  props: ["item"]
};
</script>
