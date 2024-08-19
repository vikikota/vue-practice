const app = Vue.createApp({
    data() {
        return {
            test: "Oh hi Mark",
            userInput: "",
            isVisible: true,
            userColor: "",
        };
    },
    
    methods: {
        saveInput() {
            this.userInput = event.target.value;
            console.log(this.userColor)
    },
    setVisibility(){
        this.isVisible = !this.isVisible;
        console.log(this.isVisible)
    },
    setBackgroundColor(){
        this.userColor= event.target.value;
        console.log(this.userColor)
    }
  },

  computed: {
    addClass() {
      return this.userInput;
    },
  },
});


app.mount("#assignment");
