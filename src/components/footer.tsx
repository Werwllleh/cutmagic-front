"use client"
import React, {useEffect, useState} from 'react';
import {normalizePhone} from "@/utils";
import SvgIcon from "@/components/svg-icon";
import {useContent} from "@/hooks/useContent";
import {ContactTypeObject} from "@/types";

const Footer = () => {

  const {data: companyData, isLoading, isError} = useContent('globals', 'about-company');

  const [footerInfo, setFooterInfo] = useState<{
    phone?: ContactTypeObject
    timing?: ContactTypeObject
  }>({})

  useEffect(() => {
    setFooterInfo({
      phone: companyData?.contactType.find((i: ContactTypeObject) => i.type === 'phone'),
      timing: companyData?.contactType.find((i: ContactTypeObject) => i.type === 'timing'),
    })
  }, [companyData]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__logo"></div>
          <div className="footer__nav"></div>
          <div className="footer__info">
            {footerInfo.phone && Object.entries(footerInfo.phone) && (
              <div className="footer__info--value">
                <a aria-label="парикмахерская телефон" href={`tel:${normalizePhone(footerInfo.phone?.value)}`}>
                  <SvgIcon name={"phone2"}/>
                  {footerInfo.phone?.value}
                </a>
              </div>
            )}
            {footerInfo.timing && Object.entries(footerInfo.timing) && (
              <div className="footer__info--value">
                <span>
                    <SvgIcon name={"clock"}/>
                  {footerInfo.timing?.value}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
