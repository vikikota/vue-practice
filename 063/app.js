const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate(){
    console.log("Before create")
  },
  created(){
    console.log("created")
  },
  beforeMount(){
    console.log("Before mount")
  },
  mounted(){
    console.log("Mounted")
  },
  beforeUpdate(){
    console.log("before update")
  },
  updated(){
    console.log("updated")
  },
  beforeUnmount(){
    console.log("before unmount")
  },
  unmounted(){
    console.log("unmounted")
  }
});

app.mount('#app');

setTimeout(function() {
  app.unmount()
}, 3000);
