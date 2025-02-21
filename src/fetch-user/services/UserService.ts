// import { User } from "../components/user";
// import apiClient from "./api-client";
import create from "./HttpService";

// class UserService {
//   public getAllUsers() {
//     const controller = new AbortController();
//     const request = apiClient.get<{ results: User[] }>("/api/?results=5000", {
//       signal: controller.signal,
//     });

//     return { request, cancel: () => controller.abort() };
//   }
// }

// export default new UserService();

export default create("/api/?results=5000");
