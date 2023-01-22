import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  span {
    font-size: 28px;
  }
`;
export const BoardBlock = styled.div`
  display: flex;
  flex-direction: column`;
export const RowBlock = styled.div`
  display: flex;`;
export const Square = styled.div`
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 25px;
  border: 1px solid;
  width: 30px;
  height: 30px;
`;
