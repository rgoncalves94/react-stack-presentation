import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Themes } from "../../common/Theme/schema";

const USER_LOCAL_STORAGE_KEY = "user-info";

interface User {
  name: string | null | undefined;
  preferences: { theme: Themes };
}

interface ContextProps {
  user: User;
  updatePreferences(preferences: User["preferences"]): void;
}

const defaultUser: User = {
  name: null,
  preferences: {
    theme: Themes.DARK,
  },
};

const Context = createContext<ContextProps>({
  user: defaultUser,
  updatePreferences: () => null,
});

const useUser = () => {
  return useContext(Context).user;
};

const usePreferences = () => {
  const {
    user: { preferences },
    updatePreferences,
  } = useContext(Context);
  return { ...preferences, updatePreferences };
};

const UserProvider: FunctionComponent = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState<User>(defaultUser);
  useEffect(() => {
    const localData = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    if (localData) {
      setUserData(JSON.parse(localData));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userData));
    }
  }, [userData, isLoaded]);

  const updatePreferences: ContextProps["updatePreferences"] = (preferences) =>
    setUserData((currentState) => ({ ...currentState, preferences }));

  return (
    <Context.Provider value={{ user: userData, updatePreferences }}>
      {children}
    </Context.Provider>
  );
};

export { UserProvider, useUser, usePreferences };
