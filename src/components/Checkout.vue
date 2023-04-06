<template>
  <div>      
    <h2>CART</h2>
    <div class="container">
      <div v-for="(lesson, index) in cart" :key="index">
          <figure>
              <img width="200" height="200" v-bind:src="lesson.image" />
          </figure>
          <b><i>
            <p>Subject:  {{ lesson.title }}    </p>
            <p>Location: {{ lesson.location }} </p>
            <p>Price:    {{ lesson.price }}    </p>
          </i></b>
          <button @click="removeLessons(index)">Remove</button>
      </div>
    </div>
    <h2>Checkout</h2>
      <p>
          <strong> Name:&emsp;&emsp;&emsp;&emsp;&ensp; </strong>
          <input v-model="name" /><br><br>
          <strong> Phone Number: &ensp;</strong>
          <input v-model="phoneNumber" /><br><br>
          <button> Submit </button>
      </p>
  </div>
</template>

<script>
export default {
  name: "checkoutPage",
  props: ["cart"],
  data() {
      return {
          name: "",
          phoneNumber: ""
      }
  },
  methods: {
    removeLessons(index) {
        this.$emit("removeLessons", index)
      }
  }
}
</script>