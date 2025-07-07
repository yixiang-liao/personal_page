import React from 'react'

const ProjectBox = ({ image, title, type, tags, onClick }) => {
  return (
    <div className="project-box" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={image} alt={title} />
      <div className="project-text">
        <h2>{title}</h2>
        <div className="type">{type}</div>
        <div className="tags">
          {tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectBox
