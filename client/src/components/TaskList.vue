<template>
  <div>
    <header style="background-color:#3385ff; height: 100px; position: relative; box-shadow: 0px 10px 5px #27272780;
    -webkit-box-shadow: 0px 10px 5px #27272780;-moz-box-shadow: 0px 10px 5px #27272780;">
    <h2 style="margin:0; position: absolute; top:50%; left:50%; margin-right: -50%; transform: translate(-50%, -50%); font-size:40px">
    Your task list</h2>
    </header>
    <router-link style="text-decoration:none; margin:0" to="AddTask">
      <button class="addBut">
        ADD TASK
      </button>
    </router-link>
    <br><br>
    <div class="row" v-for="(result, index) in results" :key="index">
      <div class='title'>
        {{ result.title }}
      </div>
      <div class='description'>
        {{ result.description }}
      </div>
      <router-link style="text-decoration:none" to="DeleteTask">
            <button  @click="deleteTask(result.id)" class="deleteBut">Delete</button>
        </router-link>
      <br><hr><br>
    </div>
  </div>
</template>

<script>
import {
  mdiAccount,
  mdiPencil,
  mdiShareVariant,
  mdiDelete
} from '@mdi/js'
import Axios from 'axios'
import TaskHandler from '@/services/TaskHandler'

export default {
  data () {
    return {
      results: '',
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete
      }
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
.addBut{
  background-color: #3385ff;
  position: absolute;
  right:2%;
  top:0%;
  margin: 0;
  height: 100px;
  border: none;
  color: #FFFFFF;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  cursor: pointer;
}
.deleteBut{
  position: absolute;
  top: 0;
  right:0;
  background-color: #555555;
  border: none;
  color: #FFFFFF;
  padding: 15px 32px;
  text-align: center;
  margin: 16px 0 !important;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
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
