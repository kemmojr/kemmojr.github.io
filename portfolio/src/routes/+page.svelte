<script>
	import { onMount } from 'svelte';
	import { posthog } from 'posthog-js';

	// once the page load is complete, then init posthog

	onMount(() => {
		// Initialize PostHog
		posthog.init('phc_EJbUYSxg9VxUatRENfop8ovSIKF8MG8LS9IQlUZ6TaX', {
			ui_host: 'https://us.i.posthog.com',
			api_host: 'https://app.timothykemmis.com',
			person_profiles: 'always'
		});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
