<script setup>
import { ref, watch } from '@vue/runtime-core';

const props = defineProps({
  pagination: Object,
  currentPage: Number,
});
const emit = defineEmits(['onNext', 'onPrev']);

const arrayPagination = ref([]);

watch(props, (newVal, oldVal) => {
  if (newVal) {
    arrayPagination.value = Array.from({
      length: newVal.pagination?.totalPages || 1,
    }).map((_, i) => i + 1);
  } else {
    arrayPagination.value = Array.from({
      length: oldVal.pagination?.totalPages || 1,
    }).map((_, i) => i + 1);
  }
});
</script>

<template>
  <div class="pagination">
    <button
      class="pagination-item"
      :class="{ disabled: props.currentPage === 1 }"
      @click="emit('onPrev')"
    >
      <vue-feather type="chevron-left" size="12"></vue-feather>
    </button>
    <button
      v-for="num in arrayPagination"
      :key="num"
      class="pagination-item"
      :class="{ current: props.currentPage === num }"
      :disabled="props.currentPage === num"
    >
      {{ num }}
    </button>
    <button
      class="pagination-item"
      :class="{ disabled: props.currentPage === props.pagination.totalPages }"
      :disabled="props.currentPage === props.pagination.totalPages"
      @click="emit('onNext')"
    >
      <vue-feather type="chevron-right" size="12"></vue-feather>
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pagination-item {
  width: 2.8rem;
  height: 2.8rem;
  background: var(--color-background);
  display: grid;
  place-content: center;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 0.4rem;
}

.pagination-item:hover {
  border-color: rgb(23, 55, 161);
}

.pagination-item.current {
  border-color: rgb(23, 55, 161);
  color: #000;
}

.pagination-item.disabled {
  background-color: rgb(245, 244, 244);
}
</style>
