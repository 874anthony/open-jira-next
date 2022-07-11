import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
