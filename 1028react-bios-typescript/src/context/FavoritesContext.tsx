// import {
//   createContext,
//   PropsWithChildren,
//   ReactNode,
//   useContext,
//   useState,
// } from "react";
// import { IMovie } from "../components/Movies";

// interface FavoritesContextType {
//   favorites: IMovie[];
// }

// export const FavoritesContext = createContext<FavoritesContextType | undefined>(
//   undefined
// );

// interface FavoritesContextProviderProps extends PropsWithChildren {
//   children: ReactNode;
// }

// const FavoritesContextProvider: React.FC<FavoritesContextProviderProps> = (
//   props
// ) => {
//   const [favorites, setFavorites] = useState<IMovie[]>([]);

//   return (
//     <FavoritesContext.Provider value={{ favorites: favorites }}>
//       {props.children}
//     </FavoritesContext.Provider>
//   );
// };

// export default FavoritesContextProvider;

// export const useFavorites = (): FavoritesContextType => {
//   const context = useContext(FavoritesContext);

//   if (context === undefined) {
//     throw new Error(
//       "useFavorites must be used within a FavoritesContextProvider"
//     );
//   }

//   return context;
// };
