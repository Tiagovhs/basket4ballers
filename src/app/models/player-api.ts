export interface TeamAPI {
  id: number;
  city: string;
  name: string;
  fullName: string;
  abbreviation: string;
  conference: string;
  division: string;
}

export interface PlayerAPI {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  height: string;
  weight: string;
  jerseyNumber: string;
  college: string;
  country: string;
  draftYear: number;
  draftRound: number;
  draftNumber: number;
  imageUrl: string | null;
  nbaId: number;
  isActive: boolean;
  team: TeamAPI;
}

export interface CareerStats {
  id: number;
  season: string;
  team: string;
  gamesPlayed: number;
  minutes: string;
  pts: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  fgPct: number;
  fg3Pct: number;
  ftPct: number;
}
