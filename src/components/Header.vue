<template>
        <!-- Page Header -->
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="site-heading mt-0 text-white">
                            <h1>We are investors who turn ideas <br>
                            into real-life projects.</h1>
                            <button class="btn">Learn More</button>
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
                                        <p class="stats-numbers font-weight-bold mr-3 mb-0">16</p>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">Finished<br>projects</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center
                             justify-content-center col-xs-12 col-sm-4">
                                <div class="row d-flex align-items-center
                                 justify-content-center p-2">
                                    <div class="col-6 d-flex justify-content-center">
                                        <p class="stats-numbers font-weight-bold mr-3 mb-0">5</p>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">Years on the<br>market</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center
                             justify-content-center col-xs-12 col-sm-4">
                                <div class="row d-flex align-items-center
                                 justify-content-center p-2">
                                    <div class="col-6 d-flex justify-content-center">
                                        <p class="stats-numbers font-weight-bold mr-3 mb-0">93</p>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">Sold<br>apartments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<style scoped lang="stylus">
    .masthead
        background: url("../assets/header-main.jpg")
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
                font-size: 45px
        .stats-numbers
            font-size 40px
    @media (min-width: 992px)
        .site-heading
            padding: 200px 0 100px 0

</style>
