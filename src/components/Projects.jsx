import React from 'react';

// Projects section displaying a grid of high-quality portfolio images
const Projects = () => {
  return (
    <section id="projects" className="projects container section-padding">
      <div className="projects-header">
        <h2 className="section-title">Recent Projects</h2>
        <a href="#all-projects" className="view-all-link">
          View All <span className="arrow">→</span>
        </a>
      </div>

      <div className="projects-grid">
        <div className="project-item item-1">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2680&auto=format&fit=crop" 
            alt="Modern hallway" 
            loading="lazy"
          />
        </div>
        
        <div className="project-item item-2">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop" 
            alt="Stone wall finishing" 
            loading="lazy"
          />
        </div>
        
        <div className="project-item item-3">
          <img 
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop" 
            alt="Luxury bathroom" 
            loading="lazy"
          />
        </div>
        
        <div className="project-item item-4">
          <img 
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2574&auto=format&fit=crop" 
            alt="Premium flooring tiles" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
