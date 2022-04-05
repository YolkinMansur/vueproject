<template>
  <div class="block">
    <div class="bg-secondBG">
      <div class="container mx-auto">
        <div class="topbar flex items-center justify-between py-4">
          <div class="bg-white w-max p-2 rounded-md">
            <i class="fas fa-map-marker-alt text-mapIcon"></i>
            <select class="bg-white" name="" id="">
              <option value="">Алматы</option>
              <option value="">Астана</option>
              <option value="">Павлодар</option>
            </select>
          </div>
          <div class="flex bg-or p-2 rounded-md items-center">
            <i class="fas fa-phone text-sm text-grayText"></i>
            <p class="mx-2 text-sm text-grayText">
              Горячая линия с 08:00 до 00:00
            </p>
            <a href="tel:1717">1717</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container mx-auto py-2">
        <div class="flex items-center justify-between">
          <router-link to="/"><h1 class="text-3xl">LOGO</h1></router-link>
          <div
            class="flex items-center bg-mainCol text-white py-2 px-4 rounded-md"
          >
            <i class="fas fa-list-ul mr-3"></i>
            <p class="uppercase text-sm font-semibold">Каталог</p>
          </div>
          <div class="relative w-2/5">
            <input
              type="text"
              class="w-full bg-white text-gray-300 border border-mainCol rounded-lg p-2"
              placeholder="Я хочу найти"
            />
            <i class="fas fa-search search-but"></i>
          </div>
          <div class="flex">
            <div class="text-center mx-3">
              <i class="fas fa-heart"></i>
              <p class="text-grayText">Избранное</p>
            </div>
            <div class="text-center mx-3">
              <i class="fas fa-balance-scale-left"></i>
              <p class="text-grayText">Сравнить</p>
            </div>
            <div class="text-center mx-3 relative">
              <div @click="shoFunc()">
                <p class="counter">{{ showCounter }}</p>
                <i class="fas fa-shopping-cart"></i>
                <p class="text-grayText">Корзина</p>
              </div>
              <div
                v-if="showCart === 1"
                class="h-auto p-4 bg-white rounded-lg cart"
              >
                <div
                  v-for="(products, index) of addedProducts"
                  :key="products"
                  class="mb-3"
                >
                  <div class="flex items-center justify-between">
                    <img
                      class="w-12 h-12"
                      :src="products.images[0].first"
                      alt=""
                    />
                    <p class="mx-3 text-xs">{{ products.name }}</p>
                    <p class="font-bold">{{ products.price }}т.</p>
                    <p @click="removeItem(index)" class="ml-3 bg-red-600 px-2 p-1 rounded-md"><i class="fa-solid fa-xmark text-lg text-white"></i></p>
                  </div>
                </div>
                <p class="text-right">Итого: {{ sumOfProducts }}</p>
                <div class="flex justify-between items-center">
                  <router-link class="hover:cursor-pointer hover:text-blue-400" to="/cart">Открыть корзину</router-link>
                  <p @click="removeAll()" class="hover:cursor-pointer hover:text-blue-400">Очистить корзину</p>
                </div>
              </div>
            </div>
            <div class="text-center mx-3">
              <i class="fas fa-user"></i>
              <p class="text-grayText">Вход</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavbarComp",
  computed: mapGetters(["addedProducts", "showCounter", "sumOfProducts"]),
  data() {
    return {
      showCart: 0,
      counter: 0
    };
  },
  methods: {
    ...mapActions(['removeByIndex', 'removeAllCart']),
    shoFunc() {
      if (this.showCart === 0) {
        this.showCart = 1;
      } else {
        this.showCart = 0;
      }
    },
    removeItem(id) {
      this.removeByIndex(id);
      console.log(id)
    },
    removeAll() {
      this.removeAllCart();
    }
  },
};
</script>