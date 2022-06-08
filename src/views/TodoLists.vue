<template>
  <di>
    <h1>Todos</h1>
    <input
      type="text"
      v-model="todoName"
      @keyup.enter="addTodo"
      aria-label="Add a new Todo"
      placeholder="Add a new Todo"
    />
    <ul>
      <li v-for="todo of todos" :key="todo.id">
        {{ todo.name }}
      </li>
    </ul>
  </di>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3001/todos");
      this.todos = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  data() {
    return {
      todos:[];
    };
  },
  async created() {
    const res = await axios.get("http://localhost:3001/todos");
    try {} catch (e) {
      console.error(e);
    },
  },
};
</script>
<style scoped>
h1 {
  text-decoration: underline;
}

li {
  color: black;
}
</style>
