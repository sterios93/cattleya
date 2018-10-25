<template>
    <!-- Navigation -->
    <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand text-white" href="#">Cattleya</a>
                    <button class="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#hamburgerMenu" aria-controls="hamburgerMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <font-awesome-icon icon="bars" class="text-white"/>
                    </button>
                    <div class="collapse navbar-collapse" id="hamburgerMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link text-white text-center" href="#">Apartments</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white text-center" href="#">Environment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white text-center" href="#">The Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white text-center" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white text-center" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
</template>

<style scoped lang="stylus">
    @media (max-width: 992px)
        #hamburgerMenu
            background: #00000073;
</style>
