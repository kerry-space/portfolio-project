import React from 'react'
import "./styles.scss";

const ProjectCard = ({project}) => {
  return (
    <div className= "project">
        
        <div>
            <img alt='project' src={project.image} />
        </div>
        
        <div>
            <h1 className="project__h1"><a href={project.projectLink}>{project.projectName}</a></h1>
           
        </div>
      
    </div>
  )
}

export default ProjectCard
