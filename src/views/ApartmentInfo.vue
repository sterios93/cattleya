<template>
    <div class="container mt-5 mb-5">
        <div style="height: 70px"></div>
        <div class="row">
            <div class="col-12 col-md-6">
                <!--Apartment number-->
                <div class="row">
                    <div class="col-6 d-flex">
                        <h1 class="font-weight-bold">{{id.toLocaleUpperCase()}}</h1>
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-end">
                        <a href="#" class="downloadButon">
                            <h5><font-awesome-icon icon="download"/> Download Plan</h5>
                        </a>
                    </div>
                </div>
                <!--Apartment details -->
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <div>
                            <h5 class="bronzColor font-weight-bold">Details</h5>
                        </div>
                        <div class="row">
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="square"/> 157 sq.m.</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="bed"/> 1 Bedroom</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="bath"/> 2 Bathrooms</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="building"/> Floor 6/6</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="ad"/> Brick</div>
                        </div>
                    </div>
                </div>
                <!-- Description -->
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <div>
                            <h5 class="pt-4 bronzColor font-weight-bold">Description</h5>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            been the industry's standard dummy text ever since the 1500s,
                            a galley of type and scrambled it to make a type specimen book.
                            ive centuries, but also the leap into electronic typesetting,
                            unchanged. It was popularised in the 1960s with the release of
                            Lorem Ipsum passages, and more recently with desktop publishing
                            including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <!-- Features -->
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <div>
                            <h5 class="pt-3 pb-1 bronzColor font-weight-bold">Features</h5>
                        </div>
                        <div class="row">
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/> 157 sq.m.</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/> 1 Bedroom</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check"
                                                   class="bronzColor"/> 2 Bathrooms</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/> Floor 6/6</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/> Brick</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <img class="mw-100" src="../assets/half.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'id',
  ],
};
</script>

<style scoped lang="stylus">
    .bronzColor
        color: #9c806b;
    .downloadButon
        background #9c806b;
        padding: 11px 15px 5px 15px;
        border-radius: 5px;
</style>
