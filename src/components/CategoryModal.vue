<script setup>
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

import FetchApi from '../utils/fetch';
import Modal from './Modal.vue';
import Button from './Button.vue';
import CheckboxItem from './CheckboxItem.vue';
import OutlinedButton from './OutlinedButton.vue';

const props = defineProps({ showModal: Boolean, selectedCategories: Array });
const emit = defineEmits(['onClose', 'onCheck', 'onFinish']);

const state = reactive({
  categories: [],
});

const _getCategoryData = async () => {
  try {
    const response = await FetchApi.get('media/param/business/category');
    state.categories = response.data
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  _getCategoryData();
});
</script>

<template>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <Modal :show="props.showModal" @close="emit('onClose')">
      <template #header>
        <header class="modal-header">
          <h3>Filter</h3>
          <button @click="emit('onClose')">
            <vue-feather type="x" size="20"></vue-feather>
          </button>
        </header>
      </template>
      <template #body>
        <div class="categories-container">
          <CheckboxItem
            v-for="cat in state.categories"
            :key="cat?.paramCode"
            :label="cat.paramName"
            :is-checked="props.selectedCategories.includes(cat.paramCode)"
            @on-check="emit('onCheck', cat.paramCode)"
          />
        </div>
      </template>
      <template #footer>
        <div class="modal-footer">
          <OutlinedButton text="Reset" @action="emit('onFinish', true)" />
          <Button text="Terapkan" @action="emit('onFinish')" />
        </div>
      </template>
    </Modal>
  </Teleport>
</template>

<style scoped>
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal-header > h3 {
  font-size: 1.8rem;
  font-weight: 600;
}

.modal-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.categories-container > *:not(:last-child) {
  margin-bottom: 1.2rem;
}
</style>
