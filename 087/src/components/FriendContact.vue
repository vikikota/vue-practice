<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisibly ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisibly">
      <li><strong>Phone</strong>{{ friend.phone }}</li>
      <li><strong>Email</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisibly: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "30 4888 123",
        email: "lorenz@gmail.com",
      },
    }
  },

  methods: {
    toggleDetails (){
        this.detailsAreVisibly = !this.detailsAreVisibly;
    }
  }
};
</script>
