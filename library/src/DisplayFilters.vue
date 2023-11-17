<script setup lang="ts">
import { reactive, ref } from 'vue';
import Dropdown from './Dropdown.vue';
import { Filters, ActiveFilters } from './interfaces/filter';
import { Size } from './interfaces/props';

interface DisplayFiltersProps {
  size?: Size,
  filters: Filters
}

const props = withDefaults(defineProps<DisplayFiltersProps>(), {
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


const activeFilters = ref<ActiveFilters>([])

const handleChoose = (filter) => {
  activeFilters.value.push(filter);
};

</script>

<template>
  <Dropdown :size="size" :filters="filters" @choose="handleChoose" />
  <br />
  <ul>
    <li v-for="activeFilter in activeFilters" :key="activeFilter.id">
      {{ activeFilter.label }}
    </li>
  </ul>
</template>

<style scoped></style>
