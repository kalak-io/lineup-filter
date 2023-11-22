<script setup lang="ts">
import { reactive, ref } from 'vue';
import Dropdown from './Dropdown.vue';
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

const props = withDefaults(defineProps<FilterProps>(), {
  size: 'medium',
  filters: [
  {
    id: 'status',
    label: 'Statut',
    type: 'list',
    icon: 'circle',
    options: [
      {
        label: 'En traitement...',
        icon: 'circle',
      },
    ],
  },
  {
    id: 'name',
    label: 'Nom',
    type: 'text',
    icon: 'search',
  },
  {
    id: 'creation_date',
    label: 'Date de création',
    type: 'date',
    icon: 'calendar',
  },
  {
    id: 'last_update_date',
    label: 'Date de modification',
    type: 'date',
    icon: 'calendar',
  },
  ]
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
  <Dropdown :size="size" :filters="filters" @choose="handleChoose" />
  <ActiveFilters :size="size" :active-filters="activeFilters" />
</template>

<style scoped></style>
