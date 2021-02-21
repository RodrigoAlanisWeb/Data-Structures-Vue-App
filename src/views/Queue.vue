<template>
  <div class="container flex flex-col justify-between" style="height: 90vh">
    <div class="container flex w-6/12 m-auto justify-center">
      <QueueData
        v-for="(item, index) in $store.state.queue.print()"
        :data="item"
        :key="index"
      />
    </div>
    <QueueBar />
  </div>
</template> 

<script>
import QueueData from "@/components/QueueData.vue";
import QueueBar from "@/components/QueueBar.vue";

export default {
  components: {
    QueueData,
    QueueBar,
  },
};
</script>

<style>
</style>