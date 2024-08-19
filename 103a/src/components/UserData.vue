<template>
  <form @submit.prevent="userConfirmData">
    <div>
      <label>Name</label>
      <input type="text" v-model="userName" />
    </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="userAge" />
    </div>
    <div>
      <button>SET USER DATA</button>
    </div>
  </form>
</template>

<script>
export default {

  emits: ["user-data"],
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    userConfirmData() {
      this.$emit('user-data', this.userName, this.userAge);
    },
  },
};
</script>
