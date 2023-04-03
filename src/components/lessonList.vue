<template>
    <div class="container">
      <div v-for="lesson in lessons" :key="lesson.id"><!-- "_id" -->
        <figure>
          <img v-bind:src="lesson.image" width="200" height="200" />
        </figure>
        
        <b><i>
        <p>Subject: {{ lesson.subject }}</p>
        <p>Location: {{ lesson.location }}</p>
        <p>Price: {{ lesson.price }}</p>
        <p>Available stock: {{ lesson.spaces }}</p>
        </i></b>


<!--         <button @click='addToCart(lesson)' v-if='canAddToCart(lesson)'>
            Add to cart
        </button>

        <button disabled="disabled" v-else>
            Add to cart
        </button>  
        <span v-if='lesson.spaces === cartCount(lesson.id)'>All out!</span>
        <span v-else-if="lesson.spaces - cartCount(lesson.id) <= 3">
            Only {{lesson.spaces - cartCount(lesson.id)}} left!
        </span>
        <span v-else>Buy now!</span> -->
        <button @click="addToCart(lesson)">Add to cart</button>
      </div>
    </div>
  </template>
  
  <script>
  // import axios from 'axios';

  export default {
    name: "lessonList",
    data() {
      return {
        lessons: [
        {
            'id': 10,
            'subject': 'Mathematics',
            'location': 'London',
            'price': 100,
            'spaces': 5,
            'image': 'static/images/math.jpg'
        },
        {
            'id': 20,
            'subject': 'English',
            'location': 'Oxford',
            'price': 200,
            'spaces': 5,
            'image': 'static/images/english.jpg'
        },
        {
            'id': 30,
            'subject': 'Biology',
            'location': 'Hendon',
            'price': 400,
            'spaces': 5,
            'image': 'static/images/biology.png'
        },
        {
            'id': 40,
            'subject': 'Computer Science',
            'location': 'Cambridge',
            'price': 250,
            'spaces': 5,
            'image': 'static/images/computer.png'
        },
        {
            'id': 50,
            'subject': 'Social Studies',
            'location': 'Bristol',
            'price': 300,
            'spaces': 5,
            'image': 'static/images/social.png'
        },
        {
            'id': 60,
            'subject': 'Physics',
            'location': 'Brimingham',
            'price': 600,
            'spaces': 5,
            'image': 'static/images/physics.png'
        },
        {
            'id': 70,
            'subject': 'Arts',
            'location': 'Bristol',
            'price': 150,
            'spaces': 5,
            'image': 'static/images/arts.png'
        },
        {
            'id': 80,
            'subject': 'Economics',
            'location': 'Watford',
            'price': 245,
            'spaces': 5,
            'image': 'static/images/economics.png'
        },
        {
            'id': 90,
            'subject': 'Business Studies',
            'location': 'Southampton',
            'price': 445,
            'spaces': 5,
            'image': 'static/images/business.png'
        },
        {
            'id': 100,
            'subject': 'Chemistry',
            'location': 'Cambridge',
            'price': 650,
            'spaces': 5,
            'image': 'static/images/chemistry.png'
        }
        ],
      };
    },

    methods: {
      addToCart(lesson) {
        console.log("added lesson", lesson._id);
        this.$emit('addLesson',lesson);
        lesson.spaces--;
      },

      // Checks whether the lesson can be added or not
      canAddToCart(lesson) {
        return lesson.spaces > this.cartCount(lesson.id);
      },

      // Takes the chosen lesson's id and adds it to cart 
      cartCount(id) {
          let count = 0;
          for (let i = 0; i < this.cart.length; i++) {
              if (this.cart[i] === id) {
                  count++;
              }
          }
          return count;
      },
    },
    computed: {
      // Counts the moudules that have have been carted to
      cartObjectCount: function() {
          return this.cart.length || '0';
      }
    }
  };
  </script>


    