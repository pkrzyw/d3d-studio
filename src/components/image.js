import React from "react"
import Img from "gatsby-image"

const Image = ({ image, title }) => {
  return (
    <div className="col-auto p-0 m-0">
      <Img
        className="shadow-lg opacity-75 filter-desaturate transition duration-500 ease-in-out hover:shadow-sm hover:opacity-100 hover:filter-saturate"
        fluid={image}
        alt={title}
      />
    </div>
  )
}

export default Image
