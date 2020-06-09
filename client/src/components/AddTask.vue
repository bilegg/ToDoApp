<template>
  <div>
      <h1>Add task</h1>
      <a style="text-decoration:none" href="http://localhost:8080">
        <button class="but">
          Go to list
        </button>
      </a>
      <form id="mainForm">
        <input type="text" v-model="title" name="title" placeholder="New task">
        <br><br>
        <textarea name="description" v-model="description" rows="4" cols="50">Description</textarea>
        <br><br>
        <button @click="addTask" class="addBut">Add</button>
      </form>
  </div>
</template>

<script>
import TaskHandler from '@/services/TaskHandler'
export default {
  data () {
    return {
      title: '',
      description: 'Put your description here'
    }
  },
  methods: {
    async addTask () {
      const response = await TaskHandler.addTask({
        title: this.title,
        description: this.description
      })

      console.log(response.data)

      document.getElementById('mainForm').reset()
    }
  }
}
</script>

<style scoped>
.but{
  position: absolute;
  top:8%;
  right:5%;
  border: 1px solid rgb(156, 152, 152);
  width: 130px;
  height: 70px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}
.but:hover{
  border: 3px solid rgb(156, 152, 152);
  font-size: 18px;
}
.addBut{
  border: 1px solid rgb(156, 152, 152);
  width: 130px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
