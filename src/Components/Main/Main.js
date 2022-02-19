import React from 'react';
import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { Dropdown, Spinner } from 'react-bootstrap';
import useMainhooks from '../hooks/useMainhooks';

const Main = (props) => {
    const toggle = props.toggle;
    const { news, setUrl, setNews, loading } = useMainhooks();
    const [range, setRange] = useState(0);
    const [limit, setLimit] = useState(5);
    const [pagination, setPagination] = useState(0);
    const [show, setShow] = useState(false);

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
        if(range > limit-1){
            setRange(range-limit);
            setPagination(range/5);
        }
    }

    const increaseRight = () => {
        if(range < news.length-limit){
            setRange(range+limit);
            setPagination(range/5);
        }
    }

    const handleModal = e => {
        if(show){
            setShow(false)
        } else{
            setShow(true)
        }
    }

    console.log(news)

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
                    const row = (<NewsCard handleModal={handleModal} toggle={toggle} key={i} handleDelete={handleDelete} news={singleNews} />);
                    result.push(row);
                    }
                    return result;
                }, [])
            }
        </div>
        <div className="pagination">
            <FontAwesomeIcon className={pagination>0?'':'pagination_icon_false'} onClick={increaseLeft} icon={faAngleLeft} />
            <span  className={pagination>0?'dot':'pagination_icon_false'}>{parseInt(pagination-1)}</span>
            <span class="dot big_dot">{parseInt(pagination)}</span>
            <span class="dot">{parseInt(pagination+1)}</span>
            <FontAwesomeIcon onClick={increaseRight} icon={faAngleRight} />
        </div>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={handleModal}
                centered
                >
                <iframe className="ifrm_style" title="News Opened" src="https://www.bd-pratidin.com/" frameborder="1"></iframe>
            </Modal>
        </main>
    );
};

export default Main;