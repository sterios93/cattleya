<template>
    <div class="container mt-lg-5 mb-5">
        <div class="row mt-lg-5 d-flex flex-column flex-md-row">
            <div class="col-12 col-md-2 d-none d-md-block">
                <p>ЕТАЖ</p>
                <ul class="nav flex-row flex-md-column">
                    <li class="floor-numbers py-1 text-left font-weight-bold"
                       @click="changeFloor" data-floor="6">6</li>
                    <li class="floor-numbers py-1 text-left font-weight-bold"
                       @click="changeFloor" data-floor="5">5</li>
                    <li class="floor-numbers py-1 text-left font-weight-bold"
                       @click="changeFloor" data-floor="4" >4</li>
                    <li class="floor-numbers py-1 text-left font-weight-bold"
                       @click="changeFloor" data-floor="3" >3</li>
                    <li class="floor-numbers py-1 text-left font-weight-bold"
                       @click="changeFloor" data-floor="2" >2</li>
                    <li class="floor-numbers py-1 text-left font-weight-bold"
                       @click="changeFloor" data-floor="1">1</li>
                    <li class="floor-numbers py-1 text-left font-weight-bold"
                       @click="changeFloor" data-floor="0">0</li>
                </ul>
            </div>
            <div class="d-flex d-md-none row m-0">
                <div class="col-12 col-sm-6 d-flex align-items-center justify-content-center">
                    <div class="dropdown">
                        <button class="btn btn-lg dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Изберете етаж
                        </button>
                        <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                            <li class="floor-numbers py-1 text-center font-weight-bold active"
                                @click="changeFloor" data-floor="6">6</li>
                            <li class="floor-numbers py-1 text-center font-weight-bold"
                            @click="changeFloor" data-floor="5">5</li>
                            <li class="floor-numbers py-1 text-center font-weight-bold"
                            @click="changeFloor" data-floor="4" >4</li>
                            <li class="floor-numbers py-1 text-center font-weight-bold"
                            @click="changeFloor" data-floor="3" >3</li>
                            <li class="floor-numbers py-1 text-center font-weight-bold"
                            @click="changeFloor" data-floor="2" >2</li>
                            <li class="floor-numbers py-1 text-center font-weight-bold"
                            @click="changeFloor" data-floor="1">1</li>
                            <li class="floor-numbers py-1 text-center font-weight-bold"
                            @click="changeFloor" data-floor="0">0</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="col-12 col-md-10">
                <div class="row h-100 w-100 m-0">
                    <ApartmentCard v-for="(apartment, index) in apartmentsToShow"
                                   :key="index" :floor="apartment"
                                  ></ApartmentCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ApartmentCard from './ApartmentCard.vue';

export default {
  components: {
    ApartmentCard,
  },
  data() {
    return {
      apartmets: [],
      currentFloor: 6,
      apartmentsToShow: [],
    };
  },
  computed: {
    ...mapGetters([
      'getApartments',
      'getFloorNumber',
    ]),
  },
  watch: {
    getFloorNumber(newFloor) {
      this.currentFloor = newFloor;
    },
  },
  mounted() {
    this.currentFloor = this.getFloorNumber;
    this.apartmentsToShow = this.getApartments(this.currentFloor);
    const floors = document.querySelectorAll('.floor-numbers');
    floors.forEach((f) => {
      f.classList.remove('active');
    });
    const floor = document.querySelector(`[data-floor='${this.currentFloor}']`);
    floor.classList.add('active');
  },
  methods: {
    ...mapMutations([
      'changeSelectedFloor',
    ]),
    /**
     * This method changes the floor plan
     * @param {{}}e
     */
    changeFloor(e) {
      const floors = document.querySelectorAll('.floor-numbers');
      const currentFloor = e.target;
      if (!currentFloor.classList.contains('active')) {
        floors.forEach((floor) => {
          floor.classList.remove('active');
        });
        currentFloor.classList.add('active');
      }
      const { floor } = e.target.dataset;
      this.apartmentsToShow = this.getApartments(floor);
      console.log(this.apartmentsToShow);
      this.changeSelectedFloor(floor);
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
    .floor-numbers
        cursor: pointer;
</style>
