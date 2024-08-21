const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [],

    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal.length > 0) {
        const newGoal = {
          id: uuidv4(), 
          text: this.enteredGoal
        };
        this.goals.push(newGoal);
        this.enteredGoal = "";
      }
    },
    removeGoal(id){
      this.goals.splice(id, 1)
    }
  },
});

app.mount("#user-goals");
