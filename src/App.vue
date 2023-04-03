<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <button @click="showCheckout">
        {{ this.cart.length }}
        Checkout
      </button>
    </header>
    <main>
        <lesson-list @addLesson="addToCart"></lesson-list>
        <checkout :cart="cart"></checkout>
    </main>
  </div>
</template>

<script>
import lessonList from "./components/lessonList.vue";
import checkout from "./components/Checkout.vue";

export default {
  name: "App",
  components: {
    lessonList,
    checkout,
  },
  data() {
    return {
      sitename: "LESSON SPACES",
      cart: [],
    };
  },
  methods: {
    showCheckout() {

    },
    addToCart(lesson) {
     console.log("addLesson event received by the root component.");
      this.cart.push(lesson);
    },
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: auto auto;
  margin: 20px;
  padding: 15px;
  padding-bottom: 30px;
}

h1{
text-align: center;
font-family: 'Helvatica';
}
</style>
