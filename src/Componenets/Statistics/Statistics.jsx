import css from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        total !== 0 && (
            <div className={css.wrapperCommon}>
                <div className={css.wrapperRigth}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                </div>
                <div className={css.wrapperLeft}>
                    <p className={css.posFeedback}>Positive feedback: {!percentage ? 0 : percentage}%</p>
                </div>
            </div>)
    );
}

export default Statistics;


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
}