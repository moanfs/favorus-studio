import PropTypes from 'prop-types';

const AccordionButton = ({targetId, buttonText}) =>{
    const Target = `#${targetId}`;
    return (
        <h2 className="accordion-header">
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={Target}
                aria-expanded="false"
                aria-controls={targetId}
            >
                {buttonText}
            </button>
        </h2>
    );
}

AccordionButton.propTypes = {
    targetId: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};
export default AccordionButton
