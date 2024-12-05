import { createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";

const initialState = {
  isLogin: localStorage.getItem("isLogin") ? JSON.parse(localStorage.getItem("isLogin")) : false,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const login = () => {
    dispatch({ type: "login" });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  const value = {
    isLogin: state.isLogin,
    contextLogin: login,
    contextLogout: logout
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
