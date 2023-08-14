import React, { useEffect, useState } from 'react'
import jade from '../assets/jade.png'
import axios from 'axios';

const SecondHero = () => {
    const [newsData, setNewsData] = useState([]);
  const apiKey = "58b04b4b55484fbe93d92c221bc20fe2";
  const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
  const [displayedPosts, setDisplayedPosts] = useState(12);
  const postsPerLoad = 12;

  useEffect(() => {
    // Fetch data from NewsAPI
    axios
      .get(apiUrl)
      .then((response) => {
        // Update the state with the fetched data
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
      console.log(newsData)
      
  }, [apiUrl]);

  const getFirstSixWords = (text) => {
    const words = text.split(" ");
    const firstSix = words.slice(0, 6);
    return firstSix.join(" ");
  };

  const getFirstelevenWords = (text) => {
    const words = text.split(" ");
    const firstSix = words.slice(0, 20);
    return firstSix.join(" ");
  };

  const handleShowMoreClick = () => {
    // Increment the number of displayed posts
    setDisplayedPosts((prevDisplayedPosts) => prevDisplayedPosts + postsPerLoad);
  };

  
  return (
    <div className='container'>
        <div className='pt-5 row flex align-items-center'>
            <div className='col-md'><h2>Latest News</h2></div>
            <div className='col-md d-flex text-danger justify-content-end'><h6>sell all  
            <svg style={{width:'37px', paddingLeft:'8px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                         </svg>
                         </h6>
            </div>
        </div>
        <div className='pt-4 row'>
                {newsData.slice(0, displayedPosts).map((article, index) => (
                    article.urlToImage && (
            <div className='pb-4 col-lg-3' key={index}>
                 <img loading="lazy" style={{width:'100%',height:'180px', borderRadius:'15px'}} src={article.urlToImage}/>
                <div className='row row-cols-auto pt-3'>
                    
                        <div className='col' >
                            <img loading="lazy" className='rounded-circle' style={{width:"30px", height:'30px'}} src={article.urlToImage}/>
                        </div>
                        <div className='col'>
                            {article.author}
                        </div>
                        <div className='col'>
                            {article.publishedAt}
                        </div>
                 </div>
                 <div className='row pt-3'>
                        <h3 className='article-title'>{getFirstSixWords(article.title)}</h3>
                    </div>
                    <div className='row pt-3'>
                        <p>{getFirstelevenWords(article.description)}</p>
                    </div>
                    <div className='row row-cols-auto pt-4'>
                        <div className='col text-danger'>Movies</div>
                        <div className='col' style={{margin:'-5px'}}><b><b>.</b></b></div>
                        <div className='col'>4 mins read</div>
                    </div>
            </div>
            ) ))}
            <div className='text-center'>
            {displayedPosts < newsData.length && (
        <button className='btn btn-danger' onClick={handleShowMoreClick}>Show More</button>
      )}
            </div>
         </div>
    </div>
  )
}

export default SecondHero