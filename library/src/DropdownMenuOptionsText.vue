<script setup lang="ts">
import { computed } from 'vue';

import BaseButton from './BaseButton.vue';
import { ActiveFilter } from './interfaces/filter.ts';
import { Size } from './interfaces/props.ts';

interface DropdownTextMenuProps {
  size?: Size,
  modelValue: ActiveFilter,
  isOpen?: boolean
}

const props = withDefaults(defineProps<DropdownTextMenuProps>(), {
  size: 'medium',
  modelValue: {}
});

const emit = defineEmits(['update:modelValue', 'validate'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
});

const apply = () => emit('validate', props.modelValue)
</script>

<template>
  <div class="dropdown-option">
    <b class="field-label">Filter by {{ value.label }}...</b>
    <input
      :id="value.id"
      v-model.trim="value.value"
      :type="value.type"
    >
    <BaseButton
      label="Cancel"
      @click="value = {}"
    />
    <BaseButton
      label="Apply"
      @click="apply"
    />
  </div>
</template>

<style scoped>
.field-label {
  margin-bottom: 15px;
}
.dropdown-option {
  padding: 10px;
}
</style>
