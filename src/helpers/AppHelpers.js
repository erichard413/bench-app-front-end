import BenchAppAPI from "../api";
import { jwtDecode } from "jwt-decode";

async function getData(data, setUser) {
  let userData = await BenchAppAPI.getUser(data.username);
  setUser(userData);
  return res;
}

class AppHelpers {
  // grab token from LS on page load, grab user on page load
  static async getUserData(currentToken, setUser, setAuthLoading) {
    try {
      let data = jwtDecode(currentToken);
      let userData = await BenchAppAPI.getUser(data.username);
      console.log(userData);
      setUser(userData);
      setAuthLoading(false);
      return true;
    } catch (err) {
      console.log(err);
      BenchAppAPI.token = null;
      // remove the token from LS if invalid
      localStorage.removeItem("token");
      return false;
    }
  }
  // function to log in user, store token on BenchAppAPI
  static async logInUser(username, password, setUser) {
    try {
      const res = await BenchAppAPI.logIn(username, password);
      localStorage.setItem("token", res.token);
      BenchAppAPI.token = res.token;
      let data = jwtDecode(BenchAppAPI.token);
      return getData(data);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  // function to log out user
  static async logOutUser(setUser, setCurrentToken) {
    setCurrentToken(null);
    setUser(null);
  }
}

export default AppHelpers;
