<template>
    <div class="container mt-lg-5 mb-5">
        <div class="row mt-lg-5 d-flex flex-column flex-md-row">
            <div class="col-12 col-md-2 d-none d-md-block">
                <p>FLOOR</p>
                <nav class="nav flex-row flex-md-column">
                    <a class="nav-link floor-numbers text-left font-weight-bold active"
                       @click="changeFloor" data-floor="6" href="#">6</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="5" href="#">5</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="4" href="#">4</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="3" href="#">3</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="2" href="#">2</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="1" href="#">1</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="m1" href="#">-1</a>
                </nav>
            </div>
            <div class="d-flex d-md-none row m-0">
                <div class="col-6">
                    <div class="dropdown col-10">
                        <button class="btn btn-lg dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Select Floor
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item text-center" href="#">-1</a>
                            <a class="dropdown-item text-center" href="#">1</a>
                            <a class="dropdown-item text-center" href="#">2</a>
                            <a class="dropdown-item text-center" href="#">3</a>
                            <a class="dropdown-item text-center" href="#">4</a>
                            <a class="dropdown-item text-center" href="#">5</a>
                            <a class="dropdown-item text-center" href="#">6</a>
                        </div>
                    </div>

                </div>
                <div class="col-6 d-flex align-items-center justify-content-end">
                    <a href="#" class="downloadButon btn">
                        <h5 class="m-0"><font-awesome-icon icon="download"/> Floor Plan</h5>
                    </a>
                </div>
            </div>
            <div class="col-12 col-md-10">
                <div class="row">
                    <ApartmentCard v-for="(apartment, index) in apartmentsToShow"
                                   :key="index" :floor="apartment"></ApartmentCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ApartmentCard from './ApartmentCard.vue';

export default {
  components: {
    ApartmentCard,
  },
  data() {
    return {
      apartmets: [],
      currentFloor: '6',
      apartmentsToShow: [],
    };
  },
  computed: {
    ...mapGetters([
      'getApartments',
    ]),
  },
  mounted() {
    this.apartmentsToShow = this.getApartments(this.currentFloor);
  },
  methods: {
    /**
     * This method changes the floor plan
     * @param {{}}e
     */
    changeFloor(e) {
      const { floor } = e.target.dataset;
      this.currentFloor = floor;
      this.apartmentsToShow = this.getApartments(floor);
    },
  },
};
</script>

<style scoped lang="stylus">
    .container
        padding-top 50px;
    .floor-numbers
        font-size 30px
        color: black;
    .active
        color: #9C806B;
    nav a:last-child
        padding-left 5px;
    .downloadButon
        background #9c806b;
        /*padding: 11px 15px 5px 15px;*/
        border-radius: 5px;
</style>
