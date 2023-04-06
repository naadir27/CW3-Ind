<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <button @click="toggleCheckout">{{ this.cart.length }} <span class="fa-solid fa-bag-shopping"></span> {{ showCheckout ? 'Back To Lessons' : 'Checkout' }} </button>
    </header>
    <main>
      <component v-bind:is="currentComponent" :lessons="lessons" @addLesson="addToCart" :cart="cart" @removeLessons="removeCart"></component>
    </main>
  </div>
</template>

<script>
import lessonList from './components/LessonList.vue'
import checkout from './components/Checkout.vue'

export default {
  name: 'App',
  components: { lessonList, checkout },
  data() {
    return {
      sitename: "LESSON STORE",
      showCheckout: false,     
      lessons:[],
      cart: [],
    }
  },
  methods: {
    toggleCheckout: function () {
      this.showCheckout = !this.showCheckout;
    },
    addToCart(lesson) {
      const index = this.lessons.findIndex((l) => l.id === lesson.id);
      if (index >= 0 && this.lessons[index].spaces > 0) {
        this.lessons[index].spaces--;
        this.cart.push(lesson);
      }
    },
    removeCart(index) {
      const lesson = this.cart[index];
      this.cart.splice(index, 1);
      this.returnLesson(lesson);
    },
    returnLesson(lesson) {
      const index = this.lessons.findIndex((l) => l.id === lesson.id);
      if (index >= 0) {
        this.lessons[index].spaces++;
      }
    }
  },
  computed: {
    currentComponent: function () {
      return this.showCheckout ? "checkout" : "lessonList";
    },
  },
  created: function () {
    // Retriving the data from the server. 
    // That the server fetchs the data from MongoDB.
    const data = this;
    fetch("http://localhost:3000/collection/lessons").then(function (response) {
      response.json().then(function (json) {
        // Storing The Data
        data.lessons = json;
      });
    });
  },
}
</script>