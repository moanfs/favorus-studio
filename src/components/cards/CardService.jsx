import PropTypes from 'prop-types';
import Button from '../buttons/Button';

const CardService = ({number, title, content, aos, placement}) => {
    return(
    <div className="card-service col-10 col-lg" data-aos={aos} data-aos-anchor-placement={placement}>
        <h1 className="service-head">{number} <span className="fs-5">{title}</span></h1>
        <p>{content}</p>
        <Button position="center" >Read More</Button>
    </div>
    )
};

CardService.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default CardService;
