<template>
    <section class="mt-lg-5">
            <Spinner></Spinner>
            <div class="mt-5 container">
                <div class="mt-0 mt-sm-5 pt-lg-5"></div>
                <Article v-bind:pictureLeft="false"
                         :article="projectInfo.introduction" :isHome="false"></Article>
                <div class="container m-0">
                    <div class="row mt-5">
                          <div class="flex-column col-lg-6">
                            <p class="font-weight-bold">Сградата се състои от:</p>
                            <div class="d-flex row">
                                <ul class="col-12 col-md-6 flex-column">
                                    <li>{{projectInfo.consist[0]}}</li>
                                    <li>{{projectInfo.consist[1]}}</li>
                                    <li>{{projectInfo.consist[2]}}</li>
                                    <li>{{projectInfo.consist[3]}}</li>
                                </ul>
                                <ul class="col-12 col-md-6 flex-column">
                                    <li>{{projectInfo.consist[4]}}</li>
                                    <li>{{projectInfo.consist[5]}}</li>
                                    <li>{{projectInfo.consist[6]}}</li>
                                </ul>
                            </div>
                          </div>
                         <div class="flex-column col-lg-6">
                            <p class="font-weight-bold">Локация на сградата:</p>
                            <div class="d-flex row">
                                <ul class="col-12 col-md-6 flex-column">
                                    <li>{{projectInfo.location[0]}}</li>
                                    <li>{{projectInfo.location[1]}}</li>
                                    <li>{{projectInfo.location[2]}}</li>
                                    <li>{{projectInfo.location[6]}}</li>
                                </ul>
                                <ul class="col-12 col-md-6 flex-column">
                                    <li>{{projectInfo.location[3]}}</li>
                                    <li>{{projectInfo.location[4]}}</li>
                                    <li>{{projectInfo.location[5]}}</li>
                                    <li>{{projectInfo.location[7]}}</li>
                                </ul>
                            </div>
                          </div>
                    </div>
                </div>
                <Article v-bind:pictureLeft="false"
                         :article="projectInfo.environment" :isHome="false"></Article>
                <Article v-bind:pictureLeft="true"
                         :article="projectInfo.architectural" :isHome="false"></Article>
            </div>
                <google-map :center="{ lat: 42.649435, lng: 23.354145 }"
                            :marker="{ lat: 42.649435, lng: 23.354145 }"></google-map>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Article from '../components/Article.vue';
import GoogleMap from '../components/Map.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'project',
  components: {
    Article,
    GoogleMap,
    Spinner,
  },
  data() {
    return {
      projectInfo: {},
    };
  },
  computed: {
    ...mapGetters([
      'getProjectDescription',
    ]),
  },
  beforeMount() {
    this.projectInfo = this.getProjectDescription;
  },
};
</script>
