<script setup>
const props = defineProps(['label', 'isChecked']);
const emit = defineEmits(['onCheck']);
</script>

<template>
  <label class="input-checkbox">
    <p>{{ props.label }}</p>
    <input
      :checked="props.isChecked"
      class="checkbox"
      type="checkbox"
      @input="emit('onCheck')"
    />
  </label>
</template>

<style scoped>
.input-checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.input-checkbox > p {
  font-size: 1.4rem;
}

.checkbox {
  accent-color: rgb(39, 39, 134);
  width: 1.6rem;
  height: 1.6rem;
}
</style>
