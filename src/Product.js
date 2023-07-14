import React from 'react'

const Product = ({ author, title, description, url, urlToImage }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>{description}</p>
      <a href={url}><h1>Read more</h1></a>
      <div>
        <img src={urlToImage} alt="News Image" />
      </div>
      
    </div>
  )
}

export default Product
