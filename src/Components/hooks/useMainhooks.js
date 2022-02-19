import { useEffect, useState } from "react";

const useMainhooks = () => {
    const [news, setNews] = useState([]);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
    const [loading, setLoading] = useState(true);
    const [toggleFeedback, setToggleFeedback] = useState(false);

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(news => {
            setNews(news)
            // news?.articles?setNews(news.articles):setNews(news)
            setLoading(false)
        })
    },[url])

    return{
        news,
        setUrl,
        setNews,
        loading,
        setLoading,
        toggleFeedback,
        setToggleFeedback,
    }
}

export default useMainhooks;