const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.counter = this.counter + num;
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter > 37) {
        return "Too much!";
      } else {
        return "";
      }
    },
  },
  watch: {
    counter() {
      const that = this
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
    },
  },
});

app.mount("#assignment");
