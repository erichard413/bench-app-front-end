import BenchAppAPI from "../api";
import { jwtDecode } from "jwt-decode";

class AppHelpers {
  static async getData(data, setUser) {
    let userData = await BenchAppAPI.getUser(data.username);
    setUser(userData);
    return userData;
  }
  // grab token from LS on page load, grab user on page load
  static async getUserData(
    currentToken,
    setUser,
    setAuthLoading,
    setTeams,
    setCurrentToken,
  ) {
    console.log("getUserData...");
    try {
      let data = jwtDecode(currentToken);
      let userData = await BenchAppAPI.getUser(data.username);
      setUser(userData);
      setAuthLoading(false);
    } catch (err) {
      console.log(err);
      setUser(null);
      setTeams([]);
      setCurrentToken(null);

      BenchAppAPI.setToken(null);
      // remove the token from LS if invalid
      localStorage.removeItem("token");
    } finally {
      setAuthLoading(false);
    }
  }

  // function to log out user
  static async logOutUser(setUser, setCurrentToken) {
    setCurrentToken(null);
    setUser(null);
  }
  static async getUserTeams(userId) {
    const teams = await BenchAppAPI.getTeams(userId);
    console.log("***GETTING TEAMS***");
    return teams;
  }
}

export default AppHelpers;
