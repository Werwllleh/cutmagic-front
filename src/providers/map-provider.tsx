import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Script from "next/script";
import { ReactifiedModule } from "@yandex/ymaps3-types/reactify";

export type ReactifyApi = ReactifiedModule<typeof import("@yandex/ymaps3-types")>;

type MountedMapsContextValue = {
  reactifyApi: ReactifyApi | null;
};

export const MountedMapsContext = createContext<MountedMapsContextValue>({
  reactifyApi: null,
});

declare global {
  interface Window {
    ymaps3: typeof import("@yandex/ymaps3-types");
  }
}

export const MapProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
  const [reactifyApi, setReactifyApi] = useState<ReactifyApi | null>(null);

  const contextValue = useMemo(() => ({ reactifyApi }), [reactifyApi]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ymaps3) {
      initializeReactify(window.ymaps3);
    }
  }, []);

  const initializeReactify = async (ymaps3Instance: typeof window.ymaps3) => {

    const [ymaps3React, controlsModule] = await Promise.all([
      ymaps3Instance.import("@yandex/ymaps3-reactify"),
      ymaps3Instance.import("@yandex/ymaps3-controls@0.0.1"),
      ymaps3Instance.ready,
    ]);

    const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
    const coreComponents = reactify.module(window.ymaps3);

    const controlsComponents = reactify.module(controlsModule);

    const fullApi = {
      ...coreComponents,
      ...controlsComponents,
    };

    setReactifyApi(fullApi);
  };

  return (
    <MountedMapsContext.Provider value={contextValue}>
      <Script
        src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YKEY}&lang=ru_RU`}
        onLoad={() => {
          if (window.ymaps3) {
            initializeReactify(window.ymaps3);
          }
        }}
      />
      {props.children}
    </MountedMapsContext.Provider>
  );
};

export const useMap = () => useContext(MountedMapsContext);