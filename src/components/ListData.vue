<template>
  <div v-for="(item, index) in $store.state.list.print()" :key="index">
    <div
      class="flex items-center justify-center bg-gray-800 rounded-full p-3 text-white text-center"
      v-if="item != '->' && item !='X'"
      style="width: 125px; height: 125px"
    >
      {{ item }}
    </div>
    <div
      class="text-3xl flex items-center justify-center bg-gray-800 rounded-full p-3 text-white text-center"
      style="width: 125px; height: 125px"
      v-else-if="item == '->'"
    >
      ->
    </div>
    <div
      class="text-3xl flex items-center justify-center bg-gray-800 rounded-full p-3 text-white text-center"
      style="width: 125px; height: 125px"
      v-else-if="item == 'X'"
    >
      X
    </div>
  </div>
</template>

<script>
export default {
};
</script>