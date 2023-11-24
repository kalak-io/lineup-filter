<script setup lang="ts">
import { ref, computed } from 'vue';

import BaseButton from './BaseButton.vue';
import DropdownMenuOptions from './DropdownMenuOptions.vue';
import DropdownMenuOptionsText from './DropdownMenuOptionsText.vue';
import DropdownMenuOptionsList from './DropdownMenuOptionsList.vue';
import DropdownMenuOptionsDate from './DropdownMenuOptionsDate.vue';

import { Size } from './interfaces/props.ts';
import { ActiveFilter, ActiveFilters, Filters } from './interfaces/filter.ts';


interface DropdownProps {
  size?: Size,
  filters: Filters,
  modelValue: ActiveFilters
}

const props = withDefaults(defineProps<DropdownProps>(), {
  size: 'medium',
  modelValue: []
});

const emit = defineEmits(['update:modelValue'])

const isOpen = ref<boolean>(false);
const choice = ref<ActiveFilter>({});

const choices = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
});

const currentComponent = computed(() => {
  switch (choice?.value?.type) {
    case 'text':
      return DropdownMenuOptionsText;
    case 'list':
      return DropdownMenuOptionsList;
    case 'data':
      return DropdownMenuOptionsDate;
    default:
      return DropdownMenuOptions;
  }
});

const addChoice = (choice) => {
  choices.value = [...choices.value, choice]
  isOpen.value = false
}

</script>


<template>
  <div class="dropdown">
    <slot name="trigger">
      <BaseButton
        :size="size"
        @click="isOpen = !isOpen"
      />
    </slot>
    <div
      v-if="isOpen"
      class="dropdown-menu"
    >
      <component
        :is="currentComponent"
        v-model="choice"
        :filters="filters"
        @validate="addChoice"
      />
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: auto;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  background-color: white;
  height: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-menu ul {
  list-style: none;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #F9F9F9;
}
</style>
