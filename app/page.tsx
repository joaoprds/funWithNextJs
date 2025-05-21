import { count } from 'console';
import { Card, Header, Footer, Grid } from './Components'

const countries = [
  {
    id: "1",
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    population: 213993437
  },
  {
    id: "2",
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: 38005238
  },
  {
    id: "3",
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: 83240525
  },
  {
    id: "4",
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: 125960000
  },
  {
    id: "5",
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: 25687041
  },
  {
    id: "6",
    country: "South Africa",
    capital: "Pretoria",
    region: "Africa",
    population: 59308690
  },
  {
    id: "7",
    country: "India",
    capital: "New Delhi",
    region: "Asia",
    population: 1407563842
  },
  {
    id: "8",
    country: "France",
    capital: "Paris",
    region: "Europe",
    population: 67848156
  }
];


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(({ id, country, capital, region, population }) => (
            <Card
              key={id}
              country={country}
              capital={capital}
              region={region}
              population={population} />
          ))}
        </Grid>

      </main>
      <Footer />
    </>
  );
}
