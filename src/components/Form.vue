<template>
    <div>
  <form>
      <input type="text" class="todo-input" v-model="newTask" >
      <button class="todo-button" type="submit" @click="addTodo">
           <fa-icon :icon="['fas', 'plus-square']" />
      </button>
  </form>
    <div class="todo-container">
      <ul class="todo_list">
        <div v-for=" (task, id) in tasks" :key="id" :task="task" class="todo" :class="{completed: task.checked}">
        <li class="todo-item" >{{task.value}}</li>
        <button class="complete-btn" @click="Checked(task)">
          <fa-icon :icon="['fas', 'check']"></fa-icon>
        </button>
        <button class="trash-btn" @click="removeTodo(id)">
          <fa-icon :icon="['fas', 'trash']"></fa-icon>
        </button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    components: {
    },
    data: function(){
        return {
            x: '',
            isChecked: false,
            tasks: [
            ],
            newTask: ''
        }
    },
    methods: {
        addTodo(event){
            event.preventDefault()
            if(this.newTask){
            event.preventDefault()
            this.tasks.push({value: this.newTask, checked: false})
            this.newTask = ''
        }
        },
        removeTodo(id){
          this.tasks.splice(id, 1)
        },
        Checked(task){
          task.checked = !task.checked
           },
        
    }
}
</script>

<style>
form {
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

form input, form button{
    padding: 0.37rem;
    font-size: 2rem;
    background: white;
    outline: none;
    border: none;
}

form button{
    color:  #642B73 ;
    background: white;
    cursor: pointer;
    transition: all 0.3 ease;
}

form button:hover{
    background:   #642B73 ;
    color: white;
}

.todo-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo_list{
  min-width: 30%;
  list-style: none;
}

.todo{
  margin: 0.5rem;
  background: white;
  color: black;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo li{
  flex: 1;
  text-align: left;
  padding-left: 10px;
}

.trash-btn,
.complete-btn{
  background:  #C6426E ;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
}

.complete-btn{
  background: #642B73;
}

.completed {
  opacity: 0.6;
}
</style>