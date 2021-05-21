import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { closeTask8Modal } from  '../reducers/task8-modal.js';

import Task8ModalComponent from '../components/task8-modal/task8-modal.jsx'
import { bindAll } from 'lodash';
import { bind } from 'core-js/core/function';

class Task8Modal extends React.Component {

    constructor(props) {
        super(props)
        this.handleOnCancel = this.handleOnCancel.bind(this)
    }

    handleOnCancel(){
        this.props.onCancel();
    }

    render () {
        return (
            <Task8ModalComponent
                onCancel={this.handleOnCancel}
            />
        );
    }
}

Task8Modal.propTypes = {
    onCancel: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return{
    onCancel: () => dispatch(closeTask8Modal())
    };
};

export default connect(null,mapDispatchToProps)(Task8Modal);
