<template>
  <div>
    <div class="topBar"></div>
    <header>
      <h2>
        Add task
      </h2>
    </header>
    <a style="text-decoration:none" href="http://localhost:8080">
      <button class="backButton">
        <svg
          class="bi bi-arrow-left"
          width="100px"
          height="100px"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </a>
    <input
      autoComplete="off"
      type="text"
      v-model="title"
      name="title"
      placeholder="Task title..."
    />
    <br /><br />
    <textarea
      name="description"
      v-model="description"
      rows="4"
      cols="50"
      placeholder="Task description..."
      maxlength="100"
    ></textarea>
    <br /><br />
    <button @click="addTask" class="addButton">ADD</button>
  </div>
</template>

<script>
import TaskHandler from '@/services/TaskHandler'
import swal from 'sweetalert'

export default {
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addTask() {
      switch (document.getElementsByName('title')[0].value) {
        case '': // If title is empty
          swal({
            // Warning pop up
            title: 'Cannot add new record',
            text: 'The title is empty',
            icon: 'warning'
          })
          break
        default:
          // Else
          try {
            const response = await TaskHandler.addTask({
              // Send request to write data
              title: this.title,
              description: this.description
            }).catch(err => {
              console.log(err)
            })

            console.log(response)

            document.getElementsByName('title')[0].value = '' // Clear form
            document.getElementsByName('description')[0].value = ''

            // Confirm pop up
            swal('Task has been added!', {
              icon: 'success'
            })
          } catch (e) {
            console.error(e)

            // Error pop up
            swal('Unexpected error has occured', {
              icon: 'error'
            })
          }
          break
      }
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

.backButton {
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

input {
  width: 35%;
  margin: 60px 0;
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
  font-size: 30px;
  height: 50px;
}

textarea {
  width: 40%;
  height: 130px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  font-size: 25px;
}

.addButton {
  background-color: #555555;
  border: none;
  color: #ffffff;
  padding: 15px 32px;
  text-align: center;
  margin: 16px 0;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
}
</style>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
