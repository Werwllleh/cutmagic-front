import React, {ReactNode} from 'react';
import {Modal} from "antd";

interface customModalProps {
    isOpen: boolean;
    onCancel: () => void;
    children: ReactNode;
}

const CustomModal = ({children, isOpen, onCancel}: customModalProps) => {
    return (
        <Modal footer={null} open={isOpen} onCancel={onCancel}>
            {children}
        </Modal>
    );
};

export default CustomModal;
