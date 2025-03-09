import './style.css'
import * as lucideIcons from 'lucide-static'

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  // Initialize icons
  const lucideIcons = document.querySelectorAll('[data-lucide]')
  lucideIcons.forEach(element => {
    const iconName = element.getAttribute('data-lucide')
    if (iconName && lucideIcons[iconName]) {
      element.innerHTML = lucideIcons[iconName]
    }
  })

  // Add loaded class to body for initial fade in
  document.body.classList.add('loaded')

  // Handle page transitions
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault()
        document.body.classList.add('page-exit')
        
        setTimeout(() => {
          window.location.href = link.href
        }, 300)
      }
    })
  })

  // Add hover effect to the main card
  const mainCard = document.querySelector('.relative.bg-background')
  if (mainCard) {
    mainCard.addEventListener('mousemove', (e) => {
      const rect = mainCard.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const xPercent = (x / rect.width) * 100
      const yPercent = (y / rect.height) * 100
      
      mainCard.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(59, 40, 204, 0.1), transparent 50%), #0A0819`
    })
    
    mainCard.addEventListener('mouseleave', () => {
      mainCard.style.background = '#0A0819'
    })
  }
})