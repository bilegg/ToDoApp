<template>
  <div>
    <header style="background-color:#3385ff; height: 100px; position: relative; box-shadow: 0px 10px 5px #27272780;
    -webkit-box-shadow: 0px 10px 5px #27272780;-moz-box-shadow: 0px 10px 5px #27272780;">
    <h2 style="margin:0; position: absolute; top:50%; left:50%; margin-right: -50%; transform: translate(-50%, -50%); font-size:40px">
    Task has been succesfully deleted</h2>
    </header>
      <a style="text-decoration:none" href="http://localhost:8080">
        <button class="backBut">
          RETURN
        </button>
      </a>
  </div>
</template>

<script>
// import TaskHandler from '@/services/TaskHandler'
export default {
  data () {
    return {
      title: '',
      description: 'Put your description here'
    }
  }
}
</script>

<style scoped>
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
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
