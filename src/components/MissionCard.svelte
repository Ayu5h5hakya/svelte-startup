<script>
	export let title;
	export let statement;
	export let imageurl;
	export let imageurl2;

	let missionCardType = 'SINGLE';
	if (imageurl2) missionCardType = 'DOUBLE';
</script>

<div class="mission-card">
	{#if missionCardType === 'SINGLE'}
		<img src={imageurl} alt="" />
		<div class="mission-card-desc">
			<h3>{title}</h3>
			<p>
				{statement}
			</p>
		</div>
	{:else}
		<div class="mission-card-desc">
			<h3>{title}</h3>
			<p>
				{statement}
			</p>
			<div class="mission-card-images">
				<img
					src="https://d35aaqx5ub95lt.cloudfront.net/images/about/universally-accessible-1.svg"
					alt=""
				/>
				<img
					src="https://d35aaqx5ub95lt.cloudfront.net/images/about/universally-accessible-2.svg"
					alt=""
				/>
			</div>
		</div>
	{/if}
</div>

<style>
	.mission-card {
		display: flex;
	}

	.mission-card-desc {
		display: flex;
		flex-direction: column;
	}

	.mission-card-images {
		display: flex;
		justify-content: space-around;
	}
</style>
