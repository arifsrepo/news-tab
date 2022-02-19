import { useEffect, useState } from "react";

const useMainhooks = () => {
    const [news, setNews] = useState([]);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
    const [loading, setLoading] = useState(true);
    const [toggleFeedback, setToggleFeedback] = useState(false);
    const [pagination, setPagination] = useState(0);
    const [range, setRange] = useState(0);

    useEffect(()=>{
        setLoading(true)
        setPagination(0)
        setRange(0)
        fetch(url)
        .then(res => res.json())
        .then(news => {
            setNews(news)
            setLoading(false)
        })
    },[url])

    return{
        news,
        setUrl,
        setNews,
        range,
        setRange,
        loading,
        pagination,
        setLoading,
        setPagination,
        toggleFeedback,
        setToggleFeedback,
    }
}

export default useMainhooks;