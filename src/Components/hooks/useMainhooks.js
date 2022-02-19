import { useEffect, useState } from "react";

const useMainhooks = () => {
    const [news, setNews] = useState([]);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
    const [loading, setLoading] = useState(true);
    const [toggleFeedback, setToggleFeedback] = useState(false);
    const [pagination, setPagination] = useState(0);
    const [range, setRange] = useState(0);
    const [newsPaper, setNewsPaper] = useState('https://abcnews.go.com/');
    const [showRatings, setShowRatings] = useState(false);

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
        newsPaper,
        setNewsPaper,
        setRange,
        loading,
        pagination,
        setLoading,
        showRatings,
        setShowRatings,
        setPagination,
        toggleFeedback,
        setToggleFeedback
    }
}

export default useMainhooks;