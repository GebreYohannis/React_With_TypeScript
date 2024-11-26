// import apiClient from "./api-client";

import create from "./http-service";
export interface User {
  id: number;
  name: string;
}

// class UserService {
//   public getAllUsers() {
//     const controller = new AbortController();
//     const request = apiClient.get<User[]>("/users", {
//       signal: controller.signal,
//     });
//     return { request, cancel: (): void => controller.abort() };
//   }

//   public deleteUser(id: number) {
//     return apiClient.delete("/users/" + id);
//   }

//   public createUser(user: User) {
//     return apiClient.post("/users/", user);
//   }

//   public updateUser(user: User) {
//     return apiClient.patch("/users/" + user.id, user);
//   }
// }

// export default new UserService();

export default create("/users");
