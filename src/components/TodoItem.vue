<template>
  <li>
    <span>
      <input type='checkbox'
        v-on:change='changeStatus'
        v-model='checked'
      />
    </span>
    <span v-bind:class='{done: todo.completed}' >
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
  data() {
    return {
      checked: false,
    }
  },
  mounted() {
    if(this.todo.completed) {
      this.checked = true;
    }
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    changeStatus() {
      this.todo.completed = !this.todo.completed
      console.log(this.todo.completed);
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
    text-decoration: line-through #FF0000;
  }
</style>