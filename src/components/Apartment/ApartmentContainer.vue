<template>
    <div class="container mt-lg-5 mb-5">
        <div class="row mt-lg-5 d-flex flex-column flex-md-row">
            <div class="col-12 col-md-2 d-none d-md-block">
                <p>FLOOR</p>
                <nav class="nav flex-row flex-md-column">
                    <a class="nav-link floor-numbers text-left font-weight-bold active"
                       @click="changeFloor" data-floor="f6" href="#">6</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="f5" href="#">5</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="f4" href="#">4</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="f3" href="#">3</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="f2" href="#">2</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="f1" href="#">1</a>
                    <a class="nav-link floor-numbers text-left font-weight-bold"
                       @click="changeFloor" data-floor="fm1" href="#">-1</a>
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
                    <ApartmentCard></ApartmentCard>
                    <ApartmentCard></ApartmentCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Floor6 from './Floor6.vue';
import Floor5 from './Floor5.vue';
import Floor4 from './Floor4.vue';
import Floor3 from './Floor3.vue';
import Floor2 from './Floor2.vue';
import Floor1 from './Floor1.vue';
import FloorM1 from './FloorM1.vue';
import ApartmentCard from './ApartmentCard.vue';

export default {
  components: {
    Floor6,
    Floor5,
    Floor4,
    Floor3,
    Floor2,
    Floor1,
    FloorM1,
    ApartmentCard,
  },
  data() {
    return {
      floors: {
        fm1: false,
        f1: false,
        f2: false,
        f3: false,
        f4: false,
        f5: false,
        f6: true,
      },
    };
  },
  methods: {
    checkApartment(e) {
      const apartmentId = e.target.parentNode.id;
      console.log(apartmentId);
    },
    /**
     * This method changes the floor plan
     * @param {{}}e
     */
    changeFloor(e) {
      const { floor } = e.target.dataset;
      Object.keys(this.floors)
        .forEach((f) => {
          if (f === floor) {
            this.floors[f] = true;
          } else {
            this.floors[f] = false;
          }
        });
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
