<template>
    <div>
        <!-- Navigation -->
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-none" id="mainNav">
                <div class="container">
                    <a class="navbar-brand text-white" href="#">
                        <router-link to="/">
                            <img src="../assets/floors/CattleyaLogoWhiteBgd.png">
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
                                    <router-link to="/apartments">Apartments</router-link>
                            </li>
                            <li class="text-center pb-2">
                                    <router-link to="/environment">Environment</router-link>
                            </li>
                            <li class="text-center pb-2">
                                    <router-link to="/project">The Project</router-link>
                            </li>
                            <li class="text-center pb-2">
                                    <router-link to="/about">About Us</router-link>
                            </li>
                            <li class="text-center">
                                    <router-link to="/contact">Contact Us</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script></script>
<style scoped lang="stylus">
        a.router-link-active
            color: #9C806B!important;
</style>
