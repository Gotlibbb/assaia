import React from "react";
import { observer } from "mobx-react-lite";
import { BoardBlock, BoardContainer, RowBlock, Square } from "./Board.styled";
import { board } from "store";

export const Board = observer(() => {
  return (
    <BoardContainer>
      <span>{board.winnerPlayer?.name ? `Победитель - ${board.winnerPlayer?.name}` : `Ход игрока - ${board.currentPlayer.name}`  }</span>
      <BoardBlock>
      {
        board.initBoard.map((row, indexRow) => (
          <RowBlock key={indexRow}>
            {row.map((square, indexSquare) => (
              <Square onClick={() => board.onClickSquare(indexRow, indexSquare)} key={String(indexRow)+String(indexSquare)}>
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
