import PropTypes from 'prop-types';

const CardService = ({number, title, content}) => {
    return(
    <div className="card-service col-10 col-lg">
        <h1 className="service-head">{number} <span className="fs-5">{title}</span></h1>
        <p>{content}</p>
    </div>
    )
};

CardService.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default CardService;
