<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps({
  placeholder: String,
  searchValue: String,
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <label class="search-input__container">
    <vue-feather type="search" size="18"></vue-feather>
    <input
      class="search-input"
      type="search"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="updateValue"
    />
  </label>
</template>

<style scoped>
.search-input__container {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid rgb(237, 245, 252);
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  background-color: rgb(237, 245, 252);
}

.search-input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
}

.search-input:focus {
  outline: none;
}
</style>
