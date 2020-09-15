<template>
  <div>
    <h2>Try to be in time!</h2>
    <AddTodo 
      v-on:add-todo='addTodo'
    />
    <router-link class='back' to = '/'>Назад</router-link>
    <hr>
    <Loader v-if='loading' />
    <TodoList
      v-else-if='todos.length'
      v-bind:todos='todos'
      v-on:remove-todo='removeTodo'
    />
    <p class='no-todos' v-else>No Todos :)</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => this.todos = json)
        this.loading = false
    }, 1000)
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !==id)
    },
    addTodo(todo) {
      this.todos.push(todo)
      console.log('111');
    }
  }
}
</script>

<style>
.back {
  display: block;
  margin: 5px auto;
  width: 50px;
  padding: 5px 10px;
  border: 1px solid #c1c1c1;
  color: #000;
  text-decoration-line: none;
  background: #e1e1e1;
}
.no-todos {
  font-size: 24px;

}
</style>

