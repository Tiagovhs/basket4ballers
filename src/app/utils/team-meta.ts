interface TeamMeta {
  color: string;
  logoUrl: string;
  conference: 'East' | 'West';
}

const TEAM_META: Record<string, TeamMeta> = {
  LAL: { color: '#552583', logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg', conference: 'West' },
  MEM: { color: '#5D76A9', logoUrl: 'https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg', conference: 'West' },
  GSW: { color: '#1D428A', logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg', conference: 'West' },
  MIL: { color: '#00471B', logoUrl: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg', conference: 'East' },
  PHX: { color: '#1D1160', logoUrl: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg', conference: 'West' },
  POR: { color: '#E03A3E', logoUrl: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg', conference: 'West' },
  PHI: { color: '#006BB6', logoUrl: 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg', conference: 'East' },
  DEN: { color: '#0E2240', logoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg', conference: 'West' },
  BOS: { color: '#007A33', logoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg', conference: 'East' },
  CLE: { color: '#860038', logoUrl: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg', conference: 'East' },
  ATL: { color: '#E03A3E', logoUrl: 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg', conference: 'East' },
  NOP: { color: '#0C2340', logoUrl: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg', conference: 'West' },
  DAL: { color: '#00538C', logoUrl: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg', conference: 'West' },
  LAC: { color: '#C8102E', logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg', conference: 'West' },
  MIA: { color: '#98002E', logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg', conference: 'East' },
  MIN: { color: '#0C2340', logoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg', conference: 'West' },
  OKC: { color: '#007AC1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg', conference: 'West' },
  TOR: { color: '#CE1141', logoUrl: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg', conference: 'East' },
  IND: { color: '#002D62', logoUrl: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg', conference: 'East' },
  SAS: { color: '#C4CED4', logoUrl: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg', conference: 'West' },
  DET: { color: '#C8102E', logoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg', conference: 'East' },
  ORL: { color: '#0077C0', logoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg', conference: 'East' },
  NYK: { color: '#F58426', logoUrl: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg', conference: 'East' },
  BKN: { color: '#000000', logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg', conference: 'East' },
  CHA: { color: '#00788C', logoUrl: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg', conference: 'East' },
  CHI: { color: '#CE1141', logoUrl: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg', conference: 'East' },
  HOU: { color: '#CE1141', logoUrl: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg', conference: 'West' },
  SAC: { color: '#5A2D81', logoUrl: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg', conference: 'West' },
  UTA: { color: '#31006F', logoUrl: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg', conference: 'West' },
  WAS: { color: '#002B5C', logoUrl: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg', conference: 'East' },
};

const FALLBACK_META: TeamMeta = { color: '#888888', logoUrl: '', conference: 'West' };

export function getTeamMeta(abbreviation: string): TeamMeta {
  return TEAM_META[abbreviation] ?? FALLBACK_META;
}
