import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@styles': path.resolve(__dirname, './src/assets/styles'),
			'@layout': path.resolve(__dirname, './src/components/layout'),
			'@ui': path.resolve(__dirname, './src/components/ui')
		}
	}
})
