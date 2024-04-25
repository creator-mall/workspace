import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  server: {
    port: 4200
  },
  runtime: {
    router: true
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack'
    })
  ]
});
