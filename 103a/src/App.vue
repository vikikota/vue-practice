<template>
  <div>
    <active-user :user-name="userName" :user-age="userAge"></active-user>
    <user-data @user-data="userInput"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userAge: 32,
    };
  },
  methods: {
    userInput(name, age) {
      this.userName = name;
      this.userAge = +age;
    },
  },
};
</script>

<style scoped></style>
: any: any: any: any
