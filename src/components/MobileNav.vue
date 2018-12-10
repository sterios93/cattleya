<template>
    <div>
        <!-- Navigation -->
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-none" id="mainNav">
                <div class="container">
                    <a class="navbar-brand text-white" href="#">
                        <router-link to="/">
                            <img src="../assets/logo/CattleyaLogoWhiteBgd.png">
                        </router-link>
                    </a>
                    <button class="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#hamburgerMenu" aria-controls="hamburgerMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <font-awesome-icon icon="bars" class="text-black"/>
                    </button>
                    <div class="collapse navbar-collapse" id="hamburgerMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="text-center pb-2">
                               <router-link to="/apartments" class="fontSettings">
                                   Апартаменти</router-link>
                            </li>
                            <li class="text-center pb-2">
                               <router-link to="/project" class="fontSettings">
                                   Проектът</router-link>
                            </li>
                            <li class="text-center pb-2">
                               <router-link to="/about" class="fontSettings">
                                   За Нас</router-link>
                            </li>
                            <li class="text-center">
                               <router-link to="/contact" class="fontSettings">
                                   Контакти</router-link>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link text-center">
                                    <a href="tel:0888619844" class="fontSettings">0888619844</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mobile-nav',
};
</script>
<style scoped lang="stylus">
        a.router-link-active
            color: #9C806B!important;
        .fontSettings
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            color: #2c2c2c;
</style>
