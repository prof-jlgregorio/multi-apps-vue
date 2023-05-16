<template>
    <!-- root element -->
    <div>
        <h1>Lista de Tarefas</h1>
        <div>
            <label for="description">Descrição:</label>
            <input type="text" id="description" v-model="todo.description">
            
            <label for="status">Status:</label>
            <select id="status" v-model="todo.status">
                <option value="todo">A fazer</option>
                <option value="doing">Fazendo</option>
                <option value="done">Feito</option>
            </select>
            <!-- short tag to click event -->
            <button @click="addTodo">Adicionar Tarefa</button>
        </div>
        <hr>
        <div>
            <!-- <div v-for="item in todoList" :key="item.id" 
               :class="item.status == 'todo' ? 'todo' : 
                       item.status == 'doing' ? 'doing' : 'done' " > -->
            <div v-for="item in todoList" :key="item.id" v-bind:class="[item.status]" >
                <span>{{ item.description }}</span>
                <select id="status" v-model="item.status">
                    <option value="todo">A fazer</option>
                    <option value="doing">Fazendo</option>
                    <option value="done">Feito</option>
                </select>
                <button @click="removeTodo(item)" >Excluir</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref } from "vue";

    //..defines a rective object
    const todo = reactive({
        id : 0,
        description: '',
        status: 'todo'
    })

    //..defines a reactive variable
    const todoList = ref([
        { id: 1, description : 'Estudar Vue.js', status:  'doing' },
        { id: 2, description : 'Estudar Javascript', status:  'doing' },
        { id: 3, description : 'Lavar o carro', status:  'todo' },
        { id: 4, description : 'Entregar o TG', status:  'todo' },
    ])

    //..defines a reactive variable to control the id increment
    const lastId = ref(4)

    const addTodo = () => {
        lastId.value++;
        todoList.value.push(
            { id: lastId.value, description: todo.description, status: todo.status }
        )
        todo.id = 0
        todo.description = ''
        todo.status = 'todo'
    }

    const removeTodo = (todo) => {
        let index = todoList.value.findIndex((item) => {
            return item.id == todo.id
        })
        todoList.value.splice(index, 1)
    }

</script>

<style scoped>

.todo{
    background-color: red;
}

.doing{
    background-color: lightgreen ;
}

.done{
    background-color: lightblue;
}

</style>