<template>
    <div class="mt-5">
        <div class="mt-0 mt-sm-5"></div>
        <div class="container">
           <div>
               <h1 class="heading text-left">Контакти</h1>
               <p>Офис 1: град София, ул. 'Г. С. Раковски' 183, ет. 2, ап.
                   8, <a href="tel:0888619844">0888619844</a>,
                   <a href="tel:029800950">02/9800950</a>,
                   <a href="tel:029803170">9803170</a></p>
               <p>Офис 2: град София, бул. 'България' 60В, ет. 3, офис
                   7,ВИЛИДЖ РЕЛАКС
                   ЕООД, <a href="tel:0888241248">0888241248</a></p>
           </div>
        </div>
        <google-map 
            :center="getMapInfo.center"
            :marker="getMapInfo.marker">
        </google-map>
        <email-form></email-form>
    </div>
</template>

<script>
import GoogleMap from '../components/Map.vue';
import EmailForm from '../components/EmailForm.vue';
import {mapGetters} from "vuex";

export default {
  name: 'project',
  components: {
    GoogleMap,
    EmailForm,
  },
  data() {
      return {}
  },
  computed: {
      ...mapGetters([
          'getMapInfo'
      ])
  }
};
</script>

<style scoped lang="stylus">
    .heading
        color: #9C806B;
        font-weight bold
</style>
