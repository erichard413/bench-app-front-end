import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

class BenchAppAPI {
  // create static variable for auth token
  static token;

  // create function for making requests to the server
  static async request(endpoint, data = {}, method = "get") {
    console.debug(`API Call: ${endpoint}, ${data}, ${method}`);

    const url = `${BASE_URL}/api/${endpoint}`;
    const headers = { Authorization: `Bearer ${BenchAppAPI.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      // return array of error messages - can comment out later.
      let message = err.response?.data.error.message;
      return Array.isArray(message) ? message : [message];
      //   return err.response;
    }
  }

  // log in function
  static async logIn({ username, password }) {
    let res = await this.request("auth/token", { username, password }, "post");
    if (!res.token) throw new Error("Invalid username/password!");
    return res;
  }
}

export default BenchAppAPI;
