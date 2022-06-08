<template>
  <div>
    <p v-if="error.length">
      <b>Please correct the following error</b>
      <ul>
      <li v-for="e in error" v-bind:key="e.id">{{e}}</li>
      </ul>
    </p>
    <form @submit="login">
      <input type="text" placeholder="Enter Name" v-model="name" /><br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        v-model="password"
      /><br /><br /> 
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginNew",
  data() {
    return {
      error: [],
      name: null,
      password: null,
    };
  },
  methods: {
    login(e) {
      if (this.name && this.password) {
        console.log("Login function called");
      }
      this.error = [];
      if (!this.name) {
        this.error.push("Name field is required");
      }
      if (!this.password) {
        this.error.push("Password field is required.");
      }
      console.warn("errors", this.error);
      e.preventDefault();
    },
  },
};
</script>
