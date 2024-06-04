<script setup>
import { ref } from 'vue';
import Layout from './components/Layout.vue';
const layoutList = ref([
  {
    id: 'flex-2',
    type: 'flex',
    customStyle: {
      flexDirection: 'column',
      width: '390px',
      height: '300px',
      margin: '5px',
      padding: '5px',
    },
    customClass: [],
    children: [
      {
        id: 'flex-3',
        type: 'flex',
        customStyle: {
          flexDirection: 'row',
          width: '300px',
          height: '200px',
          padding: '5px',
          margin: '20px',
        },
        customClass: [],
        children: [
          {
            id: 'flex-4',
            type: 'flex',
            customStyle: {
              flexDirection: 'row',
              width: '50px',
              height: '50px',
              padding: '5px',
              margin: '20px',
            },
            customClass: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 'flex-4',
    type: 'flex',
    customStyle: {
      flexDirection: 'row',
      width: '50px',
      height: '50px',
      padding: '5px',
      margin: '20px',
    },
    customClass: [],
    children: [],
  },
]);
</script>

<template>
  <Layout v-model="layoutList" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
