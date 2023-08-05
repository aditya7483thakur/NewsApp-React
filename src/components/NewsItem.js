import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt,source} = this.props
    return (
      <div className="my-3" >
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <span className="top-0 badge rounded-pill bg-danger" style={{display : 'flex',position : 'absolute', justifyContent:'flex-end',right : '0'}}>{source}</span>
            <p className="card-text"><small className="text-body-secondary">By {author? author : "unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
