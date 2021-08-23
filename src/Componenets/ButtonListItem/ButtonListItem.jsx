import css from './ButtonListItem.module.css'
import PropTypes from 'prop-types';


const ButtonListItem = ({ name, onLeaveFeedback }) => {
    return (
        <li className={css.listItem}>
            <button className={css.button} type="button" name={name} onClick={() => onLeaveFeedback(name)}>{name}</button>
        </li>
    );
}

export default ButtonListItem;


ButtonListItem.propTypes = {
    name: PropTypes.string,
    onLeaveFeedback: PropTypes.func,
}
