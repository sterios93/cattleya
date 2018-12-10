<template>
    <div class="mt-5">
      <Spinner></Spinner>
        <div class="mt-0 mt-sm-5 pt-lg-5"></div>
        <Article v-bind:pictureLeft="false" :article="about.team" :isHome="false"></Article>
        <Article v-bind:pictureLeft="true" :article="about.ceo" :isHome="false"></Article>
        <google-map :center="{ lat: 42.649435, lng: 23.354145 }"
                    :marker="{ lat: 42.649435, lng: 23.354145 }"></google-map>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Article from '../components/Article.vue';
import GoogleMap from '../components/Map.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'about',
  components: {
    Article,
    GoogleMap,
    Spinner,
  },
  data() {
    return {
      about: {},
    };
  },
  computed: {
    ...mapGetters([
      'getAbout',
    ]),
  },
  beforeMount() {
    this.about = this.getAbout;
  },
};
</script>
