<script setup lang="ts">
import { ref } from 'vue';
import LineupFilter from './src/LineupFilter.vue'
import { Filters } from './interfaces/filter'

const filters = ref<Filters>([
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

  ])

const data= ref([])
</script>

<template>
  <LineupFilter
    :filters="filters"
    :data="data"
  />
  <b>
    Filtered elements
  </b>
  <ul>
    <li
      v-for="element, index in data"
      :key="index"
    >
      {{ element }}
    </li>
  </ul>
</template>

<style scoped>
</style>
