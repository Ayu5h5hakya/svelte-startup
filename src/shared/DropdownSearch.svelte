<div class="dropdown-search">
	<input type="text" placeholder="Search or jump to..." />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="22"
		height="20"
		aria-hidden="true"
		class="mr-1 header-search-key-slash"
		><path
			fill="none"
			stroke="#979A9C"
			opacity=".4"
			d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
		/><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z" /></svg
	>
</div>

<style>
	.dropdown-search {
		display: flex;
		align-items: center;
		padding: 4px;
		border: 1px;
		border-style: solid;
		border-color: '#30363d';
	}

	@media (max-width: 690px) {
		.dropdown-search {
			display: none;
		}
	}

	.dropdown-search input {
		border: none;
		background: none;
		color: white;
	}

	.dropdown-search input:focus {
		width: 300px;
		outline: none;
	}
</style>
