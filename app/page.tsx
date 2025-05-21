'use client';

import { useEffect, useState } from 'react';
import { Card, Header, Footer, Grid } from './Components'

type Country = {
  cca3: string;
  flags: {
    svg: string;
  },
  name: {
    common: string;
  },
  capital: string[];
  region: string;
  population: number;
}



export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=cca3,flags,name,capital,region,population');
        const data = await response.json();
        setCountries(data);

      } catch (error) {
        setError('Failed to fetch countries');
        console.error('Error fetching countries:', error);
      }finally{
        setLoading(false);
      }

    };
    fetchCountries();
  }, []);

  if(loading) return <div className="flex items-center justify-center h-screen">Loading...</div>
  if(error) return <div className="flex items-center justify-center h-screen">{error}</div>
  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(
            ({ cca3, flags, name, capital, region, population }, index) => {
              const { svg: flag } = flags ?? {};
              const { common: CountryName } = name ?? {};
              const capitalName = capital[0] ?? '';
              const regionName = region ?? '';
              const populationCount = population ?? 0;


              return (
                <Card
                  key={cca3}
                  index={index}
                  flag={flag}
                  name={CountryName}
                  capital={capitalName}
                  region={regionName}
                  population={populationCount}
                />
              )
            })}
        </Grid>

      </main>
      <Footer />
    </>
  );
}
