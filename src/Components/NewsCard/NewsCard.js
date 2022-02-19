import React, { useState } from 'react';
import './NewsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import useMainhooks from '../hooks/useMainhooks';
import { Modal } from 'react-bootstrap';

const NewsCard = (props) => {
    const [show, setShow] = useState(false);
    const toggle = props.toggle;
    const handleDelete = props.handleDelete;
    
    const handleModal = e => {
        if(show){
            setShow(false)
        } else{
            setShow(true)
        }
    }
    return (
        <>
        <div className={toggle?'news_card_card':'news_card_list'}>
            <div onClick={handleModal} className={toggle?'':'fleser'}>
                <div className={toggle?'news_card_card_img':'news_card_list_img'}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <div className={toggle?'news_card_msg':'news_card_list_text'}>
                    <h6 className="news_msg">{props.news.title}</h6>
                    <p className="news_msg">{props.news.content?props.news.content:props.news.body}</p>
                    <p>{props.news.publishedAt?props.news.publishedAt:'Time '}</p>
                </div>
                <div className={toggle?'card_img':'card_img_list_view'}>
                    <img className="img-fluid" src={props.news.urlToImage?props.news.urlToImage:''} alt="" />
                </div>
            </div>
            <div className={toggle?'news_card_card_delete':'news_card_list_delete'}>
                <div onClick={()=> handleDelete(props.news.id)} className={toggle?'delete_dot_card':'delete_dot'}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </div>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={handleModal}
                centered
                >
                <iframe className="ifrm_style" src={props?.news?.url} title="News Opened" frameborder="1"></iframe>
            </Modal>
        </>
    );
};

export default NewsCard;