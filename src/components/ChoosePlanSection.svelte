<script>
	let isProPlan = true;

	const onPlanTap = (plan) => {
		console.log(plan);
		console.log(isProPlan);
		if (plan === 'pro') {
			if (!isProPlan) isProPlan = true;
		} else if (plan === 'basic') {
			if (isProPlan) isProPlan = false;
		}
	};
</script>

<div class="plan-choose-container">
	<p>Choose your learning plan</p>
	<div class="basic-vs-pro">
		<div
			class={isProPlan ? 'selected-container' : 'unselected-container'}
			on:click={() => onPlanTap('basic')}
		>
			<div class="basic-title">
				<p>Basic</p>
				<p>Free</p>
			</div>
			<ul>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/7e67bb4da766cf5851e2947de8dc6cf1.svg"
							alt=""
						/></span
					>
					Learning Content
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/de2b1b7d8dd85a8d4814533ec105ab3b.svg"
							alt=""
						/></span
					>Unlimited Hearts
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/de2b1b7d8dd85a8d4814533ec105ab3b.svg"
							alt=""
						/></span
					>Practice Mistakes
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/de2b1b7d8dd85a8d4814533ec105ab3b.svg"
							alt=""
						/></span
					>No Ads
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/de2b1b7d8dd85a8d4814533ec105ab3b.svg"
							alt=""
						/></span
					>Mastery Quiz
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/de2b1b7d8dd85a8d4814533ec105ab3b.svg"
							alt=""
						/></span
					>Unlimited Test Outs
				</li>
			</ul>
		</div>
		<div
			class={!isProPlan ? 'selected-container' : 'unselected-container'}
			on:click={() => onPlanTap('pro')}
		>
			<div class="pro-title">
				<p>Pro</p>
				<p>$6.99/mo</p>
			</div>
			<ul>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/7e67bb4da766cf5851e2947de8dc6cf1.svg"
							alt=""
						/></span
					>Learning Content
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/7e67bb4da766cf5851e2947de8dc6cf1.svg"
							alt=""
						/></span
					>Unlimited Hearts
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/7e67bb4da766cf5851e2947de8dc6cf1.svg"
							alt=""
						/></span
					>Practice Mistakes
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/7e67bb4da766cf5851e2947de8dc6cf1.svg"
							alt=""
						/></span
					>No Ads
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/7e67bb4da766cf5851e2947de8dc6cf1.svg"
							alt=""
						/></span
					>Mastery Quiz
				</li>
				<li>
					<span
						><img
							src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/7e67bb4da766cf5851e2947de8dc6cf1.svg"
							alt=""
						/></span
					>Unlimited Test Outs
				</li>
			</ul>
		</div>
	</div>
	<button>
		{#if isProPlan}
			START MY FREE TRIAL
		{:else}
			GET STARTED
		{/if}
	</button>
</div>

<style>
	.plan-choose-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.basic-vs-pro {
		width: 500px;
		height: 350px;
		display: flex;
		justify-content: space-around;
		border-radius: 10px;
	}

	.basic-title {
		background-color: aqua;
	}

	.pro-title {
		background-color: aqua;
	}

	.unselected-container {
		width: 50%;
		border-style: solid;
	}
	.selected-container {
		width: 50%;
		border-style: solid;
		border-color: rebeccapurple;
	}

	ul {
		list-style: none;
	}

	span {
		margin-right: 10px;
	}
</style>
