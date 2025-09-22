import React, {useState} from 'react';
import {normalizePhone, ymReach} from "@/utils";
import {BUTTON_SIZE, BUTTON_TYPE, PHONE, TELEGRAM_LINK, WHATSAPP_LINK} from "@/consts";
import SvgIcon from "@/components/svg-icon";
import CustomModal from "@/components/custom-modal";
import Button from "@/components/button";

const ButtonRecord = ({cls, text}: { text: string, cls?: string }) => {

    const [modalRecordIsOpen, setModalRecordIsOpen] = useState(false);

    const openModalRecord = () => {
        ymReach('header-button')
        setModalRecordIsOpen(true)
    }

    return (
        <>
            <Button
                cls={cls}
                type={BUTTON_TYPE.PRIMARY}
                size={BUTTON_SIZE.LARGE}
                onClick={openModalRecord}
            >{text}
            </Button>
            <CustomModal isOpen={modalRecordIsOpen} onCancel={() => setModalRecordIsOpen(false)}>
                <div className="dev-block__contacts">
                    <p className="dev-block__contacts--text">Контакты для записи</p>
                    <ul className="dev-block__contacts--list">
                        <li className="dev-block__contacts--item">
                            <a title="Позвонить"
                               href={`tel:${normalizePhone(PHONE)}`}
                            >
                                <SvgIcon name={'phone'}/>
                            </a>
                        </li>
                        <li className="dev-block__contacts--item">
                            <a title="Написать в whatsapp"
                               href={WHATSAPP_LINK}
                               target="_blank"
                            >
                                <SvgIcon name={'whatsapp'}/>
                            </a>
                        </li>
                        <li className="dev-block__contacts--item">
                            <a title="Написать в telegram"
                               href={TELEGRAM_LINK}
                               target="_blank"
                            >
                                <SvgIcon name={'telegram'}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </CustomModal>
        </>
    );
};

export default ButtonRecord;
