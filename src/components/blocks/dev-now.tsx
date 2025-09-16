import React from 'react';
import SvgIcon from "@/components/svg-icon";

const DevNow = () => {
  return (
    <div className="dev-block">
      <div className="container">
        <div className="dev-block__wrap">
          <div className="dev-block__info">
            <h2>Парикмахерская</h2>
            <h1>волшебные ножницы</h1>
          </div>
          <span className="dev-block__alarm">Сайт в разработке</span>
          <div className="dev-block__contacts">
            <span className="dev-block__contacts--item">
              <SvgIcon name={'vk'}/>
            </span>
            <span className="dev-block__contacts--item">

            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevNow;