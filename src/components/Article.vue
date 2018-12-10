<!--Todos-->
<!--Fix the responsive layout-->
<!--make the content dynamic-->

<template>
    <section class="d-flex mt-5 container">
        <div class="row">
            <div class="col-12 col-sm-12 col-lg-7 d-flex justify-content-center"
                 v-bind:class="['order-2', { 'order-1' : picturePosition }]">
                <img class="mw-100 " :src="require(`../assets/${article.imageSrc}`)"
                     style="object-fit:cover;" alt="some photo change it later">
            </div>
            <div class="col-12 col-sm-12 col-lg-5 d-flex mt-3 mt-lg-0
             flex-column justify-content-center"
                 v-bind:class="[ 'order-1', { 'order-2' : picturePosition }]">
                <h1 class="heading text-center">{{article.heading}}</h1>
                <p >
                  {{article.description}}
                </p>
                  <router-link :to="to" v-if="isHome !==false"
                               class="blackText">Вижте повече</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['pictureLeft', 'article', 'isHome', 'to'],
  data() {
    return {
      picturePosition: null,
    };
  },
  methods: {
    attachListeners() {
      window.addEventListener('resize', () => {
        this.changePicOrder();
      });
    },
    changePicOrder() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 992) this.picturePosition = true;
      else this.picturePosition = this.pictureLeft;
    },
  },
  created() {
    this.changePicOrder();
    this.attachListeners();
  },
};
</script>


<style scoped lang="stylus">
    .heading
        color: #9C806B;
        font-weight bold
    img
        height auto
    .blackText
        color: black;
        font-wight bold;
</style>
