import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const InformationBlock = styled.div`
  border: 1px solid;
  padding: 5px 12px;
  background-color: white;
  span {
    font-size: 28px;
  }

  .winner {
    color: #52c02d;
  }
`

export const BoardBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
`;

export const RowBlock = styled.div`
  display: flex;
`;

export const Square = styled.div`
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 28px;
  border: 1px solid;
  width: 30px;
  height: 30px;
  user-select: none;
`;


export const SettingsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    display: flex;
    gap: 15px;
  }
  span {
    font-size: 18px;
  }
`
