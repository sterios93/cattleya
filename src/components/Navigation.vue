/* eslint-disable max-len */
<template>
    <!-- Navigation -->
    <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top"
                 :class="{notHomeNav: !isHome}" id="mainNav">
                <div class="container">
                    <a class="navbar-brand text-white"
                       :class="{'text-dark': !isHome, 'text-white': isHome}" href="#">
                        <router-link to="/">Cattleya</router-link>
                    </a>
                    <button class="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#hamburgerMenu" aria-controls="hamburgerMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <font-awesome-icon icon="bars" class="text-white"/>
                    </button>
                    <div class="collapse navbar-collapse" id="hamburgerMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link text-center active"
                                   :class="{'text-dark': !isHome, 'text-white': isHome}" href="#">
                                    <router-link to="/apartments">Apartments</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center"
                                   :class="{'text-dark': !isHome, 'text-white': isHome}"
                                   href="#">Environment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center"
                                   :class="{'text-dark': !isHome, 'text-white': isHome}"
                                   href="#">The Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center"
                                   :class="{'text-dark': !isHome, 'text-white': isHome}"
                                   href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center"
                                   :class="{'text-dark': !isHome, 'text-white': isHome}"
                                   href="#">Contact Us</a>
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
    };
  },
  watch: {
    $route(to) {
      console.log(to);
      if (to.name !== 'home') {
        this.isHome = false;
      } else {
        this.isHome = true;
      }
    },
  },
  created() {
    this.$route.name === 'home' ? this.isHome = true : this.isHome = false;
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
     ul li a.active /* Not working not taking precedence*/
        color: #9C806B!important;
</style>

