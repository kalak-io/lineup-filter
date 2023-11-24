<script setup lang="ts">
import { ref } from 'vue';

import DropdownMenu from './DropdownMenu.vue';
import ActiveFilters from './ActiveFilters.vue'

import { Filters, ActiveFilter, ActiveFilters as InterfaceActiveFilters } from
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

const handleChoose = (filter) => {
  // TODO:
  // - assign value key
  // - assign condition key
  // these assignations could be do in dedicated component by type
  const activeFilter: ActiveFilter = { ...filter };
  activeFilters.value.push(activeFilter);
};

</script>

<template>
  <DropdownMenu
    :size="size"
    :filters="filters"
    @choose="handleChoose"
  />
  <ActiveFilters
    :size="size"
    :active-filters="activeFilters"
  />
</template>

<style scoped></style>
