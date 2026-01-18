import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://umd-slavic-cultures-association.com',
	base: '',
    vite: {
    	resolve: {
      		alias: {
        		'@layouts': '/src/layouts',
        		'@components': '/src/components',
				'@styles': '/src/styles',
      			"@content": '/src/content'
      		}
    	}	
  	},
});
