<template>
    <div>
        <!-- Navigation -->
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-none" id="mainNav">
                <div class="container">
                    <a class="navbar-brand text-white" href="#">
                        <router-link to="/">Cattleya</router-link>
                    </a>
                    <button class="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#hamburgerMenu" aria-controls="hamburgerMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <font-awesome-icon icon="bars" class="text-black"/>
                    </button>
                    <div class="collapse navbar-collapse" id="hamburgerMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link text-center active" href="#">
                                    <router-link to="/apartments">Apartments</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="#">
                                    <router-link to="/environment">Environment</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="#">
                                    <router-link to="/project">The Project</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="#">
                                    <router-link to="/about">About Us</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="#">
                                    <router-link to="/contact">Contact Us</router-link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script></script>
