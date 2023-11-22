<script setup lang="ts">
import { ActiveFilter } from './interfaces/filter.ts';

interface ActiveFilterProps {
  activeFilter: ActiveFilter
};

const props = defineProps<ActiveFilterProps>();
</script>

<template>
  <p>
    <span>
  {{ activeFilter.label }}
    </span>
    <span>
      {{ activeFilter.condition?.label }}
    </span>
    <span>
  {{ activeFilter.value }}
    </span>
  </p>
  {{ activeFilter }}
</template>

<style scoped></style>
