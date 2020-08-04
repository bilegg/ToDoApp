<template>
  <div v-bind:id="task.id" class="mainContainer">
    <div class="title">
      {{ task.title }}
    </div>
    <div class="description">
      {{ task.description }}
    </div>
    <router-link
      class="clickIcon"
      style="right: 100px"
      :to="{
        name: 'EditTask',
        params: { title: task.title, description: task.description }
      }"
    >
      <svg
        style="display: block; margin: auto"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-pencil-square"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    </router-link>
    <button @click="deleteTask(task.id)" class="clickIcon">
      <svg
        style="display: block; margin: auto"
        class="bi bi-trash"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </button>
    <br />
    <hr />
    <br />
  </div>
</template>

<script>
import TaskHandler from '@/services/TaskHandler'
import swal from 'sweetalert'

export default {
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    deleteTask (i) {
      swal({
        text: 'Are you sure?',
        icon: 'warning',
        buttons: ['Not really', 'Yes I am!'],
        dangerMode: true,
        closeModal: false
      }).then(willDelete => {
        if (willDelete) {
          const response = TaskHandler.deleteTask({
            // Delete entry
            id: i
          }).catch((error) => {
            swal('Unexpected error has occured', {
              // Error pop up
              icon: 'error'
            })

            throw (error)
          })
          console.log(response)

          this.$emit('delete-task', this.task.id) // Emit signal to delete task

          // Confirm pop up
          swal('Your file has been deleted!', {
            icon: 'success'
          })
        } else {
        } // Return
      })
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
  font-family: "MuseoModerno", cursive;
  transform: translate(-50%, -50%);
  font-size: 60px;
}

.mainContainer {
  text-align: left;
  width: 40%;
  margin-left: 30%;
  position: relative;
}

.topBar {
  background-color: #0288d1;
  width: 100%;
  height: 20px;
}

.description {
  width: 70%;
  word-wrap: break-word;
}

.title {
  width: 75%;
  word-wrap: break-word;
  font-size: 40px;
}

.clickIcon {
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border: none;
  width: 80px;
  display: flex;
  justify-content: center;
  height: 100px;
  font-size: 60px;
  cursor: pointer;
  padding: 0;
  outline: none;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
