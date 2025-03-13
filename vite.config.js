import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        about: '/about.html',
        services: '/services.html',
        news: '/news.html',
        community: '/community.html',
        research: '/research.html',
        contact: '/contact.html'
      }
    }
  }
})