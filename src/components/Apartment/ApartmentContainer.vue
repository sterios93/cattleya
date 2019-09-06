<template>
    <div class="container mt-lg-5 mb-5">
        <div class="row mt-lg-5 d-flex flex-column flex-md-row">
            <div class="col-12 col-md-2 d-none d-md-block">
                <p>ЕТАЖ</p>
                <ul class="nav flex-row flex-md-column-reverse">
                  <li v-for="(floor, index) in getFloorsCount + 1 "
                    class="floor-numbers py-1 text-left font-weight-bold"
                    @click="changeFloor" :data-floor="floor - 1"
                    >{{floor - 1}}
                  </li>
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
                            <li v-for="(floor, index) in getFloorsCount + 1 "
                                class="floor-numbers py-1 text-center font-weight-bold"
                                @click="changeFloor" :data-floor="floor - 1"
                                >{{floor - 1}}
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-10">
                <div class="row h-100 w-100 m-0">
                    <ApartmentCard 
                       v-for="(apartment, index) in getApartments(getFloorNumber)"
                      :key="index"
                      :floor="apartment"
                      />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import ApartmentCard from './ApartmentCard.vue';

export default {
  components: {
    ApartmentCard,
  },
  computed: {
    ...mapGetters([
      'getApartments',
      'getFloorNumber',
      'getFloorsCount'
    ]),
  },
  mounted() {
    this.removeActiveClass();
    this.addActiveClass();
  },
  methods: {
    ...mapActions([
      'changeSelectedFloor',
    ]),
    removeActiveClass() {
      const floors = document.querySelectorAll('.floor-numbers');
      floors.forEach((f) => f.classList.remove('active'));
    },
    addActiveClass() {
      // We have two menus, one for mobile and for desktop, we should update them both
      // Consider moving the menus in diff components ?
      const floorList = document.querySelectorAll(`[data-floor='${this.getFloorNumber}']`);
      floorList.forEach(floor => {
        floor.classList.add('active');
      })
    },
    changeFloor(e) {
      const selectedFloor = e.target;
      const { floor } = e.target.dataset;
      this.changeSelectedFloor(floor);

      if (!selectedFloor.classList.contains('active')) {
        this.removeActiveClass();
        this.addActiveClass()
      }
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
        border-radius: 5px;
    .floor-numbers
        cursor: pointer;
    .dropdown-menu.show
      display: flex
      flex-direction: column-reverse
</style>
