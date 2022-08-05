<template>
  <!-- <HelloWorld />
  <Test @iclick="testClick">
    <template #default>1231</template>
    <template #title>
      <h3>hhh</h3>
    </template>
  </Test> -->
  <Test msg="hello"></Test>
  <!-- 1.primary, secondary,text
    2.尺寸 size
    3.disabled
    4.块级block
    5.iconbutton
     -->
  <div>type类型</div>
  <JuButton>确定</JuButton>
  <JuButton type="primary">确定</JuButton>
  <JuButton type="text">确定</JuButton>
  <div>size</div>
  <div>
    <JuButton size="small">确定</JuButton>
    <JuButton size="medium">确定</JuButton>
    <JuButton size="large">确定</JuButton>
  </div>
  <div>
    <JuButton type="primary" size="small" @click="btnClick">确定</JuButton>
    <JuButton type="primary" size="medium">确定</JuButton>
    <JuButton type="primary" size="large">确定</JuButton>
  </div>
  <div>
    <JuButton type="text" size="small">确定</JuButton>
    <JuButton type="text" size="medium">确定</JuButton>
    <JuButton type="text" size="large">确定</JuButton>
  </div>
  <div>禁用</div>
  <div>
    <JuButton disabled @click="btnClick">确定</JuButton>
    <JuButton type="primary" disabled @click="btnClick">确定</JuButton>
    <JuButton type="text" disabled @click="btnClick">确定</JuButton>
  </div>
  <div>块级按钮</div>
  <JuButton type="primary" size="medium" block>确定</JuButton>
  <JuButton size="medium" block>取消</JuButton>
</template>

<script setup lang="ts">
import Test from './components/Test'
// import { Ref } from 'vue'
const btnClick = () => {
  console.log('clicked')
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
