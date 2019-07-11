<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12 ">
				<div class="site-heading mt-0 text-white">
					<h1>Инвеститори, които превръщат идеите<br>	в реални проекти.</h1>
					<div class="mt-3">
							<router-link to="/apartments" class="customButtons mr-3">Апартаменти</router-link>
							<router-link to="/project" class="customButtons d-lg-none">Проектът</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'header-buttons',
  data() {
    return {};
  },
};
</script>

<style scoped lang="stylus">
    .customButtons
        background #9c806b;
        padding: 8px 15px 8px 15px;
        border-radius: 5px;
        color: white;
</style>
