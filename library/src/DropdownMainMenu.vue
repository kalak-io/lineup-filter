<script setup lang='ts'>
import { computed } from 'vue'

import { Filter, Filters } from './interfaces/filter';

interface DropdownMainMenuProps {
    filters: Filters,
    modelValue: Filter
};

const props = withDefaults(defineProps<DropdownMainMenuProps>(), {
    size: 'medium',
    filters: [],
    modelValue: {}
});

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <ul class="dropdown-menu">
        <li
            v-for="filter in filters"
            :key="filter.id"
            @click="value = filter"
            >
            {{ filter.label }}
        </li>
    </ul>
</template>


<style scoped>
ul {
    list-style: none;
}

li {
    padding: 10px;
    cursor: pointer;
}

li:hover {
    background-color: #F9F9F9;
}
</style>
