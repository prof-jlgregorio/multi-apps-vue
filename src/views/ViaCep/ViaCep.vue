<template>
    <div>
        <h1>Verificação de CEP</h1>
        <input type="text" v-model="cep"> 
        <button @click="verifyCep">Verificar</button>
        <div>
            <p>Cidade: {{ result.city }} </p>
            <p>Bairro: {{ result.neighborhood }} </p>
            <p>Rua: {{ result.street }} </p>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import axios from "axios"

//..defines a rective variable to store the value
const cep = ref('')

//..defines a reactive object to store the response of the request
const result = reactive({
    city: '',
    neighborhood: '',
    street: ''
})

//..the baseURL 
const baseURL = 'http://viacep.com.br/ws/'

//..function to make the request
const verifyCep = () => {
    axios.get(baseURL + cep.value + '/json/')
        .then((response) => {
            if(response.data.erro == true){
                alert("O CEP informado não existe!")
            } else {
                console.log("Resposta:", response)
                result.city = response.data.localidade,
                result.neighborhood = response.data.bairro,
                result.street = response.data.logradouro
            }
        })
        .catch((response) => {
            alert("Erro na requisição! Verifique o formato do CEP!")
        })
}



</script>

<style lang="scss" scoped>

</style>