<template>
  <div>
    <div id="global-container">
      <div class="mobile-menu__cover" v-on:click="movingmenu() ; putt()"></div>
      <Header />
      <transition name="page">
      <Nuxt />
      </transition>
      <Footer />
    </div>
      <Mobamenu/>
 
    
  </div>
</template>

<script>
export default {

  methods: {
    movingmenu() {
      const glcon = document.querySelector("#global-container");
      const mbme = document.querySelector(".mobile-menu");
      glcon.classList.toggle("moba");
      mbme.classList.toggle("mbme2");
    },

    putt(){
      const putx2 = document.querySelector(".mobile-menu__btn");
      putx2.classList.toggle("mobam");
      
    },
  },
};

</script>


