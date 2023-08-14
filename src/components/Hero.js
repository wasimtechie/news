import React, { useEffect, useState } from 'react'
import jade from '../assets/jade.png'
import axios from 'axios'

const Hero = () => {
    const [newsData, setNewsData] = useState([]);
    const apiKey = "58b04b4b55484fbe93d92c221bc20fe2";
    const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
    const [displayedPosts, setDisplayedPosts] = useState(12);
  
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
  return (
    <div className='container'>
        <div className=' bg-light p-5 text-center' >
            <div className='text-dark' style={{lineHeight:'50px'}}>

                <h4 className='fw-lighter fs-5' style={{lineHeight:'50px', letterSpacing:'5px'}}>WELCOME TO BULETIN</h4>
                <h2 style={{lineHeight:'60px'}}>Craft narratives ✍🏻 that ignite inspiration 💡,<br/> knowledge 📕, and entertainment 🎬</h2>
            </div>
        </div>
        <div className='mt-5'>    
        {newsData.slice(0, 1).map((article, index) => (
            // Only render the article if urlToImage is present
            article.urlToImage && (
            <div className='row ' key={index}>
                <div className='col-md'>
                    <img loading="lazy" style={{height:'380px', width:'100%', borderRadius:'15px'}} src={article.urlToImage}/>
                </div>
                <div className='col-md'>
                        <div className='row row-cols-auto pt-3'>
                            <div className='col'>
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
                            <h1 className='article-title'>{article.title}</h1>
                        </div>
                        <div className='row pt-3'>
                            <p>{article.description}</p>
                        </div>
                        <div className='row row-cols-auto pt-4'>
                            <div className='col text-danger'>Movies</div>
                            <div className='col' style={{margin:'-5px'}}><b><b>.</b></b></div>
                            <div className='col'>4 mins read</div>
                        </div>
                </div>
            </div>
            )
            ))}
        </div>
    </div>

  )
}

export default Hero