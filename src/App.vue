<template>
  <HelloWorld />
  <Test @iclick="testClick">
    <template #default>1231</template>
    <template #title>
      <h3>hhh</h3>
    </template>
  </Test>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
const testClick = (c: Ref<number>) => {
  console.log(c.value)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
