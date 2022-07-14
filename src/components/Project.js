import React from 'react';
import Tags from './Tags';

const Project = ({projects}) => {
  const renderContent = projects.map(({id, image, title, describe, tags, link, webLink}) => {
    return <div className='card' key={id}>
        <a href={link} className="card-img-link"><img src={image} className="card-img-top" alt={title} /></a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-tags">
            <Tags tags={tags} />
          </div>
          <div className="card-text" >
            <a href={link} className=""><i className="bi bi-github"></i>Github</a>
            <a href={webLink} className='web-view'>View</a>
          </div>
        </div>
    </div>
  })
  return(
    <div className='project row'>
      {renderContent}
    </div>
  )
}

export default Project;