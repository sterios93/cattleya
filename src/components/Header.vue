<template>
        <!-- Page Header -->
    <div>
        <!--Large screens-->
        <div class="d-none d-sm-block">
            <header class="masthead">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="site-heading mt-0 text-white">
                                <h1>Инвеститори, които превръщат идеите<br>
                                в реални проекти.</h1>
                                <div class="mt-3">
                    <router-link to="/apartments"
                                 class="customButtons mr-3">Апартаменти</router-link>
                <router-link to="/project" class="customButtons d-lg-none">Проектът</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mx-0">
                    <div class="d-flex justify-content-end col-lg-12 px-0">
                        <div class="bg-white d-flex col-xs-12 col-lg-7">
                            <div class="row d-flex flex-wrap flex-column flex-sm-row col-12 mx-0">
                                <div class="d-flex align-items-center
                                 justify-content-center col-xs-12 col-sm-4">
                            <div class="row d-flex align-items-center justify-content-center p-2">
                                        <div class="col-4 d-flex justify-content-center pr-0">
                                        <p class="stats-numbers font-weight-bold mr-0 mb-0">10</p>
                                        </div>
                                        <div class="col-8">
                                            <p class="mb-0">Продадени<br>апартамента</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center
                                 justify-content-center col-xs-12 col-sm-4">
                                    <div class="row d-flex align-items-center
                                     justify-content-center p-2">
                                        <div class="col-4 d-flex justify-content-center pr-0">
                                        <p class="stats-numbers font-weight-bold mr-1 mb-0">16</p>
                                        </div>
                                        <div class="col-8">
                                            <p class="mb-0">Свободни<br>апартамента</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center
                                 justify-content-center col-xs-12 col-sm-4">
                                    <div class="row d-flex align-items-center
                                     justify-content-center p-2">
                                        <div class="col-4 d-flex justify-content-center pr-0">
                                        <p class="stats-numbers font-weight-bold mr-1 mb-0">26</p>
                                        </div>
                                        <div class="col-8">
                                            <p class="mb-0">Общо<br>апартамента</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <!--Mobile screens-->
        <div class="d-sm-none">
            <header class="mastheadMobile">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="site-heading mt-0 text-white">
                                <h1>Инвеститори, които превръщат идеите<br>
                                    в реални проекти.</h1>
                                    <div class="mt-3">
              <router-link to="/apartments" class="customButtons mr-3">Апартаменти</router-link>
                   <router-link to="/project" class="customButtons d-lg-none">Проектът</router-link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mx-0">
                    <div class="d-flex justify-content-end col-lg-12 px-0">
                        <div class="bg-white d-flex col-xs-12 col-lg-6">
                            <div class="row d-flex flex-wrap flex-column flex-sm-row col-12 mx-0">
                                <div class="d-flex align-items-center
                                 justify-content-center col-xs-12 col-sm-4">
                                    <div class="row d-flex align-items-center
                                     justify-content-center p-2">
                                        <div class="col-6 d-flex justify-content-center">
                                         <p class="stats-numbers font-weight-bold mr-3 mb-0">10</p>
                                        </div>
                                        <div class="col-6">
                                            <p class="mb-0">Продадени<br>апартамента</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center
                                 justify-content-center col-xs-12 col-sm-4">
                                    <div class="row d-flex align-items-center
                                     justify-content-center p-2">
                                        <div class="col-6 d-flex justify-content-center">
                                         <p class="stats-numbers font-weight-bold mr-3 mb-0">16</p>
                                        </div>
                                        <div class="col-6">
                                            <p class="mb-0">Свободни<br>апартамента</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center
                                 justify-content-center col-xs-12 col-sm-4">
                                    <div class="row d-flex align-items-center
                                     justify-content-center p-2">
                                        <div class="col-6 d-flex justify-content-center">
                                        <p class="stats-numbers font-weight-bold mr-3 mb-0">26</p>
                                        </div>
                                        <div class="col-6">
                                            <p class="mb-0">Общо<br>апартамента</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<style scoped lang="stylus">
    .customButtons
        background #9c806b;
        padding: 8px 15px 8px 15px;
        border-radius: 5px;
        color: white;
    .mastheadMobile
        background: url("../assets/header/CattleyaHeaderMobile.jpg")
        position: relative
        background-size: cover
        background-position-y: -260px
        background-repeat: no-repeat
    .masthead
        background: url("../assets/header/CattleyaHeaderMonitor.jpg")
        position: relative
        background-size: cover
        background-position: center bottom
        background-repeat: no-repeat
        .overlay
            position: absolute
            top: 0
            left: 0
            height: 100%
            width: 100%
            background-color: #212529
            opacity: 0.5

    .site-heading
        padding: 250px 0 100px 0
        h1
            font-size: 30px
        .subheading
            font-size: 24px
            font-weight: 300
            line-height: 1.1
            margin: 10px 0 0
            font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif

    .stats-numbers
        font-size 30px
        color: #9C806B;
    @media only screen and (min-width: 768px)
        .site-heading
            padding: 250px 0 100px 0
            h1
                font-size: 43px;
        .stats-numbers
            font-size 52px
    @media (min-width: 992px)
        .site-heading
            padding: 200px 0 100px 0

</style>
