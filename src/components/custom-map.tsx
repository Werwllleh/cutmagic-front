"use client";

import {MAP_PLACE, MAP_PLACE_MARKER} from "@/consts";
import {YMap} from "@yandex/ymaps3-types/imperative/YMap";
import {useRef} from "react";
import {useMap} from "@/providers/map-provider";
import Link from "next/link";
import Loader from "@/components/loader";


const CustomMap = () => {

  const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);

  const {reactifyApi} = useMap();

  if (!reactifyApi) return <Loader />;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
  } = reactifyApi;

  return (
    <YMap location={MAP_PLACE} ref={mapRef}>
      <YMapDefaultSchemeLayer/>
      <YMapDefaultFeaturesLayer/>
      <YMapMarker
        coordinates={MAP_PLACE_MARKER}
        draggable={false}
      >
        <Link
          target="_blank"
          href={"https://yandex.ru/maps/45/cheboksary/?ll=47.209502%2C56.114489&mode=poi&poi%5Bpoint%5D=47.208569%2C56.114585&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D151100985099&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=18.83"}
          className="map-marker"
        >
          <img src="/images/marker.png" alt="map marker"/>
        </Link>
      </YMapMarker>
    </YMap>
  );
};

export default CustomMap;