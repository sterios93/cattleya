<template>
 <header class="mastheadMobile">
		<div class="overlay"></div>
			<HeaderButtons />
			<div class="row mx-0">
					<div class="d-flex justify-content-end col-lg-12 px-0">
							<div class="bg-white d-flex col-xs-12 col-lg-6">
									<div class="row d-flex flex-wrap flex-column flex-sm-row col-12 mx-0">
											<div class="d-flex align-items-center
												justify-content-center col-xs-12 col-sm-4">
													<div class="row d-flex align-items-center
														justify-content-center p-2">
															<div class="col-6 d-flex justify-content-center">
																<p class="stats-numbers font-weight-bold mr-3 mb-0">{{info.soldApartments}}</p>
															</div>
															<div class="col-6">
																	<p class="mb-0">Продадени<br>апартамента</p>
															</div>
													</div>
											</div>
											<div class="d-flex align-items-center
												justify-content-center col-xs-12 col-sm-4">
													<div class="row d-flex align-items-center
														justify-content-center p-2">
															<div class="col-6 d-flex justify-content-center">
																<p class="stats-numbers font-weight-bold mr-3 mb-0">{{info.freeApartments}}</p>
															</div>
															<div class="col-6">
																	<p class="mb-0">Свободни<br>апартамента</p>
															</div>
													</div>
											</div>
											<div class="d-flex align-items-center
												justify-content-center col-xs-12 col-sm-4">
													<div class="row d-flex align-items-center
														justify-content-center p-2">
															<div class="col-6 d-flex justify-content-center">
															<p class="stats-numbers font-weight-bold mr-3 mb-0">{{info.totalApartments}}</p>
															</div>
															<div class="col-6">
																	<p class="mb-0">Общо<br>апартамента</p>
															</div>
													</div>
											</div>
									</div>
							</div>
					</div>
			</div>
	</header>
</template>

<script>
import HeaderButtons from './HeaderButtons';

export default {
  name: 'header-mobile',
  components: {
    HeaderButtons,
  },
  props: {
	  info: {},
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="stylus">
	.mastheadMobile
					background: url("../../assets/header/CattleyaHeaderMobile.jpg")
					position: relative
					background-size: cover
					background-position-y: -260px
					background-repeat: no-repeat
</style>
