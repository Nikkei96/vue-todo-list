<template>
  <div>
    <ul>
      <TodoItem 
        v-for='(todo, id) of todos' :key='todo.id'
        v-bind:index='id'
        v-bind:todo='todo'
        v-on:remove-todo="$emit('remove-todo', todo.id)"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    // removeTodo(id) {
    //   this.$emit('remove-todo', id)
    // }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>