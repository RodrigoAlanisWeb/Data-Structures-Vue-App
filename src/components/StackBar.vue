<template>
  <div class="w-full">
    <input
      type="text"
      class="p-2 border rounded-sm m-2"
      placeholder="Data"
      v-model.trim="data"
    />
    <button
      @click="insert()"
      class="ml-2 text-white text-xl border border-gray-900 p-1 w-2/12 rounded-md bg-gray-800"
    >
      Insert
    </button>
    <button
      class="ml-2 text-white text-xl border border-gray-900 p-1 w-2/12 rounded-md bg-gray-800"
      @click="deleteIn()"
    >
      Delete
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      data: "",
    };
  },
  methods: {
    ...mapActions(["insertInStack", "deleteInStack"]),
    insert() {
      if (this.data.length == 0 ) {
        return
      }
      this.insertInStack(this.data);
      this.data = ""
    },
    deleteIn() {
      this.deleteInStack();
    },
  },
};
</script>