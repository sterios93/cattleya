<template>
    <section class="mt-lg-5">
            <Spinner></Spinner>
            <div class="mt-5 container">
                <div class="mt-0 mt-sm-5 pt-lg-5"></div>

                         <section class="d-flex mt-5 container">
                            <div class="row">
            <div class="col-12 col-sm-12 col-lg-7 d-flex justify-content-center order-2">
            <img class="mw-100 " :src="require(`../assets/projectPage/introduction.jpg`)"
            style="object-fit:cover;" alt="some photo change it later">
                                </div>
            <div class="col-12 col-sm-12 col-lg-5 d-flex mt-3 mt-lg-0 flex-column
                                 justify-content-center order-1">
                                    <h1 class="heading text-left">За Катлея</h1>
            <p>Сградата е проектирана на 6 надземни етажа и сутерен. В сутерена
    са разположени 9 паркоместа, 3 гаража, помещение за абонатна станция и 26 бр. мазета.
                Жилищата са 26 на брой, и са разположени както следва:</p>

                                    <ul class="p-0 noBullet">
                                        <li><b>Първи етаж:</b>
                                            <ul class="pl-2 noBullet">
<li>- 3 двустайни и 1 тристаен апартамент, като всеки един
    от тях притежава собствено дворно място /градина/.</li>
                                            </ul>
                                        </li>
                                        <li><b>Втори етаж:</b>
                                            <ul class="pl-2 noBullet">
                                                <li>- 5 двустайни и 1 тристаен апартамент. </li>
                                            </ul>
                                        </li>
                                        <li><b>Трети етаж:</b>
                                            <ul class="pl-2 noBullet">
                                                <li>- 5 двустайни и 1 тристаен апартамент. </li>
                                            </ul>
                                        </li>
                                        <li><b>Четвърти етаж:</b>
                                            <ul  class="pl-2 noBullet">
                                                <li>- 4 тристайни апартамента. </li>
                                            </ul>
                                        </li>
                                        <li><b>Пети етаж:</b>
                                            <ul class="pl-2 noBullet">
                                                <li>- 3 двустайни и 1 тристаен апартамент.</li>
                                            </ul>
                                        </li>
                                        <li><b>Шести етаж:</b>
                                            <ul class="pl-2 noBullet">
          <li>- 1 двустаен апартамент и 1 тристаен апартамент.</li>
                                            </ul>
                                        </li>
                                    </ul>

<p>Всичките апартаменти са развити  с оптимална квадратура във високите нива на нормативите за:
дневна, спалня и санитарен възел, а от терасите се открива прекрасна гледка към Витоша.</p>
                                </div>
                            </div>
                        </section>

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
                                    <li>{{projectInfo.consist[7]}}</li>
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

            <section class="d-flex mt-5 container">
                <div class="row">
                     <div class="col-12 col-sm-12 col-lg-7 d-flex justify-content-center">
                            <img class="mw-100 " :src="require(`../assets/projectPage/project.jpg`)"
                                style="object-fit:cover;" alt="some photo change it later">
                    </div>
                    <div class="col-12 col-sm-12 col-lg-5 d-flex mt-3
                     mt-lg-0 flex-column justify-content-center">
                        <h1 class="heading text-left">Характеристики</h1>
                        <p>Сградата е тухлена и се отличава
                            със съвременна архитектура /фасади/,
                            използвани са нови технологии и висококачествени материали:</p>

                        <ul>
                            <li class="blackText">Фасада от клинкерни плочи</li>
                            <li class="blackText">Дограма: „Инолтик“ 5 камерна</li>
                            <li class="blackText">Асансьр: „Орона“ - 6 местен</li>
                            <li><b>Луксозни общи части: </b>
                                <ul>
                                    <li>Мраморни стълбища</li>
                                    <li>Парапети: само от стъкло най - високия клас - мат</li>
                                </ul>
                            </li>
                            <li><b>Отопление:</b>
                                <ul>
                                    <li>Освен централната топлофикация
                                        всички апартаменти са с изводи
                                        и за климатизация /сплит система/</li>
                                </ul>
                            </li>
                            <li><b>Контролиран достъп:</b>
                                <ul>
                                    <li>Вход-изход на сградата с 24-часова
                                        жива охрана /портиер/
                                        и постоянен видео-контрол.</li>
                                </ul>
                            </li>
                        </ul>

                        <p>Жилищата се продават на шпакловка и замазка,
                            като към всяко от тях има: мазе и идеална част от дворното място. </p>
                        <p>Предвид добрата локация сграда „Катлея“ предлага прекрасни
                            условия и подходяща среда за покупка на имоти както с цел
                            - постоянно живеене, така и за имоти закупени с инвестиционна цел.</p>
                    </div>
                </div>
            </section>

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

<style scoped lang="stylus">
    .heading
        color: #9C806B;
        font-weight bold
    .blackText
        color: black;
        font-weight bold;
    .noBullet
        list-style-type none;
</style>
