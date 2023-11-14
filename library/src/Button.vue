<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large',
  showLabel: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  showLabel: true
});

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const buttonClasses = computed(() => ({
  'filter-button': true,
  [`filter-button--${props.size}`]: true,
}));

const iconClasses = computed(() => ({
  'filter-button-icon': true,
  [`filter-button-icon--${props.size}`]: true,
}));

const labelClasses = computed(() => ({
  [`filter-button-label--${props.size}`]: true,
}));

const onClick = () => {
  emit("click", 1)
};
</script>

<template>
  <button type="button" :class="buttonClasses" @click="onClick">
      <span :class="iconClasses">+</span>
      <span :class="labelClasses" v-if="showLabel">
        <slot>
          Filter
        </slot>
        </span>
  </button>
</template>

<style scoped>
.filter-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 1;
  border-radius: 0.5em;
  border-style: dashed;
  border-color: grey;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  background-color: transparent;
  color: grey;
}

.filter-button--small {
  font-size: smaller;
  padding: 4px 8px;
}
.filter-button--medium {
  font-size: medium;
  padding: 8px 12px;
}
.filter-button--large {
  font-size: large;
  padding: 12px 16px;
}

.filter-button-icon {
  color: grey;
}

.filter-button-label--small {
  margin-left: 4px;
}

.filter-button-label--medium {
  margin-left: 8px;
}

.filter-button-label--large {
  margin-left: 12px;
}
</style>
