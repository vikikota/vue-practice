const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      tasksVisibility: true,
    };
  },
  methods: {
    addTask() {
      const newTask = {
        id: uuidv4(),
        text: this.enteredTask,
      };
      this.tasks.push(newTask);
      this.enteredTask = "";
    },
    setListVisible() {
      this.tasksVisibility = !this.tasksVisibility;
    },
  },
  computed: {
    buttonCaption(){
       return this.tasksVisibility ? "Hide tasks": "Show tasks" 
    }
  }
});

app.mount("#assignment");
