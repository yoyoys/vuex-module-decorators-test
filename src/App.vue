<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>userCount: {{ userCount }}</h3>
    <button @click="testMutation">testMutation</button>
    <button @click="testAction">testAction</button>
  </div>
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { UserModule } from './store/user';

@Component
export default class App extends Vue {
  get userModule() {
    return getModule(UserModule, this.$store);
  }

  get userCount() {
    return this.userModule.userCount;
  }

  testMutation() {
    this.userModule.addUser(20);
  }

  testAction() {
    this.userModule.fetchUser();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
