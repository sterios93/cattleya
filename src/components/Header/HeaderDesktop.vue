<template>
	<header class="masthead">
		<div class="overlay"></div>
			<HeaderButtons/>
			<div class="row mx-0">
					<div class="d-flex justify-content-end col-lg-12 px-0">
							<div class="bg-white d-flex col-xs-12 col-lg-7">
									<div class="row d-flex flex-wrap flex-column flex-sm-row col-12 mx-0">
											<div class="d-flex align-items-center
												justify-content-center col-xs-12 col-sm-4">
												<div class="row d-flex align-items-center justify-content-center p-2">
															<div class="col-4 d-flex justify-content-center pr-0">
																<p class="stats-numbers font-weight-bold mr-0 mb-0">{{info.soldApartments}}</p>
															</div>
															<div class="col-8">
																<p class="mb-0">Продадени<br>апартамента</p>
															</div>
													</div>
											</div>
											<div class="d-flex align-items-center
												justify-content-center col-xs-12 col-sm-4">
													<div class="row d-flex align-items-center
														justify-content-center p-2">
															<div class="col-4 d-flex justify-content-center pr-0">
															<p class="stats-numbers font-weight-bold mr-1 mb-0">{{info.freeApartments}}</p>
															</div>
															<div class="col-8">
																<p class="mb-0">Свободни<br>апартамента</p>
															</div>
													</div>
											</div>
											<div class="d-flex align-items-center
												justify-content-center col-xs-12 col-sm-4">
													<div class="row d-flex align-items-center
														justify-content-center p-2">
															<div class="col-4 d-flex justify-content-center pr-0">
															<p class="stats-numbers font-weight-bold mr-1 mb-0">{{info.totalApartments}}</p>
															</div>
															<div class="col-8">
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
  name: 'header-desktop',
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

<style lang="stylus">
.masthead
        background: url("../../assets/header/CattleyaHeaderMonitor.jpg")
        position: relative
        background-size: cover
        background-position: center bottom
        background-repeat: no-repeat
        .overlay
            position: absolute
            top: 0
            left: 0
            height: 100%
            width: 100%
            background-color: #212529
            opacity: 0.5
@media only screen and (min-width: 768px)
			.site-heading
					padding: 250px 0 100px 0
					h1
							font-size: 43px;
			.stats-numbers
					font-size 52px
@media (min-width: 992px)
		.site-heading
				padding: 200px 0 100px 0
</style>
