import React from 'react';
import PropTypes from 'prop-types';

import Task8ModalComponent from '../components/task8-modal/task8-modal.jsx'

class Task8Modal extends React.Component {
    handleCancel () {
        window.history.back();
    }
    render () {
        return (
            <Task8ModalComponent
                onBack={this.handleCancel}
            />
        );
    }
}

// Task8Modal.propTypes = {
//     isRtl: PropTypes.bool
// };

export default Task8Modal;
