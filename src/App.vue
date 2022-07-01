<script setup>
import { ref } from 'vue';
import PageHeader from './components/PageHeader.vue';
import OutlinedButton from './components/OutlinedButton.vue';
import SearchInput from './components/SearchInput.vue';
import ListingCard from './components/ListingCard.vue';

const sampleContent = ref([
  {
    id: 1,
    logo: '0c9cc78194af4e50b1d990c8c0b7b42c.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/0c9cc78194af4e50b1d990c8c0b7b42c.jpeg',
    businessName: 'Metrix Inspira',
    businessCategoryName: 'Mekanik & Jasa',
    businessCategoryId: '4',
    businessCore: 'System Integrator',
  },
  {
    id: 2,
    logo: '040f3df1b4da4a638045d5c93186bbb4.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/040f3df1b4da4a638045d5c93186bbb4.jpeg',
    businessName: 'Dawet Kemayu',
    businessCategoryName: 'F&B',
    businessCategoryId: '2',
    businessCore: 'Restoran',
  },
  {
    id: 3,
    logo: 'adb3681f3a7d41de8e5981c9081fdf77.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/adb3681f3a7d41de8e5981c9081fdf77.jpeg',
    businessName: 'Bakso Rusuk Sunangiri',
    businessCategoryName: 'F&B',
    businessCategoryId: '2',
    businessCore: 'Restoran',
  },
  {
    id: 4,
    logo: 'd84c7ae231544b89824bffd450c2df8a.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/d84c7ae231544b89824bffd450c2df8a.jpeg',
    businessName: 'Zenbu',
    businessCategoryName: 'F&B',
    businessCategoryId: '2',
    businessCore: 'Restoran',
  },
  {
    id: 5,
    logo: '14f99568cf4543ddbd5e6000c146f404.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/14f99568cf4543ddbd5e6000c146f404.jpeg',
    businessName: 'Hasanah Pancawangi Agro Indonesia',
    businessCategoryName: 'Agrikultur',
    businessCategoryId: '6',
    businessCore: 'Perikanan',
  },
  {
    id: 6,
    logo: 'd20c9bbec686431fb25b8546a5f79cc3.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/d20c9bbec686431fb25b8546a5f79cc3.jpeg',
    businessName: 'Alba Prima Industri Tambang Batubara',
    businessCategoryName: 'Jasa',
    businessCategoryId: '5',
    businessCore: 'Tambang Batubara',
  },
  {
    id: 7,
    logo: '2b44bff510184ca5af5f20a760acb1ee.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/2b44bff510184ca5af5f20a760acb1ee.jpeg',
    businessName: 'SPBU Pertamina',
    businessCategoryName: 'Jasa',
    businessCategoryId: '5',
    businessCore: 'SPBU',
  },
  {
    id: 8,
    logo: '51fbded956994a90a11d9c0a7668f857.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/51fbded956994a90a11d9c0a7668f857.jpeg',
    businessName: 'Balaraja Distributor Bahan Bangunan Baja Ringan',
    businessCategoryName: 'Mekanik & Jasa',
    businessCategoryId: '4',
    businessCore: 'Bahan Bangunan',
  },
  {
    id: 9,
    logo: 'f35e4875da9d49cfa2d4151f8db33137.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/f35e4875da9d49cfa2d4151f8db33137.jpeg',
    businessName: 'Galura',
    businessCategoryName: 'Teknologi',
    businessCategoryId: '9',
    businessCore: 'Teknologi Informasi',
  },
  {
    id: 10,
    logo: 'f9486e74cecd48678a00602af41ebf1e.jpeg',
    logoUrl:
      'https://storage.googleapis.com/bizhare-file/f9486e74cecd48678a00602af41ebf1e.jpeg',
    businessName: 'Megacon Precast',
    businessCategoryName: 'Jasa',
    businessCategoryId: '5',
    businessCore: 'Infrastruktur',
  },
]);
</script>

<template>
  <main class="container">
    <div class="sticky-container">
      <PageHeader title="Daftar Bisnis" />

      <section class="action-container">
        <SearchInput placeholder="Cari nama bisnis" />
        <OutlinedButton icon="folder" text="Kategori" />
      </section>
    </div>

    <section class="listing-container">
      <ListingCard v-for="item in sampleContent" :item="item" :key="item.id" />
    </section>

    <footer class="pagination-container">
      <p>Halaman 1 dari 4</p>
      <div class="pagination">
        <button class="pagination-item">
          <vue-feather type="chevron-left" size="12"></vue-feather>
        </button>
        <button class="pagination-item">1</button>
        <button class="pagination-item">
          <vue-feather type="chevron-right" size="12"></vue-feather>
        </button>
      </div>
    </footer>
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

.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 2rem;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pagination-container > p {
  font-size: 1.4rem;
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
</style>
