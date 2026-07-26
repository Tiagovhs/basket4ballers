import { Player } from '../models/player';
import { CareerStats, PlayerAPI } from '../models/player-api';
import { getTeamMeta } from './team-meta';

 export function playerApiToPlayer(api: PlayerAPI, stats?: CareerStats[]): Player {
    const meta = api.team ? getTeamMeta(api.team.abbreviation) : { color: '#000000', logoUrl: '', conference: '' as const };
    const latestStats = stats && stats.length > 0 ? stats[stats.length - 1] : undefined;
    const allTeams = stats ? [...new Set(stats.map(s => s.team))] : [];

    return {
      id: api.id,
      first_name: api.firstName,
      last_name: api.lastName,
      age: 0,
      poste: api.position,
      number: api.jerseyNumber != null ? parseInt(api.jerseyNumber, 10) : null,
      img: api.imageUrl ?? `https://cdn.nba.com/headshots/nba/latest/1040x760/${api.nbaId}.png`,
      team: {
        name: api.team?.fullName ?? 'Agent libre',
        color: meta.color,
        id: meta.logoUrl,
        conference: meta.conference ?? '',
      },
      draftYear: api.draftYear ?? null,
      draftRound: api.draftRound ?? null,
      draftPick: api.draftNumber ?? null,
      undrafted: !api.draftYear && !api.draftRound && !api.draftNumber,
      college: api.college ?? null,
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
