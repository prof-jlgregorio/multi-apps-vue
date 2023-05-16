<template>
  <div>
    <h1>Aplicações Vue</h1>
    <hr />
    <!-- ---------------------------- -->
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/todolist">Lista de Tarefas</router-link>
      </li>
      <li>
        <router-link to="/about">Sobre</router-link>
      </li>
    </ul>
    <!-- --------------------------------- -->
    <router-view></router-view>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
