<template>
    <div>
        <img src="../../assets/half.png">
    </div>
</template>
<script>
export default {
  name: 'Floor6',
  methods: {
    checkApartment(e) {
      const apartmentId = e.target.parentNode.id;
      this.$router.push({ path: `/apartments/${apartmentId}`, params: { apartmentId } });
    },
  },
};
</script>
