import React, { useState } from 'react';
import ScrollEffect from '../utils/scrollEffect';

const categories = ["All", "Exterior", "Interior Design", "Construction Work", "Design"];
const images = [
  { src: 'https://www.shutterstock.com/image-photo/caucasian-male-civil-engineer-talking-600nw-2389090189.jpg', category: 'Construction Work' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgLrWlosnQBsHFHAdFRrOFqwdm7HrE9IVSg&s', category: 'Design' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTt8Nr9vJ7z87WdN1_44SgJIyNVAyPyfO5g&s', category: 'Exterior' },
  { src: 'https://media.gettyimages.com/id/1388946587/video/inspecting-the-work-happening.jpg?s=640x640&k=20&c=UHyVs2sljRCB2wUs1ShG1dITrI2RizCeOEFq4TgT3g4=', category: 'Construction Work' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5orDfQcewTUIOqK2TlJFFu_0t7i59gPSOA&s', category: 'Interior Design' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRfu4OkFeXfwVE_rjskiIlnW2UYer8BD6pw&s', category: 'Design' },
  { src: 'https://i.koloapp.in/tr:n-sd/77319cb5-20aa-574e-a89d-c42546efcc02', category: 'Exterior' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsier6YhiqJV6GKadQSBfylKPyuuOZb1zsg&s', category: 'Interior Design' },
  { src: 'https://images.ctfassets.net/wp1lcwdav1p1/4ymAp58h9oMbJkHeMDo1zs/0855c674de4d5eff28996709e7057bc4/Teamwork-in-construction-industry---two-engineers-working-together-on-construction-site-with-blueprints-and-plans-645373486.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive', category: 'Construction Work' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4TYqVS0zoBkzNmWcn2WSSo9sFBp5rhzkxw&s', category: 'Design' },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  const handleLoadMore = () => {
    setVisibleProjects(prevCount => prevCount + 6);
  };

  return (
    <div className="gallery-section" id="projects">  
    <ScrollEffect />

      <h2>Our Creative Work</h2>
      <div className="gallery-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setVisibleProjects(6); 
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredImages.slice(0, visibleProjects).map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={`Gallery ${index + 1}`} />
            <div className="overlay">
              <h3>Project {index + 1}</h3>
              <p>{image.category}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < filteredImages.length && (
        <button onClick={handleLoadMore} className="load-more-btn">Load More Projects</button>
      )}
    </div>
  );
};

export default Projects;
