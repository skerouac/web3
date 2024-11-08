import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import { IMovie } from "../components/Movies";

interface FavoritesContextType {
  favorites: IMovie[];
  toggleFavorite: (movie: IMovie) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

interface FavoritesContextProviderProps extends PropsWithChildren {
  children: ReactNode;
}

const FavoritesContextProvider = (
  props: FavoritesContextProviderProps
): ReactNode => {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  const toggleFavorite = (movie: IMovie): void => {
    if (favorites.some((f) => f.id === movie.id)) {
      setFavorites(favorites.filter((f) => f.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        toggleFavorite: toggleFavorite,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error(
      "useFavorites must be used within a FavoritesContextProvider"
    );
  }

  return context;
};
