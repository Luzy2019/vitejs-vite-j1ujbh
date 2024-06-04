<script lang="ts" setup>
import { ref, computed } from 'vue';
import FlexLayout from './FlexLayout.vue';
import type { layoutNode } from '../../types/layout';
import * as _ from 'lodash';
import { useDraggable } from 'vue-draggable-plus';

interface Props {
  modelValue: layoutNode[];
  customClass?: Array<string> | String;
  customStyle?: Record<string, any>;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: layoutNode[]): void;
}

const emits = defineEmits<Emits>();
const list = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value);
  },
});

const layoutRef = ref();
useDraggable(layoutRef, list, {
  animation: 150,
  group: { name: 'layout' },
});
</script>

<template>
  <div
    ref="layoutRef"
    class="u2c-layout-container"
    :class="customClass"
    :style="customStyle"
  >
    <template v-for="item in modelValue" :key="item.id">
      <FlexLayout
        :id="item.id"
        :item="_.omit(item, 'children')"
        v-model="item.children"
        :customStyle="item.customStyle"
        :customClass="item.customClass"
      />
    </template>
  </div>
</template>

<style scoped>
.u2c-layout-container {
  width: 100%;
  height: 100%;
}
</style>
