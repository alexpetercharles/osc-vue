<script lang="ts">
import { defineComponent } from 'vue';
import useOsc from '@/useOsc';

export default defineComponent({
  name: 'App',
  setup() {
    useOsc();
  },
});
</script>

<template>
  <h1>osc test</h1>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
