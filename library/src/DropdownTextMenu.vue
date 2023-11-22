<script setup lang="ts">
import { computed } from 'vue';

import { ActiveFilter } from './interfaces/filter.ts';
import { Size } from './interfaces/props.ts';

interface DropdownTextMenuProps {
  size?: Size,
  modelValue: ActiveFilter
}

const props = withDefaults(defineProps<DropdownTextMenuProps>(), {
  size: 'medium',
  modelValue: ''
});

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
});
</script>

<template>
  <input v-model.trim="value"
    :placeholder="value.label"
    :id="value.id"
    :type='value.type'
    v-model="value"
  />
</template>
