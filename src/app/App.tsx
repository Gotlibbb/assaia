import React from 'react';
import { AppContainer } from "./App.styled";
import { Board } from "../features";

export const App = () => {
  return (
    <AppContainer>
      <h1>Крестики-нолики</h1>
      <Board/>
    </AppContainer>
  );
}

