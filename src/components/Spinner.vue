<template>
    <div class="vld-parent">
        <loading
          :active.sync="isLoading"
          :color="'#9C806B'"
          :can-cancel="true"
          :is-full-page="fullPage"
        />
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  mounted() {
    this.showLoader();
  },
  methods: {
    showLoader() {
      this.isLoading = true;
      setTimeout(
        () => {
          this.isLoading = false;
        }
        , 500,
      );
    },
  },
};
</script>
