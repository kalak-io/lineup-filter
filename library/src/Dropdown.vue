<script setup lang="ts">
import Button from './Button.vue';
import { toRefs, ref } from 'vue';

import { Size } from './interfaces/props';
import { Filter, Filters } from './interfaces/filter';

interface DropdownProps {
    size?: Size,
    filters: Filters
};

const props = withDefaults(defineProps<DropdownProps>(), {
  size: 'medium',
filters: []
});

const emit = defineEmits<{
    (e: 'choose', filter: Filter)
}>();

const { size } = toRefs(props)

const isOpen = ref<boolean>(false);

const selectFilter = (filter) => {
    emit("choose", filter)
    isOpen.value = false
}
</script>

<template>
    <div class="dropdown">
        <slot name="trigger">
            <Button :size="size" @click="isOpen = !isOpen"/>
        </slot>
        <ul v-if="isOpen" class="dropdown-menu">
            <li
                v-for="filter in filters"
                :key="filter.id"
                @click="selectFilter(filter)"
            >
                {{ filter.label }}
            </li>
        </ul>
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
    width: 100%;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    background-color: white;
    list-style: none;
    height: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-menu li {
    padding: 10px;
    cursor: pointer;
}

.dropdown-menu li:hover {
    background-color: #F9F9F9;
}
</style>
