const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      newGoal: "",
      newObj: {
        name : "Viki",
        age: 31
      }
    };
  },
  methods: {
    addNewGoal (){
      return this.goals.push(this.newGoal)
    },
    removeGoal (index){
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
