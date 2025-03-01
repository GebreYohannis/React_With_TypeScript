import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  public getAll = async () => {
    const response = await axiosInstance.get<T[]>(this.endpoint);
    return response.data;
    // return axiosInstance
    //   .get<T[]>(this.endpoint)
    //   .then((response) => response.data);
  };

  public post = async (data: T) => {
    const response = await axiosInstance.post<T>(this.endpoint, data);
    return response.data;
  };
}

export default function createAPIClient<T>(endpoint: string) {
  return new APIClient<T>(endpoint);
}
