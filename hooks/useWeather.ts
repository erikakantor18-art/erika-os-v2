"use client";

import { useEffect, useState } from "react";

type Weather = {
  temp: number;
  city: string;
  description: string;
  icon: string;
};

export default function useWeather() {

  const [weather, setWeather] =
    useState<Weather | null>(null);

  useEffect(() => {

    async function loadWeather() {

      try {

        const apiKey =
          process.env
            .NEXT_PUBLIC_OPENWEATHER_API_KEY;

        if (!apiKey) {

          console.error(
            "OpenWeather API Key belum diisi."
          );

          return;

        }

        const response =
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Medan&units=metric&appid=${apiKey}`
          );

        if (!response.ok) {

          throw new Error(
            "Gagal mengambil data cuaca"
          );

        }

        const data =
          await response.json();

        setWeather({

          temp: Math.round(
            data.main.temp
          ),

          city: data.name,

          description:
            data.weather[0].description,

          icon:
            data.weather[0].icon,

        });

      } catch (error) {

        console.error(
          "Weather Error:",
          error
        );

      }

    }

    loadWeather();

    const interval =
      setInterval(
        loadWeather,
        600000
      ); // refresh setiap 10 menit

    return () =>
      clearInterval(interval);

  }, []);

  return weather;

}