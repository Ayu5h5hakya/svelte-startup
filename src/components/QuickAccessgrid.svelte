<script>
	let aboutUs = [
		'Courses',
		'Mission',
		'Approach',
		'Efficacy',
		'Team',
		'Research',
		'Incubator',
		'Careers',
		'Brand guidelines',
		'Press',
		'Investors',
		'Contact us'
	];
	let products = [
		'Duolingo',
		'Duolingo for Schools',
		'Duolingo English Test',
		'Duolingo ABC',
		'Duolingo Events',
		'Podcast',
		'Stories',
		'Dictionary'
	];
	let apps = ['Duolingo for Android', 'Duolingo for iOS', 'Duolingo ABC(iOS)'];
	let helpSupport = [
		'Discussion',
		'Troubleshooting',
		'Duolingo FAQs',
		'School FAQs',
		'Duolingo English Test FAQs',
		'Status'
	];
	let privacyTerms = [
		'Community guidelines',
		'Terms',
		'Privacy',
		'Respecting your "do not sell my personal information" rights'
	];
	let social = ['Blog', 'Instagram', 'Facebook', 'Twitter', 'YouTube'];
</script>

<div class="quick-access">
	<div>
		<h3>About us</h3>
		<ul>
			{#each aboutUs as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Products</h3>
		<ul>
			{#each products as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Apps</h3>
		<ul>
			{#each apps as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Help and support</h3>
		<ul>
			{#each helpSupport as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Privacy and terms</h3>
		<ul>
			{#each privacyTerms as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Social</h3>
		<ul>
			{#each social as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.quick-access {
		display: grid;
		margin-bottom: 10px;
		grid-template-columns: auto auto;
	}
	ul {
		list-style: none;
	}
</style>
