export const loginReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "login":
      return { isLogin: true };
    case "logout":
      return { isLogin: false };
    default:
      return { isLogin: false };
  }
};
