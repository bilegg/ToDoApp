<template>
  <div>
    <div class="topBar">
    </div>
    <header>
      <h2>
      Your task list
      </h2>
    </header>
    <router-link style="text-decoration:none; margin:0" to="AddTask">
      <button class="addButton">
        <svg class="bi bi-plus" width="100px" height="100px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
          <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
        </svg>
      </button>
    </router-link>
    <br><br>
    <div class="row" v-for="(task, index) in allTasks" :key="index" v-bind:id="task.id">
      <div class='title' >
        {{ task.title }}
      </div>
      <div class='description'>
        {{ task.description }}
      </div>
      <button  @click="deleteTask(task.id)" class="deleteButton">
        <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </button>
      <br><hr><br>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import TaskHandler from '@/services/TaskHandler'
import swal from 'sweetalert'

export default {
  data () {
    return {
      allTasks: ''
    }
  },
  mounted () {
    Axios.get('http://localhost:8081/getData')
      .then(response => {
        this.allTasks = response.data
      })
  },
  methods: {
    async deleteTask (i) {
      swal({
        text: 'Are you sure?',
        icon: 'warning',
        buttons: ['Not really', 'Yes I am!'],
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              const response = TaskHandler.deleteTask({ // Delete entry
                id: i
              })

              console.log(response)

              document.getElementById(i).remove() // Delete task from client's page
            } catch (e) {
              console.error(e)

              swal('Unexpected error has occured', { // Error pop up
                icon: 'error'
              })
            }

            swal('Your file has been deleted!', { // Confirm pop up
              icon: 'success'
            })
          } else {} // Return
        })
    }
  }
}
</script>

<style scoped>
header{
  background-color: #03A9F4;
  height: 100px;
  position: relative;
  box-shadow: 0px 10px 5px #27272780;
  -webkit-box-shadow: 0px 10px 5px #27272780;
  -moz-box-shadow: 0px 10px 5px #27272780;
}

header > h2{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  font-family: 'MuseoModerno', cursive;
  transform: translate(-50%, -50%);
  font-size: 60px;
}

.topBar{
  background-color: #0288D1;
  width: 100%;
  height: 20px;
}

.row{
  text-align: left;
  width:40%;
  margin-left: 30%;
  position: relative;
}

.description{
  width: 70%;
  word-wrap: break-word;
}

.title{
  width: 75%;
  word-wrap: break-word;
}

.addButton{
  background-color: #03A9F4;
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

.deleteButton{
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border: none;
  width: 100px;
  height: 100px;
  font-size: 60px;
  cursor: pointer;
  outline: none;
}

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
