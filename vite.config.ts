import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			background: 'src/background.ts',
			index: 'src/index.tsx',
		  },
		  output: {
			entryFileNames: '[name].js',
			assetFileNames: '[name].[ext]',
		},
		}
	  }
});
