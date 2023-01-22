import React from "react";
import { observer } from "mobx-react-lite";
import {
  BoardBlock,
  BoardContainer,
  InformationBlock,
  RowBlock,
  SettingsBlock,
  Square
} from "./Board.styled";
import { board } from "store";

export const Board = observer(() => {

  const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    board.setWinCount(Number(e.target.value));
  };

  return (
    <BoardContainer>
      <InformationBlock>
        {
          board.winnerPlayer?.name ?
            <span className="winner">Победитель - {board.winnerPlayer?.name}</span> :
            <span>Ход игрока - {board.currentPlayer.name}</span>
        }
      </InformationBlock>
      <SettingsBlock>
        <div>
          <span>
          Условие победы:
          </span>
          <select
            defaultValue={3}
            onChange={changeSelect}
          >
            <option value={3}>Три подряд</option>
            <option value={4}>Четыре подряд</option>
            <option value={5}>Пять подряд</option>
          </select>
        </div>
        <div>
          <span>
            Добавить игрока:
          </span>
          <button onClick={() => board.addPlayer()}>+</button>
        </div>
      </SettingsBlock>
      <BoardBlock>
        {
          board.initBoard.map((row, indexRow) => (
            <RowBlock key={indexRow}>
              {row.map((square, indexSquare) => (
                <Square
                  onClick={() => board.onClickSquare(indexRow, indexSquare)}
                  key={String(indexRow) + String(indexSquare)}>
                  {square === "-" ? " " : square}
                </Square>
              ))}
            </RowBlock>
          ))
        }
      </BoardBlock>
    </BoardContainer>
  );
});
