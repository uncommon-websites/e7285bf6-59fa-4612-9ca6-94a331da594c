<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
	
	function handleToggle() {
		themeStore.toggle();
	}
</script>

<button
	onclick={handleToggle}
	class={[
		'relative flex items-center justify-center w-9 h-9 border border-border',
		'hover:bg-primary-50 transition-all duration-200',
		'text-muted hover:text-foreground'
	]}
	aria-label={themeStore.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
	title={themeStore.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
>
	<!-- Sun Icon (Light Mode) -->
	<div class={[
		'absolute inset-0 flex items-center justify-center transition-all duration-300',
		themeStore.theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
	]}>
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="12" cy="12" r="4"/>
			<path d="M12 2v2"/>
			<path d="M12 20v2"/>
			<path d="m4.93 4.93 1.41 1.41"/>
			<path d="m17.66 17.66 1.41 1.41"/>
			<path d="M2 12h2"/>
			<path d="M20 12h2"/>
			<path d="m6.34 17.66-1.41 1.41"/>
			<path d="m19.07 4.93-1.41 1.41"/>
		</svg>
	</div>
	
	<!-- Moon Icon (Dark Mode) -->
	<div class={[
		'absolute inset-0 flex items-center justify-center transition-all duration-300',
		themeStore.theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
	]}>
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
		</svg>
	</div>
</button>
