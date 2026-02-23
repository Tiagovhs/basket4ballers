import { Player } from "../models/player";
import { Team } from "../models/team";
import { TEAMS } from "./mock-team";

export const PLAYERS:Player[]=
[   {id: 1, first_name: 'James', last_name: 'LeBron', age: 39, poste: 'Ailier fort', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png", number: 6, team: TEAMS[0] },
    { id: 2,first_name: 'Morant', last_name: 'Ja', age: 25, poste: 'Meneur', img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png', number: 12, team: TEAMS[1] },
    {id: 3, first_name: 'Curry', last_name: 'Stephen', age: 36, poste: 'Meneur', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png", number: 30, team: TEAMS[2]},
    { id: 4,first_name: 'Antetokounmpo', last_name: 'Giannis', age: 29, poste: 'Ailier fort', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png", number: 34, team: TEAMS[3] },
    { id: 5,first_name: 'Durant', last_name: 'Kevin', age: 35, poste: 'Ailier', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png", number: 35, team: TEAMS[4] },
    { id: 6,first_name: 'Lillard', last_name: 'Damian', age: 34, poste: 'Meneur', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png", number: 0, team: TEAMS[3] },
    { id:7,first_name: 'Embiid', last_name: 'Joel', age: 30, poste: 'Pivot', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png", number: 21, team: TEAMS[6] },
    { id: 8,first_name: 'Jokic', last_name: 'Nikola', age: 29, poste: 'Pivot', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png", number: 15, team: TEAMS[7] },
    { id: 9,first_name: 'Tatum', last_name: 'Jayson', age: 26, poste: 'Ailier', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png", number: 0, team: TEAMS[8]},
    {id: 10, first_name: 'Mitchell', last_name: 'Donovan', age: 27, poste: 'Arrière', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628378.png", number: 45, team: TEAMS[9] },
    { id: 11,first_name: 'Young', last_name: 'Trae', age: 25, poste: 'Meneur', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png", number: 11, team: TEAMS[10] },
    { id: 12,first_name: 'Williamson', last_name: 'Zion', age: 23, poste: 'Ailier fort', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png", number: 1, team: TEAMS[11] },
    { id: 13,first_name: 'Doncic', last_name: 'Luka', age: 25, poste: 'Meneur', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png", number: 77, team: TEAMS[12]},
    { id: 14,first_name: 'Beal', last_name: 'Bradley', age: 31, poste: 'Arrière', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png", number: 3, team: TEAMS[4] },
    { id: 15,first_name: 'Booker', last_name: 'Devin', age: 27, poste: 'Arrière', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png", number: 1, team: TEAMS[4] },
    { id: 16,first_name: 'George', last_name: 'Paul', age: 34, poste: 'Ailier', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png", number: 13, team: TEAMS[6] },
    { id: 17,first_name: 'Leonard', last_name: 'Kawhi', age: 33, poste: 'Ailier', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png", number: 2, team: TEAMS[13] },
    { id: 18,first_name: 'Russell', last_name: 'D\'Angelo', age: 28, poste: 'Meneur', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626156.png", number: 0, team: TEAMS[0] },
    { id: 19,first_name: 'Westbrook', last_name: 'Russell', age: 35, poste: 'Meneur', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png", number: 0, team: TEAMS[7] },
    { id: 20,first_name: 'Harden', last_name: 'James', age: 34, poste: 'Arrière', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png", number: 13, team: TEAMS[13] },
    { id: 22,first_name: 'Gilgeous-Alexander', last_name: 'Shai', age: 25, poste: 'Meneur', img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png", number: 2, team: TEAMS[16]}
     ];