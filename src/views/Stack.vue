<template>
  <div class="container flex items-center flex-col justify-between h-auto" style="height: 90vh">
    <div class="container w-1/5">
      <StackData :data="item" v-for="(item,index) in this.$store.state.stack.print()" :key="index"/>
    </div>
    <StackBar />
  </div>
</template>

<script>
import StackData from "@/components/StackData.vue";
import StackBar from "@/components/StackBar.vue";
import mapState from "vuex";

export default {
  name: "Stack",
  components: {
    StackData,
    StackBar,
  },
};
</script>

<style>
</style>