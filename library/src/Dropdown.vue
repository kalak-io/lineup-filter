<script setup lang="ts">
import { ref, computed } from 'vue';

import Button from './Button.vue';
import DropdownMainMenu from './DropdownMainMenu.vue';
import DropdownTextMenu from './DropdownTextMenu.vue';

import { Size } from './interfaces/props.ts';
import { ActiveFilter, Filters } from './interfaces/filter.ts';


interface DropdownProps {
  size?: Size,
  filters: Filters
};

const props = withDefaults(defineProps<DropdownProps>(), {
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

const isOpen = ref<boolean>(false);
const choice = ref<ActiveFilter>();

const displayMainMenu = computed(() => isOpen.value && !choice.value);
const displayTextMenu = computed(() => isOpen.value && choice.type === 'text');
const displayListMenu = computed(() => isOpen.value && choice.type === 'list');
const displayDateMenu = computed(() => isOpen.value && choice.type === 'date');

const emit = defineEmits<{
  (e: 'choose', filter: Filter)
}>();

const selectFilter = (filter) => {
  // TODO: load the right component to use set value and condition
  // - create a DropdownPrimaryMenu : list all filters
  // - create a Dropdown{List,Text,Date}Menu : component to set a value
  // - emit an activeFilter
  emit("choose", filter)
  //isOpen.value = false
  choice.value = filter
}

</script>


<template>
  <div class="dropdown">
    <slot name="trigger">
    <Button :size="size" @click="isOpen = !isOpen"/>
    </slot>
    <div class="dropdown-menu">
      <DropdownMainMenu v-if="displayMainMenu" :filters="filters" v-model="choice" />
      <DropdownTextMenu v-else-if="displayTextMenu" v-model="choice:value" />
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
