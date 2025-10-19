import React, {useEffect, useState} from 'react';
import SvgIcon from "@/components/svg-icon";
import {normalizePhone} from "@/utils";
import {useContent} from "@/hooks/useContent";
import {ContactTypeObject} from "@/types";

const MainContacts = () => {

  const {data: companyData, isLoading, isError} = useContent('globals', 'about-company');

  const [companyInfo, setCompanyInfo] = useState<{
    phone?: ContactTypeObject
    address?: ContactTypeObject
    timing?: ContactTypeObject
  }>({})

  useEffect(() => {

    if (companyData && !isLoading && !isError) {
      setCompanyInfo({
        phone: companyData?.contactType.find((i: ContactTypeObject) => i.type === 'phone'),
        address: companyData?.contactType.find((i: ContactTypeObject) => i.type === 'address'),
        timing: companyData?.contactType.find((i: ContactTypeObject) => i.type === 'timing'),
      })
    }

  }, [companyData, isLoading, isError]);

  return (
    <section className="main-contacts">
      <div className="main-contacts__container container">
        <ul className="main-contacts__list">
          <li className="main-contacts__item phone">
                    <span className="main-contacts__item--icon">
                        <SvgIcon name={"phone2"}/>
                    </span>
            <div className="main-contacts__item--info">
              <p className="main-contacts__item--text">
                {companyInfo.phone?.value}
              </p>
              <p className="main-contacts__item--description">
                {companyInfo.phone?.description}
              </p>
            </div>
            {companyInfo.phone?.value && (
              <a aria-label="парикмахерская телефон" href={`tel:${normalizePhone(companyInfo.phone?.value)}`}
                 className="main-contacts__item--link"/>
            )}
          </li>
          <li className="main-contacts__item location">
                    <span className="main-contacts__item--icon">
                        <SvgIcon name={"location"}/>
                    </span>
            {companyInfo.address?.value && (
              <>
                <div className="main-contacts__item--info">
                  <p className="main-contacts__item--text"
                     dangerouslySetInnerHTML={{__html: companyInfo.address?.value}}/>
                  <p className="main-contacts__item--description">
                    Вход со стороны заднего фасада
                  </p>
                </div>
                {companyInfo.address?.link && (
                  <a href={companyInfo.address?.link} target={"_blank"} className="main-contacts__item--link"/>
                )}
              </>
            )}
          </li>
          <li className="main-contacts__item timing">
            <span className="main-contacts__item--icon">
                <SvgIcon name={"clock"}/>
            </span>
            {companyInfo.timing?.value && (
              <div className="main-contacts__item--info">
                <p className="main-contacts__item--text">
                  {companyInfo.timing?.value}
                </p>
                <p className="main-contacts__item--description">
                  {companyInfo.timing?.description}
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainContacts;
