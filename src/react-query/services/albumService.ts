import createAPIClient from "./api-client";

export interface Album {
  id: number;
  title: string;
  userId: number;
}

export default createAPIClient<Album>("/albums");
