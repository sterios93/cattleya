<template>
    <div class="col-12 col-md-6 mt-5 mt-md-0" @click="checkApartment" id="a1">
        <div class="col-12 col-md-10 apartmentCard p-0">
            <div class="position-relative">
                <img class="w-100" src="../../assets/half.png" alt="Card image cap">
                <span class="position-absolute bg-info text-white p-1 mt-3 mr-3
                 sellLabel font-weight-bold"
                      style="top: 0; right: 0;">
                    FOR SELL</span>
                <span class="position-absolute font-weight-bold ml-2 priceLabel"
                      style="bottom: 0; left: 0;">$ 150 000</span>
            </div>
            <div class="descriptionBg p-2">
                <div>
                    <p>Modern and luxury apartment</p>
                    <p><font-awesome-icon icon="map-marker"/> Sofia - Student City</p>
                    <div class="row">
                        <div class="col-6 col-xl-4">
                            <p>150 sq.m.</p>
                        </div>
                        <div class="col-6 col-xl-4">
                            <p>3 Bedrooms</p>
                        </div>
                        <div class="col-6 col-xl-4">
                            <p>2 Bathrooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    };
  },
  methods: {
    checkApartment() {
      const apartmentId = 1;
      this.$router.push({ path: `/apartments/${apartmentId}`, params: { apartmentId } });
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

