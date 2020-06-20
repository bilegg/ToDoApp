<template>
    <div class="popUp">
        <div class="popUpInner">
            <svg class="bi bi-exclamation-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
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
  background-color: #FBC02D;
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
