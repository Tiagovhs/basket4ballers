import { Player } from '../models/player';
import { CareerStats, PlayerAPI } from '../models/player-api';
import { getTeamMeta } from './team-meta';

export function playerApiToPlayer(api: PlayerAPI, stats?: CareerStats[]): Player {
  const meta = getTeamMeta(api.team.abbreviation);
  const latestStats = stats && stats.length > 0 ? stats[stats.length - 1] : undefined;
  const allTeams = stats ? [...new Set(stats.map(s => s.team))] : [];

  return {
    id: api.id,
    first_name: api.firstName,
    last_name: api.lastName,
    age: 0,
    poste: api.position,
    number: parseInt(api.jerseyNumber, 10) || 0,
    img: api.imageUrl ?? `https://cdn.nba.com/headshots/nba/latest/1040x760/${api.nbaId}.png`,
    team: {
      name: api.team.fullName,
      color: meta.color,
      id: meta.logoUrl,
    },
    draftYear: api.draftYear,
    draftPick: api.draftNumber,
    allTeams,
    quote: '',
    stats: {
      ppg: latestStats?.pts ?? 0,
      rpg: latestStats?.reb ?? 0,
      apg: latestStats?.ast ?? 0,
      fgp: latestStats?.fgPct ?? 0,
    },
    sneakerIds: [],
  };
}
