<template>
    <div>
        <div class="d-none d-sm-block">
            <HeaderDesktop :info="salesStats"/>
        </div>
        <div class="d-sm-none">
            <HeaderMobile :info="salesStats"/>
        </div>
    </div>
</template>

<script>
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { mapGetters } from 'vuex';

export default {
  components: {
    HeaderDesktop,
    HeaderMobile,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      salesStats: 'getSalesStats',
    }),
  },
};
</script>
<style  lang="stylus">
    .site-heading
        padding: 250px 0 100px 0
        h1
            font-size: 30px
        .subheading
            font-size: 24px
            font-weight: 300
            line-height: 1.1
            margin: 10px 0 0
            font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif
    .stats-numbers
        font-size 30px
        color: #9C806B;
</style>
