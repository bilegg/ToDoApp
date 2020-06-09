<template>
  <div>
      <h1>Your task list</h1>
      <router-link style="text-decoration:none" to="AddTask">
        <button class="but">
          Add new task
        </button>
      </router-link>
      <br><br>
      <div class="row" v-for="(result, index) in results" :key="index">
        <div class='title'>
          {{ result.title }}
          <router-link style="text-decoration:none" to="DeleteTask">
            <button @click="deleteTask(result.id)">
              Delete this task
            </button>
          </router-link>
        </div>
        <div class='description'>
          {{ result.description }}
        </div>
        <br><br>
      </div>
  </div>
</template>

<script>
import Axios from 'axios'
import TaskHandler from '@/services/TaskHandler'

export default {
  data () {
    return {
      results: ''
    }
  },
  mounted () {
    Axios.get('http://localhost:8081/getData')
      .then(response => {
        console.log(response.data)
        this.results = response.data
      })
  },
  methods: {
    async deleteTask (i) {
      console.log(i)
      const response = await TaskHandler.deleteTask({
        id: i
      })
      console.log(response.data)
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
h1{
  font-size:50px;
  margin-bottom: 0;
}
.title{
  font-size: 40px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
