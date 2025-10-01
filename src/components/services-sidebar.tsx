"use client";

import React from 'react';
import services from "../../data/services.json";
import Link from "next/link";
import {usePathname} from "next/navigation";

const ServicesSidebar = () => {

  const pathname = usePathname();

  return (
    <div className="services-sidebar">
      <div className="services-sidebar__body">
        {services.detail_pages.length ? (
          <ul className="services-sidebar__list">
            {services.detail_pages.map((page) => (
              <li className="services-sidebar__item" key={page.key}>
                <Link className={`services-sidebar__link anim-underline ${pathname.includes(page.link) ? 'active' : ''}`} href={`/services${page.link}`}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default ServicesSidebar;
