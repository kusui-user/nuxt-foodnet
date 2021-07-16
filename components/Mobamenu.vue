<template>
  <div>
    <nav class="mobile-menu">
      <ul class="mobile-menu__main">
        <li class="header__li item" v-on:click="changecontent(5)" >
          <nuxt-link to="/" active-class="acctive-list" exact>{{$store.state.menues[0]}}</nuxt-link>
        </li>
        <li class="header__li item" v-on:click="changecontent(1)">
          <nuxt-link to="/content" active-class="acctive-list">{{$store.state.menues[1]}}</nuxt-link>
        </li>
        <li class="header__li item" v-on:click="changecontent(2)">
          <nuxt-link to="/company" active-class="acctive-list">{{$store.state.menues[2]}}</nuxt-link>
        </li>
        <li class="header__li item" v-on:click="changecontent(3)">
          <nuxt-link to="/development" active-class="acctive-list">{{$store.state.menues[3]}}</nuxt-link>
        </li>
        <li class="header__li item" v-on:click="changecontent(4)">
          <nuxt-link to="/contact" active-class="acctive-list">{{$store.state.menues[4]}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    mobareturn() {
      const glcon = document.querySelector("#global-container");
      const mbme = document.querySelector(".mobile-menu");
      glcon.classList.remove("moba");
      this.$store.commit("mobatrue");
      if (this.$store.state.mobail === true) {
        mbme.classList.remove("mbme2");
      }
    },

    changecontent(num) {
      const putx2 = document.querySelector(".mobile-menu__btn");
      putx2.classList.remove("mobam");
      // this.$store.commit("changemassage", num);
      this.$store.dispatch("changex", num);
      this.mobareturn();
    },


  },
};
</script>

<style  scoped>
.acctive-list {
  color:black;
}



</style>
