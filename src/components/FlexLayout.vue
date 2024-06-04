<script lang="ts" setup>
import { ref } from 'vue';
import Layout from './Layout.vue';
import type { layoutNode } from '../../types/layout';

// props
type FlexLayoutProps = {
  id: string;
  item: layoutNode;
  modelValue: Array<layoutNode>;
  customClass?: Array<string> | string;
  customStyle?: Record<string, any>;
};
// props
const props = defineProps<FlexLayoutProps>();

// emits
interface Emits {
  (e: 'update:modelValue', value: layoutNode[]): void;
}
const emits = defineEmits<Emits>();
const handleUpdate = (value) => {
  emits('update:modelValue', value);
};
</script>

<template>
  <Layout
    :id="id"
    class="u2c-flex"
    :modelValue="modelValue"
    :customClass="customClass"
    :customStyle="customStyle"
    @update:modelValue="handleUpdate"
  />
</template>

<style scoped>
.u2c-flex {
  display: flex;
  border: 2px solid rgb(57, 200, 248);
}
</style>
