import { useState } from 'react'

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const closeLightbox = () => setLightboxImage(null)

  const openLightbox = (src) => setLightboxImage(src)

  const projects = [
    { id: 1, title: 'Project 1', image: 'https://routeegy.github.io/startFramework/assets/images/poert1.png' },
    { id: 2, title: 'Project 2', image: 'https://routeegy.github.io/startFramework/assets/images/port2.png' },
    { id: 3, title: 'Project 3', image: 'https://routeegy.github.io/startFramework/assets/images/port3.png' },
    { id: 4, title: 'Project 4', image: 'https://routeegy.github.io/startFramework/assets/images/poert1.png' },
    { id: 5, title: 'Project 5', image: 'https://routeegy.github.io/startFramework/assets/images/port2.png' },
    { id: 6, title: 'Project 6', image: 'https://routeegy.github.io/startFramework/assets/images/port3.png' },
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="hero-inner">
          <h1>PORTFOLIO COMPONENT</h1>
          <div className="hero-divider">
            <span>★</span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.id} className={`project-card card-${(i % 6) + 1}`} onClick={() => openLightbox(project.image)}>
              <div className="project-inner">
                <div className="project-circle">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
              <div className="project-overlay">
                <div className="overlay-icon">+</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Project enlarged" />
          </div>
        </div>
      )}
    </section>
  )
}

// Lightbox render outside of component tree handled via conditional in component
