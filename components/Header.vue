<template>
  <div>
    <header class="header">
      <div class="header__inner">
        <div class="logo" v-on:click="changecontent(5)">
          <nuxt-link to="/">
            <img src="~assets/img/logo.png" alt=""
          /></nuxt-link>
        </div>

        <nav class="header__nav">
          <ul class="header__ul">
            <li class="header__li item" v-on:click="changecontent(5)">
              <nuxt-link to="/" active-class="acctive-list" exact>{{
                $store.state.menues[0]
              }}</nuxt-link>
            </li>
            <li class="header__li item" v-on:click="changecontent(1)">
              <nuxt-link to="/content" active-class="acctive-list">{{ $store.state.menues[1] }}</nuxt-link>
            </li>
            <li class="header__li item" v-on:click="changecontent(2)">
              <nuxt-link to="/company" active-class="acctive-list">{{ $store.state.menues[2] }}</nuxt-link>
            </li>
            <li class="header__li item" v-on:click="changecontent(3)">
              <nuxt-link to="/development" active-class="acctive-list">{{
                $store.state.menues[3]
              }}</nuxt-link>
            </li>
            <li class="header__li item" v-on:click="changecontent(4)">
              <nuxt-link to="/contact" active-class="acctive-list">{{ $store.state.menues[4] }}</nuxt-link>
            </li>
            <li class="header__li item" >
              <nuxt-link to="/contact" active-class="acctive-list">ログイン</nuxt-link>
            </li>
          </ul>
        </nav>

        <button
          class="mobile-menu__btn"
          v-on:click="
            movingmenu();
            putt();
          "
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div class="main__pic">
      <div class="pic">
        <img src="~assets/img/home-image.jpg" alt="" />
      </div>

      <div class="word">
        <transition
          name=""
          enter-active-class="animate__animated animate__fadeInUp"
        >
          <div v-if="this.$store.state.show">
            {{ $store.state.message }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  methods: {
    movingmenu() {
      const glcon = document.querySelector("#global-container");
      const mbme = document.querySelector(".mobile-menu");
      glcon.classList.toggle("moba");
      mbme.classList.toggle("mbme2");
    },

    changecontent(num) {
      this.$store.dispatch("changex", num);
      // const word = document.querySelector(".word");
      // word.classList.add('wordpulus');
    },

    putt() {
      const putx2 = document.querySelector(".mobile-menu__btn");
      putx2.classList.toggle("mobam");
    },
  },
};
</script>

<style  scoped>
.acctive-list {
  color: white;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter-to {
  opacity: 1;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(40px);
  }
}
</style>