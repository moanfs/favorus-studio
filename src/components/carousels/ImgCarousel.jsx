import PropTypes from 'prop-types';

const ImgCarousel = ({children, active}) =>{
    return(
        <div className={`carousel-item ${active}`}>
            {children}
        </div>
    )
}

ImgCarousel.propTypes = {
    image: PropTypes.string.isRequired,
};
export default ImgCarousel;