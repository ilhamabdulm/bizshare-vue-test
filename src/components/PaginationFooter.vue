<script setup>
import Pagination from './Pagination.vue';

const props = defineProps({
  pagination: Object,
  currentPage: Number,
});
const emit = defineEmits(['onNext', 'onPrev']);
</script>

<template>
  <footer class="pagination-container">
    <p>
      Halaman {{ props.currentPage }} dari {{ props.pagination.totalPages }}
    </p>
    <Pagination
      :pagination="props.pagination"
      :currentPage="props.currentPage"
      @on-next="emit('onNext')"
      @on-prev="emit('onPrev')"
    />
  </footer>
</template>

<style scoped>
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 2rem;
}

.pagination-container > p {
  font-size: 1.4rem;
}
</style>
