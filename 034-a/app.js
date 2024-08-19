const app = Vue.createApp({
  data() {
    return {
      counter: 0
    };
  },

  methods: {
    addition(event) {
      this.counter += Number(event.target.value);
    },
    resetCounter() {
      this.counter = 0;
    },
  },
 
  computed: {
    message() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter > 37) {
        return "Too much!";
      } else {
        return "";
      }
    }
  },
  watch: {
    counter(value) {
      if (value === 37) {
        setTimeout(() => {
          this.resetCounter();
        }, 2000);
      }
    },
  },
});

app.mount("#assignment");
