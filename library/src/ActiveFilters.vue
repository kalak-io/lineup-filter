<script setup lang="ts">
//import ActiveFilter from './ActiveFilter.vue';
import { ActiveFilters } from './interfaces/filter.ts';
import { Size } from './interfaces/props.ts';


interface ActiveFiltersProps {
  size?: Size,
  activeFilters: ActiveFilters
}

const props = withDefaults(defineProps<ActiveFiltersProps>(), {
  size: 'medium',
});
</script>

<template>
  <ul>
    <li v-for="activeFilter in activeFilters" :key="activeFilter.id">
      <ActiveFilter :active-filter="activeFilter" />
    </li>
  </ul>
</template>

<style scoped>
</style>
