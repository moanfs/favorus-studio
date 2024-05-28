import PropTypes from 'prop-types';
import React from 'react';

const AccordionItem = ({ children, targetId }) => {
    return(
        <div className="accordion-item">
             {React.Children.map(children, child => 
                React.cloneElement(child, { targetId })
            )}
        </div> 
    )
}

AccordionItem.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AccordionItem

