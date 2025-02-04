import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { labyrinth } from 'reducers/labyrinth';
import ui from 'reducers/ui';
import Loading from 'components/Loading';
import { SelectPage } from 'components/SelectPage';
import { PageWrapper } from 'Globalstyles';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    ui: ui.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <PageWrapper>
        <Loading />
        <SelectPage />
      </PageWrapper>
    </Provider>
  )
}
