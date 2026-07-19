export interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
  wikiText: string;
}

export const BRANDS: Brand[] = [
  {
    id: 1,
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    description: 'Just Do It. La marque la plus portée sur les parquets NBA.',
    wikiText: "Nike, fondé en 1964 par Phil Knight et Bill Bowerman, est le sponsor officiel de la NBA depuis 2017. Avec des signatures légendaires comme LeBron James, Kevin Durant et Jayson Tatum, Nike domine le marché du basketball. Ses innovations technologiques — Flyknit, React, Air Zoom — redéfinissent la performance sur les parquets depuis des décennies.",
  },
  {
    id: 2,
    name: 'Jordan Brand',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg',
    description: "L'héritage de Michael Jordan. Icône de la culture sneaker.",
    wikiText: "Jordan Brand, filiale de Nike fondée en 1997, est née du partenariat légendaire entre Nike et Michael Jordan en 1985. La Air Jordan 1 a révolutionné la culture sneaker. Aujourd'hui, la marque habille des stars NBA comme Luka Doncic, Zion Williamson et Russell Westbrook. Le Jumpman est l'un des logos les plus reconnus au monde.",
  },
  {
    id: 3,
    name: 'Adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
    description: 'Impossible is Nothing. Partenaire de nombreuses stars NBA.',
    wikiText: "Adidas Basketball est présent en NBA depuis des décennies. Partenaire officiel de la NBA de 2006 à 2017, la marque aux trois bandes habille James Harden, Donovan Mitchell et Trae Young. Ses technologies Boost et Lightstrike offrent des performances de pointe, tandis que les lignes signature restent des incontournables de la culture basket.",
  },
  {
    id: 4,
    name: 'Under Armour',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg',
    description: "Les chaussures de Stephen Curry. Performance et innovation.",
    wikiText: "Under Armour a signé Stephen Curry en 2013 dans ce qui est considéré comme l'un des contrats les plus rentables de l'histoire du sport. La ligne Curry est devenue un phénomène mondial. UA mise sur la technologie HOVR et des constructions ultra-légères pour s'imposer sur les parquets NBA.",
  },
  {
    id: 5,
    name: 'New Balance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/330px-New_Balance_logo.svg.png',
    description: 'Fearlessly independent. En montée rapide sur les parquets.',
    wikiText: "New Balance Basketball connaît une renaissance depuis la signature de Kawhi Leonard en 2018. La marque de Boston s'impose sur les parquets avec Shai Gilgeous-Alexander comme ambassadeur. La technologie FuelCell et le design épuré de la TWO WXY séduisent les joueurs en quête de performance et d'authenticité.",
  },
  {
    id: 6,
    name: 'Puma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Puma-logo-%28text%29.svg/960px-Puma-logo-%28text%29.svg.png',
    description: 'Forever Faster. Le retour en force sur le marché basketball.',
    wikiText: "Puma a fait son grand retour sur les parquets NBA en 2018 après 20 ans d'absence, en signant LaMelo Ball, RJ Barrett et Deandre Ayton. La marque au félin mise sur le style et l'innovation avec ses lignes Clyde Hardwood et Stewie. L'un des comebacks les plus marquants de l'histoire du basketball.",
  },
];
