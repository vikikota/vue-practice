const app = Vue.createApp({
  data() {
    return {
      text: "this is the text",
      firstText: "",
      secondText: "",
      confirmedText: ""
    };
  },

  methods: {
    showAlert (){
        alert("Haho")
    },
    setConfirmedText(){
        this.confirmedText = this.outputText
    },

    setFirstText(){
        this.firstText = event.target.value
    }
    ,
    setSecondText(){
        this.secondText = event.target.value
    }
  }
});

app.mount("#assignment");
