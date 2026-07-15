import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, SavedCalculation } from '@/types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isDarkMode: boolean;
  setIsDarkMode: (mode: boolean) => void;
  savedCalculations: SavedCalculation[];
  addSavedCalculation: (calculation: SavedCalculation) => void;
  removeSavedCalculation: (id: string) => void;
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const addSavedCalculation = (calculation: SavedCalculation) => {
    setSavedCalculations([...savedCalculations, calculation]);
  };

  const removeSavedCalculation = (id: string) => {
    setSavedCalculations(savedCalculations.filter(calc => calc.id !== id));
  };

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(fav => fav !== id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isDarkMode,
        setIsDarkMode,
        savedCalculations,
        addSavedCalculation,
        removeSavedCalculation,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
