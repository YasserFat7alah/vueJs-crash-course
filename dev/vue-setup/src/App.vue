<script setup >
   import { ref, onMounted } from 'vue';

      const name = ref('Yasser Fathallah');
      const status = ref('active');
      const tasks = ref([]);
      const link = ref('https://google.com');
      const newTask = ref('');

      const toggleStatus = () =>{
        if(status.value === 'active') status.value = 'pending';
        else if(status.value === 'pending') status.value ='inactive';
        else status.value = 'active';
      };

      const addTask = () => {
        if(newTask.value.trim()) {
          tasks.value.push(newTask.value);
          newTask.value = '';
        }
      };

      const deleteTask = (index) => {
        tasks.value.splice(index, 1);
      }

      onMounted( async () =>{
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await res.json();
            tasks.value = await data.map((task) => task.title);
        } catch (error) {
          
        }
      })

</script>

<template>

<!-- NAME -->
<h1>{{ name }}</h1>

<!-- STATUS -->
<p v-if="status=== 'active' ">User is active</p>
<p v-else-if="status === 'pending' ">User is pending</p>
<p v-else>User is inactive</p>

<hr>
<!-- TASK LIST -->
<h3>Tasks:</h3>
<li v-for="(task, index) in tasks" :key="task">
  <button @click="deleteTask(index)">x</button>
  <span>{{ task }}</span>
</li>
<br/><br/>
<!-- ADD A TASK -->
<form @submit.prevent="addTask">
  <label for="newTask" > Add a task:  </label>
  <input type="text" name="newTask" id="newTask" v-model="newTask" />
  <button type="submit">submit</button>
</form>

<hr>
<h3>Links:</h3>
<!-- <a v-bind:href="link">Google</a> -->
<a :href="link">Google</a>
<br>
<!-- <button v-on:click="toggleStatus">Change Status</button> -->
<button @click="toggleStatus">Change Status</button>
</template>

<style scoped>

</style>
