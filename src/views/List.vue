<template>
  <div class="container flex flex-col justify-between" style="height: 90vh">
    <div class="container flex w-full justify-around m-auto">
      <ListData />
    </div>
    <ListBar />
  </div>
</template> 

<script>
import ListData from "@/components/ListData.vue";
import ListBar from "@/components/ListBar.vue";

export default {
  components: {
    ListData,
    ListBar,
  },
};
</script>

<style>
</style>