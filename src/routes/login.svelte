<script>
	import SignUpForm from '../components/SignUpForm.svelte';
</script>

<div class="auth-page">
	<header>
		<button>
			<img src="https://d35aaqx5ub95lt.cloudfront.net/images/x.svg" alt="" />
		</button>
		<h3>LOGIN</h3>
	</header>
	<SignUpForm />
</div>

<style>
	.auth-page {
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
