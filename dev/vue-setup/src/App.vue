<script >
   import { ref } from 'vue';

  export default {
    setup() {
      const name = ref('Yasser Fathallah');
      const status = ref('active');
      const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
      const link = ref('https://google.com');

      const toggleStatus = () =>{
        if(status.value === 'active') status.value = 'pending';
        else if(status.value === 'pending') status.value ='inactive';
        else status.value = 'active';
      }
      
      return{
        name,
        status,
        tasks,
        link,
        toggleStatus
      }
    }
  }
</script>

<template>
<h1>{{ name }}</h1>

<p v-if="status=== 'active' ">User is active</p>
<p v-else-if="status === 'pending' ">User is pending</p>
<p v-else>User is inactive</p>

<h3>Tasks:</h3>
<li v-for="task in tasks" :key="task">{{ task }}</li>

<h3>Links:</h3>
<!-- <a v-bind:href="link">Google</a> -->
<a :href="link">Google</a>
<br>
<!-- <button v-on:click="toggleStatus">Change Status</button> -->
<button @click="toggleStatus">Change Status</button>
</template>

<style scoped>

</style>
