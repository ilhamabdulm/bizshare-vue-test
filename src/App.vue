<script setup>
import { onMounted, reactive, ref, watch } from 'vue';

import PageHeader from './components/PageHeader.vue';
import OutlinedButton from './components/OutlinedButton.vue';
import SearchInput from './components/SearchInput.vue';
import ListingCard from './components/ListingCard.vue';
import PaginationFooter from './components/PaginationFooter.vue';
import CategoryModal from './components/CategoryModal.vue';

import FetchApi from './utils/fetch';

const state = reactive({
  categories: [],
  listings: [],
  pagination: {},
});

const searchValue = ref('');
const currentPage = ref(1);
const showModal = ref(false);

const _getListingList = async () => {
  try {
    const response = await FetchApi.post('business/parent/all', {
      businessName: searchValue.value,
      size: 12,
      page: currentPage.value,
      listCategory: state.categories,
    });
    state.pagination = {
      totalPages: response.data.totalPages,
      totalData: response.data.totalElements,
    };
    state.listings = response.data.content;
  } catch (err) {
    console.log(err);
  }
};

const _handlePrev = () => {
  if (currentPage.value === 1) {
    return;
  } else {
    currentPage.value--;
  }
};

const _handleNext = () => {
  if (currentPage.value < state?.pagination?.totalPages) {
    currentPage.value++;
  } else {
    return;
  }
};

const _toggleModal = (state) => {
  showModal.value = state;
};

const _checkCategory = (param) => {
  const copied = [...state.categories];
  const isInList = copied.some((e) => e === param);

  if (isInList) {
    copied.splice(copied.indexOf(param), 1);
  } else {
    copied.push(param);
  }

  state.categories = copied;

  return copied;
};

const _applyFilter = (clear) => {
  if (clear) {
    state.categories = [];
  }
  _getListingList();
  showModal.value = false;
};

onMounted(() => {
  _getListingList();
});

watch(searchValue, async (newVal, oldVal) => {
  if (newVal.length >= 3 || !newVal.length) {
    currentPage.value = 1;
    _getListingList();
  }
});

watch(currentPage, async (newVal, oldVal) => {
  if (newVal !== oldVal) {
    _getListingList();
  }
});
</script>

<template>
  <main class="container">
    <div class="sticky-container">
      <PageHeader title="Daftar Bisnis" />

      <section class="action-container">
        <SearchInput placeholder="Cari nama bisnis" v-model="searchValue" />
        <OutlinedButton
          icon="folder"
          text="Kategori"
          @action="showModal = true"
        />
      </section>
    </div>

    <section class="listing-container">
      <ListingCard v-for="item in state.listings" :item="item" :key="item.id" />
    </section>

    <PaginationFooter
      :pagination="state.pagination"
      :currentPage="currentPage"
      @on-next="_handleNext"
      @on-prev="_handlePrev"
    />

    <CategoryModal
      :show-modal="showModal"
      :selected-categories="state.categories"
      @on-close="showModal = false"
      @on-check="_checkCategory"
      @on-finish="_applyFilter"
    />
  </main>
</template>

<style>
@import './assets/base.css';

.sticky-container {
  position: sticky;
  top: 0;
  background-color: var(--color-background);
  z-index: 10;
}

.container {
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1.6rem;
}

.container > section {
  padding: 0 1.6rem;
}

.action-container {
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
}

.listing-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  margin: 2rem 0;
}

@media only screen and (max-width: 640px) {
  .container {
    max-width: 100%;
  }

  .listing-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 480px) {
  .container {
    max-width: 100%;
  }

  .listing-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
