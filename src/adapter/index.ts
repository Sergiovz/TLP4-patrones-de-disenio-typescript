import { FetchAdapter } from "./clases/FetchAdapter";
import { AxiosAdapter } from "./clases/AxiosAdapter";
import { SimpleHttpClient } from "./clases/SimpleHttpClient";

export { IHttpClient } from "./interfaces/IHttpClient";
export { FetchAdapter } from "./clases/FetchAdapter";
export { AxiosAdapter } from "./clases/AxiosAdapter";
export { SimpleHttpClient } from "./clases/SimpleHttpClient";

export async function runAdapter() {
  console.log("\n=== Patrón Adapter: Fetch ↔ Axios ===");

  const fetchAdapter = new FetchAdapter();
  const axiosAdapter = new AxiosAdapter();
  const client = new SimpleHttpClient(fetchAdapter);

  const data1 = await client.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log("Con fetch:", data1);

  client.setAdapter(axiosAdapter);
  const data2 = await client.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log("Con axios:", data2);
}
