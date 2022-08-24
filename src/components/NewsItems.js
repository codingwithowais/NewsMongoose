import React from 'react'






const NewsItems = (props)=>  {
  
    

    // Adding media query..
 
 





    let { title, description, imgUrl, newsUrl, author, time, source, colour } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={
            {display:'flex',position:'absolute',  justifyContent:'center',left:'40px' }
          }>
        <span className={`translate-middle badge rounded-pill bg-${colour}`} >
 
            {source}  
    
  </span>

          </div>
          <img src={imgUrl ? imgUrl : imgUrl = "https://images.hindustantimes.com/img/2022/06/10/1600x900/b1258ede-ddea-11ec-8839-d8f781242971_1653677316070_1654875109452.jpg"} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} at {new Date(time).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" >Read More</a>


      
          </div>
        </div>
      </div>

    )
  
}
export default NewsItems

