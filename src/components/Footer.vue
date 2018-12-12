<template>
    <div class="footer pt-3 pb-3">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 d-flex justify-content-center justify-content-lg-start">
                    <nav class="nav">
                        <router-link
                                class="nav-link text-white" to="/apartments">
                            Апартаменти</router-link>
                        <router-link
                                class="nav-link text-white" to="/project">Проектът</router-link>
                        <router-link
                                class="nav-link text-white" to="/about">За нас</router-link>
                        <router-link
                                class="nav-link text-white" to="/contact">Контакти</router-link>
                        <a  class="nav-link text-white"  href="tel:0888619844">0888619844</a>
                    </nav>
                </div>
                <div class="col-12 col-lg-4 d-flex
                justify-content-center justify-content-lg-end align-items-center">
                    <p class="m-0 text-white copyright">Copyright 2018 - Ask the website owners.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="stylus">
    .footer
        background #2c2c2c;
    .copyright
        font-size 10px;
</style>
