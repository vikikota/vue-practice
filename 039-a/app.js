const app = Vue.createApp({
  data() {
    return {
      typedText: "",
      visible: false,
      bgColor: "",
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
  computed: {
    setVisibility() {
      return { display: this.visible };
    },
    setBackground() {
      return { backgroundColor: this.bgColor };
    },
  },
});

app.mount("#assignment");
