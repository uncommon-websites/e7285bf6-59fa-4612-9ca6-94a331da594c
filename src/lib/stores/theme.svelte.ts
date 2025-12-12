/**
 * Theme store for managing dark/light mode
 * Uses Svelte 5 runes for reactive state management
 */

type Theme = 'light' | 'dark';

class ThemeStore {
	theme = $state<Theme>('light');
	
	constructor() {
		// Initialize theme from localStorage or system preference
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('theme') as Theme | null;
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			
			this.theme = stored || (prefersDark ? 'dark' : 'light');
			this.applyTheme(this.theme);
		}
	}
	
	toggle() {
		this.theme = this.theme === 'light' ? 'dark' : 'light';
		this.applyTheme(this.theme);
		
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', this.theme);
		}
	}
	
	setTheme(newTheme: Theme) {
		this.theme = newTheme;
		this.applyTheme(newTheme);
		
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme);
		}
	}
	
	private applyTheme(theme: Theme) {
		if (typeof document !== 'undefined') {
			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
}

export const themeStore = new ThemeStore();
