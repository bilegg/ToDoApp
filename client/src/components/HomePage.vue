<template>
  <div>
    <div class="topBar"></div>
    <header>
      <h2>
        Your task list
      </h2>
    </header>
    <router-link style="text-decoration:none; margin:0" to="AddTask">
      <button class="addButton">
        <svg
          class="bi bi-plus"
          width="100px"
          height="100px"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
          />
          <path
            fill-rule="evenodd"
            d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
          />
        </svg>
      </button>
    </router-link>
    <br /><br />
    <Task
      v-for="(task, index) in allTasks.data"
      v-bind:task="task"
      v-bind:index="index"
      v-bind:key="task.id"
      v-on:delete-task="deleteTaskElement"
    ></Task>
  </div>
</template>

<script>
import Axios from 'axios'
import Task from '@/components/Task'

export default {
  components: {
    Task
  },
  data() {
    return {
      allTasks: ''
    }
  },
  mounted() {
    Axios.get('http://localhost:8081/getData').then(response => {
      this.allTasks = response // Get all tasks from db
    })
  },
  methods: {
    deleteTaskElement(id) {
      document.getElementById(id).remove() // Remove element visibly from page
    }
  }
}
</script>

<style scoped>
header {
  background-color: #03a9f4;
  height: 100px;
  position: relative;
  box-shadow: 0px 10px 5px #27272780;
  -webkit-box-shadow: 0px 10px 5px #27272780;
  -moz-box-shadow: 0px 10px 5px #27272780;
}

header > h2 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  font-family: 'MuseoModerno', cursive;
  transform: translate(-50%, -50%);
  font-size: 60px;
}

.topBar {
  background-color: #0288d1;
  width: 100%;
  height: 20px;
}

.addButton {
  background-color: #03a9f4;
  position: absolute;
  right: 4%;
  top: 20px;
  margin: 0;
  height: 100px;
  border: none;
  outline: none;
  color: none;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
