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
    <input
      type="text"
      class="p-2 border rounded-sm m-2"
      placeholder="Data"
      v-model.trim="data2"
    />
    <input
      type="number"
      class="p-2 border rounded-sm m-2"
      placeholder="Index"
      v-model="index"
    />
    <button
      @click="insertAt()"
      class="ml-2 text-white text-xl border border-gray-900 p-1 w-2/12 rounded-md bg-gray-800"
    >
      Insert At
    </button>
    <input
      type="number"
      class="p-2 border rounded-sm m-2"
      placeholder="Index"
      v-model="index2"
    />
    <button
      @click="deleteAt()"
      class="ml-2 text-white text-xl border border-gray-900 p-1 w-2/12 rounded-md bg-gray-800"
    >
      Delete At
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      data: "",
      index: "",
      data2: "",
      index2: ""
    };
  },
  methods: {
    ...mapActions(["insertInList",'insertAtList','deleteAtList']),
    insert() {
      if (this.data.length == 0 ) {
        return
      }
      this.insertInList(this.data);
      this.data = ""
    },
    insertAt() {
        if (this.data2.length == 0 || this.index.length == 0) {
            return null;
        }
        this.insertAtList({data: this.data2, index: this.index});
        this.data = ""
        this.index = ""
    },
    deleteAt() {
      if (this.index2.length == 0) {
            return null;
        }
        this.deleteAtList(parseInt(this.index2));
        this.index2 = ""
    }
  },
};
</script>