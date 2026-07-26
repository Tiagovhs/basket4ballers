export class Team {
  name: string;
  color: string;
  id: string;
  conference: string;

  constructor(name: string, color: string, id: string, conference: string = '') {
    this.name = name;
    this.color = color;
    this.id = id;
    this.conference = conference;
  }
}
