import { makeAutoObservable } from "mobx";


type SquareContentType = "-" | "o" | "x"

type Player = { name: string, content: SquareContentType }

class Board {
  players: Player[] = [
    { name: "Player 1", content: "x" },
    { name: "Player 2", content: "o" },
  ];

  indexActivePlayer = 0;

  winCount = 3;

  rowsCount = 10;
  rowLength = 10;

  winner: Player | null = null;

  board: Array<SquareContentType[]> = [];

  constructor() {
    makeAutoObservable(this);
    this.setBoard();
  }

  setActivePlayer() {
    if (this.indexActivePlayer === this.players.length - 1) {
      this.indexActivePlayer = 0;
    } else {
      this.indexActivePlayer += 1;
    }
  }

  setBoard(length = this.rowLength, count = this.rowsCount) {
    for (let i = 0; i < length; i++) {
      this.board.push([]);
      for (let j = 0; j < count; j++) {
        this.board[i].push("-");
      }
    }
  }

  setRowsCount(count: number) {
    this.rowsCount = count;
  }

  setRowLength(length: number) {
    this.rowLength = length;
  }

  onClickSquare(x: number, y: number) {
    const { content } = this.players[this.indexActivePlayer];
    if (this.board[x][y] === "-") {
      this.board[x][y] = content;
      this.setActivePlayer();
      this.checkIsHaveWinner(content);

    }
  }

  checkIsHaveWinner(content: SquareContentType) {

    //поверяем по горизонтали
    this.board.forEach(r => {
      let contentCount = 0;
      r.forEach((item, index) => {
        if (item === r[index - 1] && item !== "-") {
          contentCount += 1;
        }
        if (item !== r[index - 1] && item !== "-") {
          contentCount = 0;
        }
      if (contentCount === this.winCount - 1) {
        this.winner = this.players.find(player => player.content === content) || null;
      }
      });
    });


    //проверяем по вертикали
    for (let i = 0; i < this.rowsCount; i++) {
      let contentCount = 0;
      this.board.forEach((r, index) => {
        if (r[i] === this.board[index - 1]?.[i] && r[i] !== "-") {
          contentCount += 1;
        }
        if (r[i] !== this.board[index - 1]?.[i] && r[i] !== "-") {
          contentCount = 0;
        }
        if (contentCount === this.winCount - 1) {
          this.winner = this.players.find(player => player.content === content) || null;
        }
      });
    }

  }

  get currentPlayer() {
    return this.players[this.indexActivePlayer];
  }

  get winnerPlayer() {
    return this.winner;
  }

  get initBoard() {
    return this.board;
  }

}

export const board = new Board();
