import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SNEAKERS } from '../mock/mock-sneakers';
import { PLAYERS } from '../mock/mock-players';
import { Sneaker } from '../models/sneaker';
import { Player } from '../models/player';

interface Question {
  sneaker: Sneaker;
  options: Player[];
  correctPlayers: Player[];
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  question: Question | null = null;
  selectedAnswer: Player | null = null;
  score = 0;
  streak = 0;
  totalAnswered = 0;

  get isCorrect(): boolean {
    if (!this.selectedAnswer || !this.question) return false;
    return this.question.correctPlayers.some(p => p.id === this.selectedAnswer!.id);
  }

  get accuracy(): number {
    if (this.totalAnswered === 0) return 0;
    return Math.round((this.score / this.totalAnswered) * 100);
  }

  ngOnInit() {
    this.nextQuestion();
  }

  nextQuestion() {
    this.selectedAnswer = null;

    const validSneakers = SNEAKERS.filter(s =>
      PLAYERS.some(p => p.sneakerIds.includes(s.id))
    );

    const sneaker = validSneakers[Math.floor(Math.random() * validSneakers.length)];
    const correctPlayers = PLAYERS.filter(p => p.sneakerIds.includes(sneaker.id));
    const correctToShow = correctPlayers[Math.floor(Math.random() * correctPlayers.length)];

    const wrongPlayers = PLAYERS
      .filter(p => !p.sneakerIds.includes(sneaker.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [...wrongPlayers, correctToShow].sort(() => Math.random() - 0.5);

    this.question = { sneaker, options, correctPlayers };
  }

  answer(player: Player) {
    if (this.selectedAnswer) return;
    this.selectedAnswer = player;
    this.totalAnswered++;
    if (this.isCorrect) {
      this.score++;
      this.streak++;
    } else {
      this.streak = 0;
    }
  }

  isOptionCorrect(player: Player): boolean {
    return !!this.question?.correctPlayers.some(p => p.id === player.id);
  }
}
