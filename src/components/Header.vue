<template>
        <!-- Page Header -->
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading text-center mt-0 text-white">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
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
        padding: 200px 0 150px
        h1
            font-size: 50px
        .subheading
            font-size: 24px
            font-weight: 300
            line-height: 1.1
            margin: 10px 0 0
            font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif

    @media only screen and (min-width: 768px)
        .site-heading
            padding: 200px 0
            h1
                font-size: 80px

</style>
