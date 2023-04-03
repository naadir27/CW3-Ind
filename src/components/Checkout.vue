<template>
    <div>
      <h2>Checkout</h2>
      <h3>Added lessons</h3>
      <div v-for='(lesson,index) in cart' :key="index">
          {{lesson.id}}
          <button @click="cart.splice(index,1)">remove</button>
      </div>
      <p>
        <strong>Name </strong>
        <input v-model="name" />
        <strong> Address </strong>
        <input v-model="address" /> <button>Submit</button>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Checkout",
    props: ['cart'],
    data() {
      return {
        name: "",
        address: "",
      };
    },
    methods :{
      removelesson(lesson)
      {
        this.$emit('lesson',lesson)
      }
  
    }
  };
  </script>