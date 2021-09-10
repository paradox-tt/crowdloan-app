<template>
  <ApiProvider>
    <Crowdloan />
  </ApiProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Crowdloan from './pages/Crowdloan.vue';
import ApiProvider from './polkadot/ApiProvider.vue';

export default defineComponent({
  name: 'App',
  components: {
    ApiProvider,
    Crowdloan
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
