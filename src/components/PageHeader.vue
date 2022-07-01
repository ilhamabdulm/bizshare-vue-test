<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <header class="page-header">
    <div class="icon-container">
      <vue-feather type="chevron-left"></vue-feather>
    </div>
    <p>{{ props.title }}</p>
    <div class="icon-container">
      <vue-feather type="message-square"></vue-feather>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
}

.page-header > p {
  font-size: 2.4rem;
  font-weight: 600;
}

.icon-container {
  width: 2.4rem;
  height: 2.4rem;
}
</style>
>
