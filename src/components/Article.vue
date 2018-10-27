<!--Todos-->
<!--Fix the responsive layout-->
<!--make the content dynamic-->

<template>
    <section class="d-flex mt-5 container">
        <div class="row">
            <div class="col-12 col-sm-12 col-lg-7 d-flex justify-content-center"
                 v-bind:class="['order-2', { 'order-1' : picturePosition }]">
                <img class="mw-100 " src="../assets/team.jpg"
                     alt="some photo change it later">
            </div>
            <div class="col-12 col-sm-12 col-lg-5 d-flex mt-3 mt-lg-0
             flex-column justify-content-center"
                 v-bind:class="[ 'order-1', { 'order-2' : picturePosition }]">
                <h1 class="heading text-center">About us ? </h1>
                <p >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages,
                    and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                    <a href="#" class="blackText">See more</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['pictureLeft'],
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
</style>
