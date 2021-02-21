<template>
  <nav class="grid sm:grid-cols-5 bg-gray-800 w-full p-2">
    <h2 class="text-white m-auto sm:col-start-1 col-end-2">Data Structures</h2>
    <ul class="sm:col-start-2 sm:col-end-5 text-white w-6/12 m-auto flex flex-wrap justify-around">
      <li><router-link class="hover:text-gray-300" to="/stack">Stack</router-link></li>
      <li><router-link class="hover:text-gray-300" to="/queue">Queue</router-link></li>
      <li><router-link class="hover:text-gray-300" to="/linkedlist">Linked List</router-link></li>
      <li><router-link class="hover:text-gray-300" to="/">Binary Tree</router-link></li>
    </ul>
  </nav>                      
</template>

<script>
export default {};
</script>                                 