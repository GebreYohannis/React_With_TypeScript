import apiClient from "./api-client";

class HttpService {
  constructor(private endpoint: string) {}

  public getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default function create(endpoint: string) {
  return new HttpService(endpoint);
}
