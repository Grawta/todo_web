import axios from "axios";

// This function while make a promise and retrieve data from the path given
export async function get<T>(path: string): Promise<T> {
  const { data } = await axios.get(path);
  return data;
}
