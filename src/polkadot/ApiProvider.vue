<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { connectApi } from './connectApi';

export default defineComponent({
  provide: {
    api: connectApi()
  }
});
</script>
