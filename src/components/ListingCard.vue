<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <div class="product-card">
    <div class="product-card__item">
      <figure class="product-card__item-image">
        <img alt="listing-image" :src="props.item.logoUrl" />
      </figure>
      <h4>{{ props.item.businessName }}</h4>
    </div>
    <p class="product-card__category">{{ props.item.businessCategoryName }}</p>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  height: 30rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 4px 10px -3px rgba(204, 204, 204, 0.75);
  -webkit-box-shadow: 1px 4px 10px -3px rgba(204, 204, 204, 0.75);
  -moz-box-shadow: 1px 4px 10px -3px rgba(204, 204, 204, 0.75);
}

.product-card__item > h4 {
  font-size: 1.8rem;
  font-weight: 600;
}

.product-card__item-image {
  height: 16rem;
  margin-bottom: 0.8rem;
}

.product-card__item-image > img {
  height: inherit;
  width: 100%;
  border: 1px solid #ddd;
}

.product-card__category {
  font-size: 1.4rem;
  color: #ccc;
}
</style>
