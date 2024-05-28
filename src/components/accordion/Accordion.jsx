import PropTypes from 'prop-types';

const Accordion = ({children, accoType, accorId}) => {
    const accordionType = `${accoType}`;
    const accordionId = accorId === 'accordionFlushExample' ? 'accordionFlushExample' : `${accorId}`;
    return(
    <div className={`accordion ${accordionType}`} id={`${accordionId}`}>
        {children}
    </div>
    )
}

Accordion.propTypes = {
    accorId: PropTypes.isRequired, 
}
export default Accordion