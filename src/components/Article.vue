<!--Todos-->
<!--Fix the responsive layout-->
<!--make the content dynamic-->

<template>
    <section class="d-flex mt-5 container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6"
                 v-bind:class="['order-2', { 'order-1' : pictureLeft }]">
                <img class="mw-100" src="../assets/team.jpg" alt="some photo change it later">
            </div>
            <div class="col-12 col-sm-12 col-md-6 d-flex
             flex-column justify-content-center align-items-center"
                 v-bind:class="[ 'order-1', { 'order-2' : pictureLeft }]">
                <h1>Who are we ? </h1>
                <p>
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
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['pictureLeft'],
  data() {
    return {
      // orderTo: this.order,
    };
  },
};
</script>


<style>

</style>
