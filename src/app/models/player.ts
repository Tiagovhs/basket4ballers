import { Team } from "./team";

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  poste: string;
  number: number;
  img: string;
  team: Team;
  draftYear: number;
  draftPick: number;
  allTeams: string[];
  quote: string;
  stats: { ppg: number; rpg: number; apg: number; fgp: number };
  sneakerIds: number[];
}
