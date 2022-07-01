<script setup>
const props = defineProps({
  icon: String,
  text: String,
});
</script>

<template>
  <button class="outlined-btn">
    <vue-feather v-if="props.icon" :type="props.icon" size="18"></vue-feather
    >{{ props.text }}
  </button>
</template>

<style scoped>
.outlined-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid rgb(2, 68, 167);
  padding: 0.8rem 1.2rem;
  background: none;
  cursor: pointer;
  border-radius: 0.4rem;
}

.outlined-btn:hover {
  background-color: rgb(237, 245, 252);
}
</style>
