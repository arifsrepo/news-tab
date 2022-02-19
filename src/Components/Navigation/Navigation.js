import React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faList, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import useMainhooks from '../hooks/useMainhooks';

const Navigation = (props) => {
    const { toggleFeedback, setToggleFeedback } = useMainhooks()
    const toggle = props.toggle;
    const setToggle = props.setToggle;

    const handleToggle = () => {
        if(toggle){
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    const handleFeedback = () => {
        if(toggleFeedback){
            setToggleFeedback(false)
        } else {
            setToggleFeedback(true)
        }
    }

    return (
        <nav className={toggleFeedback?'nav_main':'nav_main nav_shadow'}>
            <div className={toggleFeedback?'feedback_nav':'nav'}>
                <div className="nav_item">
                    <div className="hi_reader">
                        <div className="hi_reader_icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <div className="hi_reader_text">
                            <h6>Hi Reader</h6>
                            <p className="">Here is your news</p>
                        </div>
                    </div>
                </div>
                <div className={toggleFeedback?'dhidden':'nav_item nav_item_padding'}>
                    <h5>View Toggle</h5>
                    <div onClick={handleToggle} className="toggle_button">
                        <div className={toggle?'toggle_button_sub toggle_button_sub_on':'toggle_button_sub toggle_button_sub_off'}>
                            <FontAwesomeIcon icon={faRectangleList} />
                        </div>
                        <div className={toggle?'toggle_button_sub toggle_button_sub_off':'toggle_button_sub toggle_button_sub_on'}>
                            <FontAwesomeIcon icon={faList} />
                        </div>
                    </div>
                </div>
                <div className="nav_item nav_item_padding">
                    <h5>Have A Feedback?</h5>
                    <div onClick={handleFeedback} className={toggleFeedback?'feedback_section feedback_section_red':'feedback_section'}><b>We're Listening</b></div>
                </div>
            </div>
            <div className={toggleFeedback?'feedback_holder_active nav_shadow':'feedback_holder'}>
                <FeedbackForm></FeedbackForm>
            </div>
        </nav>
    );
};

export default Navigation;