<script>
	let languages = [
		'العربية',
		'Čeština',
		'Deutsch',
		'Ελληνικά',
		'English',
		'Español',
		'Français',
		'हिंदी',
		'Magyar',
		'Bahasa Indonesia',
		'Italiano',
		'日本語',
		'Nederlands',
		'Polski',
		'Português',
		'Română',
		'Русский',
		'ภาษาไทย',
		'Türkçe',
		'Українською',
		'Tiếng Việt',
		'中文'
	];
</script>

<div class="site-lang">
	<div>Site Language:</div>
	{#each languages as language}
		<span>{language}</span>
	{/each}
</div>

<style>
	div {
		font-family: 'Roboto Condensed', sans-serif;
	}
	span {
		padding: 5px;
	}
</style>
