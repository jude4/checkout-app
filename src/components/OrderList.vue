<template>
  <div class="mt-5">
    <h1 class="text-xl">Order Summary</h1>
    <div
      class="flex justify-between mt-5"
      v-for="item in orders"
      :key="item.id"
    >
      <div class="flex">
        <img :src="item.img" width="110" />
        <span class="ml-2 my-auto">1 X {{ item.product }}</span>
      </div>
      <div>
        <p>${{ item.price }}</p>
      </div>
    </div>
    <p class="mt-2 font-semibold">Subtotal: $101.00</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const orders = ref([
  {
    id: 1,
    img: "/assets/coffee.jpg",
    product: "Coffee",
    price: 7.5,
  },
  {
    id: 2,
    img: "/assets/book.jpg",
    product: "Book",
    price: 13.5,
  },
  {
    id: 3,
    img: "/assets/bag.jpg",
    product: "Bag",
    price: 80.0,
  },
]);
</script>

<style></style>
