import React from 'react';

const MainBeautyPlace = () => {
    return (
        <div className="main-beauty-place">
            <div className="container">
                <div className="main-beauty-place__grid">
                    <div className="main-beauty-place__media">
                        <img src="/images/women-hair.webp" alt=""/>
                    </div>
                    <div className="main-beauty-place__info">
                        <h3 className="main-beauty-place__info--title h3">
                            Ваше место для&nbsp;красоты
                        </h3>
                        <p className="main-beauty-place__info--description">
                            Парикмахерская <span>&laquo;Волшебные Ножницы&raquo;</span> в&nbsp;Чебоксарах&nbsp;&mdash; это
                            место, где оживают образы и&nbsp;рождаются улыбки.
                            Наши мастера создают яркие цвета, воздушные локоны и&nbsp;безупречные
                            стрижки&nbsp;&mdash; с&nbsp;любовью, профессионализмом и&nbsp;вниманием к&nbsp;каждой
                            детали.
                            <br/>
                            Салон, где&nbsp;дружная команда парикмахеров встречает каждого гостя с&nbsp;теплом,
                            выслушивает пожелания и&nbsp;находит идеальное решение именно для вас.
                            <br/>
                            Приходите в&nbsp;парикмахерскую <span>&laquo;Волшебные Ножницы&raquo;</span>&nbsp;&mdash; и&nbsp;убедитесь,
                            почему нас выбирают жители Чебоксар и&nbsp;гости города. Вы&nbsp;выйдете отсюда
                            не&nbsp;только красивее, но&nbsp;и&nbsp;увереннее, светлее и&nbsp;с&nbsp;отличным
                            настроением!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBeautyPlace;
