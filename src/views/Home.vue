<template>
  <div class="home">
    <Spinner></Spinner>
    <HeaderContainer/>
    <main>
      <Article
        v-bind:pictureLeft="true"
        :article="about.team"
        :isHome="true"
        :to="about.team.route">
      </Article>
      <Article
        v-bind:pictureLeft="false"
        :article="projectInfo.environment"
        :isHome="true"
        :to="projectInfo.environment.route">
      </Article>
      <Article
        v-bind:pictureLeft="true"
        :article="projectInfo.introduction"
        :isHome="true"
        :to="projectInfo.environment.route">
      </Article>
      <google-map 
        :center="getMapInfo.center"
        :marker="getMapInfo.marker">
      </google-map>
      <email-form></email-form>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderContainer from '../components/Header/HeaderContainer';
import Article from '../components/Article.vue';
import GoogleMap from '../components/Map.vue';
import Spinner from '../components/Spinner.vue';
import EmailForm from '../components/EmailForm.vue';

export default {
  name: 'home',
  components: {
    HeaderContainer,
    Article,
    GoogleMap,
    Spinner,
    EmailForm,
  },
  data() {
    return {
      projectInfo: {},
      about: {},
    };
  },
  computed: {
    ...mapGetters([
      'getProjectDescription',
      'getAbout',
      'getMapInfo'
    ]),
  },
  beforeMount() {
    this.projectInfo = this.getProjectDescription;
    this.about = this.getAbout;
  },
};
</script>
