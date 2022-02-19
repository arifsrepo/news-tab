import React from 'react';
import './NewsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

const NewsCard = (props) => {
    const toggle = props.toggle;
    const handleDelete = props.handleDelete;
    const handleModal = props.handleModal;
    return (
        <div className={toggle?'news_card_card':'news_card_list'}>
            <div onClick={handleModal} className={toggle?'':'fleser'}>
                <div className={toggle?'news_card_card_img':'news_card_list_img'}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <div className={toggle?'news_card_msg':'news_card_list_text'}>
                    <p>{props.news.id}</p>
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
    );
};

export default NewsCard;