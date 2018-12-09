<template>
    <div class="container mt-5 mb-5">
        <div class="d-none d-lg-block mt-5 mt-sm-0" style="height: 70px"></div>
        <div class="row">
            <div class="col-12 col-md-6 order-2 order-lg-1">
                <!--Apartment number-->
                <div class="row">
                    <div class="col-6 d-flex">
                        <h1 class="font-weight-bold">{{apartment.apartmentNum}}</h1>
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-end">
                        <a href="#" class="downloadButon">
                            <h5><font-awesome-icon icon="download"/> Свали план.</h5>
                        </a>
                    </div>
                </div>
                <!--Apartment details -->
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <div>
                            <h5 class="bronzColor font-weight-bold">Детайли</h5>
                        </div>
                        <div class="row">
                            <div v-if="apartment.details.bedrooms === 1"
                                 class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="bed"/>
                                {{apartment.details.bedrooms }} Спалня</div>
                             <div v-else class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="bed"/>
                                {{apartment.details.bedrooms }} Спални</div>
                            <div v-if="apartment.details.bathrooms === 1"
                                 class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="bath"/>
                                {{ apartment.details.bathrooms}} Баня</div>
                            <div v-else class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="bath"/>
                                {{ apartment.details.bathrooms}} Бани</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="building"/>
                                Етаж {{ apartment.details.floor}}/6</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="ad"/> {{apartment.details.brick}}</div>
                        </div>
                    </div>
                </div>
                <!-- Description -->
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <div>
                            <h5 class="pt-4 bronzColor font-weight-bold">Описание</h5>
                        </div>
                        <p v-if="apartment.sold"
                           class="font-weight-bold p-0 m-0" style="text-decoration: underline;">
                            ПРОДАДЕН</p>
                        <p>
                            {{apartment.description}}
                        </p>
                    </div>
                </div>
                <!-- Features -->
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <div>
                            <h5 class="pt-3 pb-1 bronzColor font-weight-bold">Допълнение</h5>
                        </div>
                        <div class="row">
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/>
                                {{apartment.features.controlledAccess}}</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/>
                                {{apartment.features.elevator}}</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/>
                                {{apartment.features.parking}}</div>
                            <div class="col-6 col-lg-4 py-2">
                                <font-awesome-icon icon="check" class="bronzColor"/>
                                {{apartment.details.balcony}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 order-1 order-lg-2">
                <img class="mw-100" :src="require(`../assets/apartments/${apartment.imageSrc}`)">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      apartment: {},
    };
  },
  computed: {
    ...mapGetters([
      'getApartment',
    ]),
  },
  beforeMount() {
    const { id, floor } = this.$route.params;
    this.apartment = this.getApartment(floor, id);
  },
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
