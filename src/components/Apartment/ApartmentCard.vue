<template>
    <div class="col-12 col-md-6 mt-5 mt-md-0 mt-lg-5" @click="checkApartment" id="a1">
                <Spinner></Spinner>
        <div class="col-12 col-md-10 apartmentCard p-0">
            <div class="position-relative">
                <img class="w-100" :src="require(`../../assets/apartments/${floor.imageSrc}`)"
                     alt="Card image cap">
                <span v-if="floor.sold" class="position-absolute bg-danger text-white p-1 mt-3 ml-3
                 sellLabel font-weight-bold"
                      style="top: 0; left: 0;">
                    Продаден</span>
                <span v-else class="position-absolute bg-info text-white p-1 mt-3 ml-3
                 sellLabel font-weight-bold"
                      style="top: 0; left: 0;">
                    Свободен</span>
                <span class="position-absolute font-weight-bold ml-2 priceLabel"
                      style="bottom: 0; left: 0;">{{floor.apartmentNum}}</span>
            </div>
            <div class="descriptionBg p-2">
                <div>
                    <p>Модерен и луксозен апартамент.</p>
                    <p><font-awesome-icon icon="map-marker"/> София, ж.к Студентски град.</p>
                    <div class="row">
                        <div class="col-6 col-xl-4">
                            <p v-if="floor.details.bedrooms === 1">
                                {{floor.details.bedrooms}} Спалня</p>
                            <p v-else> {{floor.details.bedrooms}} Спални</p>
                        </div>
                        <div class="col-6 col-xl-4">
                            <p v-if="floor.details.bathrooms === 1">
                                {{floor.details.bathrooms}} Баня</p>
                            <p v-else >{{floor.details.bathrooms}} Бани</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from '../Spinner.vue';

export default {
  components: {
    Spinner,
  },
  props: ['floor'],
  data() {
    return {
      image: '',
      baseUrl: process.env.BASE_URL,
    };
  },
  computed: {

  },
  methods: {
    checkApartment() {
      const apartmentId = this.floor.apartmentNum;
      const { floor } = this.floor.details;
      this.$router.push({ path: `/apartments/${floor}/${apartmentId}`, props: { apartment: floor } });
    },
  },
};
</script>

<style scoped lang="stylus">
    .priceLabel
        font-size 20px;
    .sellLabel
        font-size: 12px;
    .descriptionBg
        background: #f7f7f7;

    .apartmentCard:hover {
        cursor pointer
        transform: scale(1);
        -webkit-box-shadow: -1px -5px 19px 2px rgba(219,219,219,1);
        -moz-box-shadow: -1px -5px 19px 2px rgba(219,219,219,1);
        box-shadow: -1px -5px 19px 2px rgba(219,219,219,1);
    }
</style>

