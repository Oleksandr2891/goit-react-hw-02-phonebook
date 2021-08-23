import css from './Notification.module.css'
import PropTypes from 'prop-types';

const Notification = ({ message, total }) => {
    return (
        <>
            {total === 0 && <h2 className={css.message}>{message}</h2>}
        </>
    );

}

export default Notification;

Notification.propTypes = {

    total: PropTypes.number,
    message: PropTypes.string,
}