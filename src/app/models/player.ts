import { Team } from "./team";

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  poste: string;
  number: number | null;
  img: string;
  team: Team;
  draftYear: number | null;
  draftRound: number | null;
  draftPick: number | null;
  undrafted: boolean;
  college: string | null;
  allTeams: string[];
  quote: string;
  stats: { ppg: number; rpg: number; apg: number; fgp: number };
  sneakerIds: number[];
}
