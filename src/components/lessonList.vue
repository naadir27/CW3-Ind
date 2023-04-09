<template>
  <div class="container">
    <div v-for="lesson in lessons" :key="lesson.id">
        <figure>
            <img width="200" height="200" v-bind:src="lesson.image" />
        </figure>
        <b><i>
          <p>Subject:  {{ lesson.subject }}   </p>
          <p>Location: {{ lesson.location }}  </p>
          <p>Price:    {{ lesson.price }}     </p>
          <p>Spaces:   {{ lesson.spaces }}    </p>
        </i></b>
        <button @click="addToCart(lesson)">
          <span class="fas fa-cart-plus"></span>
          Add to cart
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonList",
  props:["lessons"],
  data() {
    return {};
  },
  methods: {
      addToCart(lesson){
        console.log("added product", lesson.id);
        this.$emit("addLesson", lesson)
      }
  }
}
</script>