import PropTypes from 'prop-types';

const AccordionContent = ({targetId, children}) =>{
    return (
        <div
        id={targetId}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
        >
            <div className="accordion-body">{children}</div>
        </div>
    );
}

AccordionContent.propTypes = {
    targetId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
export default AccordionContent