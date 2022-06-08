<template>
  <h2>{{ tst }}</h2>
  <h2>{{ tst1 }}</h2>
  <div id="visa">
    <h1>Vue Visa Application</h1>
    <form>
      <label for="first name">First Name:</label>
      <input type="text" required />
      <br />
      <label for="last name">Last Name:</label>
      <input type="text" required />
      <br />
      <label for="country">Nationality:</label>
      <input type="text" required />
      <br />
      <label for="passport number">Passport Number:</label>
      <input type="text" required />

      <label for="duration">Duration of stay:</label>
      <input type="text" required />
      <br /><br />
      <button>Add another previous visa</button>
      <br />
      <div class="previous">
        <span>x</span>
        <label for="duration">Previous Visa:</label>
        <input type="text" required />
        <label for="duration">Year of expiration:</label>
        <input type="text" required />
      </div>
    </form>
  </div>
  <div>
    <input v-model="message" placeholder="edit me" />
    <p>Message: {{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "TestComp",
  props: {
    tst: String,
    tst1: String,
    div: String,
  },
};
</script>
