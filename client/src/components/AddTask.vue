<template>
  <div>
      <header style="background-color:#3385ff; height: 100px; position: relative; box-shadow: 0px 10px 5px #27272780;
    -webkit-box-shadow: 0px 10px 5px #27272780;-moz-box-shadow: 0px 10px 5px #27272780;">
    <h2 style="margin:0; position: absolute; top:50%; left:50%; margin-right: -50%; transform: translate(-50%, -50%); font-size:40px">
    Add task</h2>
    </header>
      <a style="text-decoration:none" href="http://localhost:8080">
        <button class="backBut">
          GO BACK
        </button>
      </a>
      <form id="mainForm">
        <input type="text" v-model="title" name="title" placeholder="Task title...">
        <br><br>
        <textarea name="description" v-model="description" rows="4" cols="50" placeholder="Task description..."></textarea>
        <br><br>
        <button @click="addTask" class="addBut">ADD</button>
      </form>
  </div>
</template>

<script>
import TaskHandler from '@/services/TaskHandler'
export default {
  data () {
    return {
      title: '',
      description: ''
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
.backBut{
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
input{
  width: 15%;
  margin: 25px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
}
textarea{
  width: 20%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
.but:hover{
  border: 3px solid rgb(156, 152, 152);
  font-size: 18px;
}
.addBut{
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
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
