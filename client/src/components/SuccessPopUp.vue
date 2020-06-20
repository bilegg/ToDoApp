<template>
    <div class="popUp">
        <div class="popUpInner">
            <svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="#757575" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
            </svg>
            <p>
            {{ text }}
            </p>
        </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn { /* Pop up fade in animation */
  0% {
    opacity: 0;
    transform: translateX(-20px);
    }
  20% {
    opacity: 1;
    transform: translateX(0);
    }
  80% {
    opacity: 1;
    transform: translateX(0);
    }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-20px);
    }
  20% {
    opacity: 1;
    transform: translateX(0);
    }
  80% {
    opacity: 1;
    transform: translateX(0);
    }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-20px);
    }
  20% {
    opacity: 1;
    transform: translateX(0);
    }
  80% {
    opacity: 1;
    transform: translateX(0);
    }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}

.popUp{
  position: absolute;
  top: 20%;
  left: 5%;
  width: 300px;
  height: 80px;
  background-color: #4CAF50;
  border-radius: 5px;
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  display: none;
}

.popUpInner{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
}

.popUpInner > p{
  font-size: 30px;
  height: 80px;
  margin: 0 20px;
  line-height: 80px;
  color: white;
  font-weight: bold;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
