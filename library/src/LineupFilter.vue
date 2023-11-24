<script setup lang="ts">
import { ref } from 'vue';

import DropdownMenu from './DropdownMenu.vue';
import ActiveFilters from './ActiveFilters.vue'

import { Filters, ActiveFilters as InterfaceActiveFilters } from
'./interfaces/filter.ts';
import { Size } from './interfaces/props.ts';

interface FilterProps {
  size?: Size,
  filters: Filters,
  data: Array<T>
}

// TODO:
// - add props to receive the list of elements to filter
// - emit the result of activeFilters on this list
// => it could be a vmodel

withDefaults(defineProps<FilterProps>(), {
  size: 'medium',
});


const activeFilters = ref<InterfaceActiveFilters>([])

</script>

<template>
  <DropdownMenu
    v-model="activeFilters"
    :size="size"
    :filters="filters"
  />
  <ActiveFilters
    v-model="activeFilters"
    :size="size"
  />
  <b>ActiveFilters</b>
  <br />
  {{ activeFilters }}
  <br />
</template>

<style scoped></style>
