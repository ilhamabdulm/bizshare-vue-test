<script setup>
const props = defineProps(['text']);
const emit = defineEmits(['action']);
</script>

<template>
  <button class="btn" @click="emit('action')">{{ props.text }}</button>
</template>

<style scoped>
.btn {
  background-color: rgb(39, 39, 134);
  color: var(--color-background);
  width: 100%;
  padding: 1rem 1.6rem;
  text-align: center;
}
</style>
