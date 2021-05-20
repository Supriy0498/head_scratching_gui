import Modal from '../../containers/modal.jsx';
import ReactModal from 'react-modal';
import styles from './task8-modal.css';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box.jsx';
import {connect} from 'react-redux';
import { closeTask8Modal } from  '../../reducers/modals.js';

const Task8Modal = props => (
    <Modal
        className={styles.modalContent}
        contentLabel="Task8Modal label"
        onRequestClose={props.onCancel}
        id="task8Modal"
    >
        <Box>
            <input
                className={styles.minInput}
                name="account"
                placeholder="account"
                type="text"
            /><br />
            <input
                className={styles.minInput}
                name="password"
                                placeholder="password"
                type="password"
            /><br />
        </Box>
    </Modal>
);

Task8Modal.propTypes = {
    onBack: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
    return{
    onCancel: () => dispatch(closeTask8Modal())
    };
};

export default connect(null,mapDispatchToProps)(Task8Modal);
//export default Task8Modal;