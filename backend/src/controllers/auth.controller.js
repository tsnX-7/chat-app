export const signup = (req, res) => {
  console.log("signup hit");
  res.send("signup route");
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};
