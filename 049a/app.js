const app = Vue.createApp({
  data() {
    return {
        tasks:[],
        isVisible: true,
    };
    userInputTask: ""
  },
  
  methods: {
    addTask(){
        this.tasks.push(this.userInputTask)
    },
    setVisibility(){
        this.isVisible = !this.isVisible
    }
  }
});

app.mount("#assignment");
