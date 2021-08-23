import css from './FeedbackOptions.module.css';
import ButtonListItem from "../ButtonListItem/ButtonListItem";

const FeedbackOptions = ({ nameButtons, onLeaveFeedback }) => {

    return (
        <ul className={css.list}>
            {nameButtons.map(item => <ButtonListItem name={item} key={item} onLeaveFeedback={onLeaveFeedback} />)}
        </ul>
    );
}

export default FeedbackOptions;