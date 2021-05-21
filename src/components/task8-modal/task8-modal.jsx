import Modal from '../../containers/modal.jsx';
import styles from './task8-modal.css';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box.jsx';
import Button from '../button/button.jsx';
import classNames from 'classnames';

const Task8Modal = ({
    className,
    ...props})  => (
    <Modal
        className={styles.modalContent}
        contentLabel="Task8Modal Title"
        onRequestClose={props.onCancel}
        id="task8Modal"
    >
        <Box>
            <div className="task8-content"> This is Task8 Modal Content. This is an auto-opening and auto-closing modal</div>
            <Button
            className={classNames(
                className,
                styles.task8OkButton,
            )}
            >Ok</Button>
            <Button
            className={classNames(
                className,
                styles.task8CloseButton,
            )}
            >Close</Button>
        </Box>
    </Modal>
);

Task8Modal.propTypes = {
    onCancel: PropTypes.func.isRequired,
};

export default Task8Modal;