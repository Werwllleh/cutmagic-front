import React from 'react';

const MainBeautyPlace = () => {
    return (
        <div className="main-beauty-place">
            <div className="container">
                <div className="main-beauty-place__grid">
                    <div className="main-beauty-place__image">
                        <img src="/images/women-hair.webp" alt=""/>
                    </div>
                    <div className="main-beauty-place__info">
                        <h3 className="main-beauty-place__info--title h3">
                            Ваше место для&nbsp;красоты
                        </h3>
                        <p className="main-beauty-place__info--description">
                            Парикмахерская <span>Волшебные ножницы</span> — это место, где оживают образы и рождаются улыбки. Здесь создаются яркие цвета, воздушные локоны и безупречные стрижки — с любовью и вниманием к каждой детали. Это дружная семья мастеров, которые встретят вас с теплом, выслушают, поймут — и сделают всё, чтобы вы вышли отсюда ещё красивее, увереннее и светлее.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBeautyPlace;
