import React from 'react';
import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Main = (props) => {
    const toggle = props.toggle;
    const { news, setUrl, setNews, loading, pagination, setPagination, range, setRange, newsPaper } = useAuth();
    const [limit, setLimit] = useState(5);

    const handleDelete = (idvalue) => {
        const newArrey = [...news]
        newArrey.splice(newArrey.findIndex(e => e.id === idvalue),1);
        setNews(newArrey);
    }

    const handleDropDown = e => {
        if(e === 'url1'){
            setUrl('https://jsonplaceholder.typicode.com/posts')
        }else{
            setUrl('https://mocki.io/v1/9f853b41-dc7d-4a90-ac45-a3a65103ce72')
        }
    }

    if(toggle && limit === 5){
        setLimit(6);
    } else if(!toggle &&limit !== 5){
        setLimit(5)
    }

    const increaseLeft = () => {
        const newRange = range-limit;
        setRange(newRange);
        setPagination(pagination-1);
    }

    const increaseRight = () => {
        if(range < news.length-limit){
            setPagination(pagination + 1)
            setRange(range + limit)
        }
    }

    if(loading){
        return(
            <main className="main_div">
                <div className="spiner_holder">
                    <Spinner animation="border" variant="success" />
                </div>
            </main>
        )
    }
    
    return (
        <main className="main_div">
            <div className="dropdown_div">
                <Dropdown onSelect={handleDropDown}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Change Newsfeed
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="url1">Channel 1</Dropdown.Item>
                        <Dropdown.Item eventKey="url2">Channel 2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        <div className={toggle?'card_holder_card':'card_holder_list'}>
            {
                news.reduce((result, singleNews, i) => {
                    if (i >= range && i <= range + limit-1) { 
                    const row = (<NewsCard toggle={toggle} key={i} handleDelete={handleDelete} news={singleNews} />);
                    result.push(row);
                    }
                    return result;
                }, [])
            }
        </div>
        <div className="pagination">
            <FontAwesomeIcon className={pagination>0?'':'pagination_icon_false'} onClick={increaseLeft} icon={faAngleLeft} />
            <span className={pagination>0?'dot':'pagination_icon_false'}>{parseInt(pagination-1)}</span>
            <span className="dot big_dot">{parseInt(pagination)}</span>
            <span className="dot">{parseInt(pagination+1)}</span>
            <FontAwesomeIcon className={pagination===news?.length-limit?'pagination_icon_false':''} onClick={increaseRight} icon={faAngleRight} />
        </div>
        </main>
    );
};

export default Main;