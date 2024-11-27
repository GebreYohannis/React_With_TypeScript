import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me",
  headers: {
    Accept: "application/json",
  },
});
