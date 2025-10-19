import React, {ReactNode} from 'react';
import {Modal} from "antd";

interface customModalProps {
    isOpen: boolean;
    onCancel: () => void;
    className?: string;
    children: ReactNode;
}

const CustomModal = ({children, isOpen, onCancel, className}: customModalProps) => {
    return (
        <Modal footer={null} open={isOpen} onCancel={onCancel} className={className}>
            {children}
        </Modal>
    );
};

export default CustomModal;
