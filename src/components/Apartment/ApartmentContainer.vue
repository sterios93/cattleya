<template>
    <div class="container mt-5 mb-5">
        <div class="row mt-5">
            <div class="col-2">
                <p>FLOOR</p>
                <nav class="nav flex-column">
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
            <div class="col-10">
                <Floor6 v-if="floors.f6"></Floor6>
                <Floor5 v-if="floors.f5"></Floor5>
                <Floor6 v-if="floors.f4"></Floor6>
                <Floor6 v-if="floors.f3"></Floor6>
                <Floor6 v-if="floors.f2"></Floor6>
                <Floor6 v-if="floors.f1"></Floor6>
                <Floor6 v-if="floors.fm1"></Floor6>
            </div>
        </div>
    </div>
</template>

<script>
import Floor6 from './Floor6.vue';
import Floor5 from './Floor5.vue';

export default {
  components: {
    Floor6,
    Floor5,
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
</style>
