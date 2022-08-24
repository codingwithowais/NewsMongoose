import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
const[articles, setArticles] = useState([])
    const[page, setPage] = useState(1)
    const[totalItems, setTotalItems] = useState(0);
    const[loading,setLoading]=useState(true)
    



    const fetchData = async () => {
      
        
      
       

        const api = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        

        
        setPage(page + 1)


        let data = await fetch(api);
        let parsedData = await data.json();


     
        setArticles(articles.concat(parsedData.articles))
        setTotalItems(parsedData.totalResults);
        

       
       


    }
 const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
 
   




const newsUpdate = async () => {
    let api = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    props.onProgress(20);

    setLoading(true)

    let data = await fetch(api);
    props.onProgress(50);
    let parsedData = await data.json();
    props.onProgress(70);

    setArticles(parsedData.articles)
    setPage(page)
    
     setTotalItems(parsedData.totalResults);
     setLoading(false);
     


    props.onProgress(100);

}







useEffect(() => {
    document.title = `News Mongoose-${capitalize(props.category)}`;
    newsUpdate();
},[]

)




let colour = props.colour;


return (

    <div className='container my-3'>
        <h1 className='text-center' style={{ margin: '20px 0' }}>NewsMongoose-Top {capitalize(props.category)} Headlines</h1>
        {loading &&<Spinner />} 

        <div className="container">
            <div className="row">
                {articles.map((element) => {

                    return (

                        <div className="col-md-4" key={element.url}>
                          {!loading && <NewsItems title={element.title?element.title: ""} description={element.description?element.description:""} newsUrl={element.url} imgUrl={element.urlToImage} author={element.author} time={element.publishedAt} source={element.source.name} colour={props.colour} />}  

                        </div>
                    )
                })}
            
            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length !== totalItems}
                loader={<Spinner />}

            >
            </InfiniteScroll>
        </div>
    </div>
)
                }              

export default News;



News.defaultProps = {
    category: 'general',
    setpageSize: '6'
}
News.PropsTypes = {
    category: String,
    pageSize: Number
}