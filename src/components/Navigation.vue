/* eslint-disable max-len */
<template>
    <!-- Navigation -->
    <div>
            <nav class="navbar navbar-expand-md navbar-light fixed-top"
                 :class="{notHomeNav: !isHome}" id="mainNav">
                <div class="container">
                    <span class="navbar-brand text-white"
                       :class="{'text-dark': !isHome, 'text-white': isHome}">
                        <router-link to="/">
                            <img v-if="isHome" src="../assets/floors/CattleyaLogoDarkBgd.png">
                            <img v-if="!isHome" src="../assets/floors/CattleyaLogoWhiteBgd.png">
                            </router-link>
                    </span>
                    <button class="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#hamburgerMenu" aria-controls="hamburgerMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <font-awesome-icon icon="bars" class="text-white"/>
                    </button>
                    <div class="collapse navbar-collapse" id="hamburgerMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <span class="nav-link text-center">
                                <router-link :class="{'text-dark': !isHome, 'text-white': isHome}"
                                                 to="/apartments">Apartments</router-link>
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link text-center">
                                <router-link :class="{'text-dark': !isHome, 'text-white': isHome}"
                                                 to="/environment">Environment</router-link>
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link text-center">
                                <router-link :class="{'text-dark': !isHome, 'text-white': isHome}"
                                                 to="/project">The Project</router-link>
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link text-center">
                                <router-link :class="{'text-dark': !isHome, 'text-white': isHome}"
                                            to="/about">About Us</router-link>
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link text-center">
                                <router-link :class="{'text-dark': !isHome, 'text-white': isHome}"
                                            to="/contact">Contact Us</router-link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
</template>

<script>
/* eslint-disable no-unused-expressions */

export default {
  data() {
    return {
      isHome: false,
      route: this.$route.name,
      scrollTop: true,
    };
  },
  watch: {
    $route(to) {
      if (to.name !== 'home') {
        this.isHome = false;
      } else {
        this.isHome = true;
      }
    },
  },
  created() {
    this.$route.name === 'home' ? this.isHome = true : this.isHome = false;
    window.addEventListener('scroll', () => {
      if (this.$route.name === 'home') {
        if (window.scrollY < 5) {
          this.scrollTop = true;
          this.isHome = true;
        } else {
          this.scrollTop = false;
          this.isHome = false;
        }
      }
    });
  },
};
</script>

<style scoped lang="stylus">
    @media (max-width: 992px)
        #hamburgerMenu
            background: #00000073;
    .notHomeNav
        background white;
        height 80px;
        -webkit-box-shadow: 1px 5px 5px 0px rgba(0,0,0,0.27);
        -moz-box-shadow: 1px 5px 5px 0px rgba(0,0,0,0.27);
        box-shadow: 1px 5px 5px 0px rgba(0,0,0,0.27);
    a.router-link-active
        color: #9C806B!important;
</style>

