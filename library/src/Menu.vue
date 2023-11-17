<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="dropdown-toggle">
      {{ selectedOption }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="option in options" :key="option.id" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DropdownOption {
  id: number;
  label: string;
}

export default defineComponent({
  name: 'Dropdown',
  setup() {
    const isOpen = ref(false);
    const selectedOption = ref('Select an option');
    const options = ref<DropdownOption[]>([
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
      { id: 3, label: 'Option 3' },
    ]);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectOption = (option: DropdownOption) => {
      selectedOption.value = option.label;
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      selectedOption,
      options,
      toggleDropdown,
      selectOption,
    };
  },
});
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  list-style: none;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f9f9f9;
}
</style>
