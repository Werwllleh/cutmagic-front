import React from 'react';
import services from '../../../data/services.json';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Услуги | Парикмахерская Волшебные Ножницы",
    description: "Волшебные Ножницы - парикмахерская премиум-класса. Профессиональные стрижки, модное окрашивание, укладки любой сложности. Используем только качественные материалы и современное оборудование",
    keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер",
};

const Page = () => {

    const data = services;

    // Найти категорию "Мужские стрижки"
    const mensCategory = data.services.find(cat => cat.category === "Мужские стрижки");
    // Получить все услуги
    const mensServices = mensCategory ? mensCategory.items : [];

    console.log(mensServices);

    return (
        <div className="page services">
            services
        </div>
    );
};

export default Page;
