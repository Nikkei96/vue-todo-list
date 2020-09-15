<template>
  <li>
    <span>
      <input type='checkbox' 
        v-on:change='todo.completed = !todo.completed'
      />
    </span>
    <span v-bind:class='{done: todo.completed}'>
      <strong> {{index + 1}} </strong>
      {{todo.title | uppercase}}
    </span>
    <button 
      v-on:click='$emit("remove-todo", todo.id)'
    >&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    justify-content: space-between;
    border: 1px solid #000;
    margin: 5px 0;
    padding: 10px 0;
  }

  button {
    width: 50px;
    margin: 0 10px 0 0;
  }

  .done {
    text-decoration: line-through 2px red;
  }
</style>