<script></script>

<div class="modal">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.modal {
		position: fixed;
		background-color: white;
		padding: 5px;
		top: 50px;
		right: 20px;
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
