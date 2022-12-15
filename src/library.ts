import { writeFile } from "./files.js";

export async function saveData(a: string, b: number) {
  const data = { name: a, age: b };
  const str = JSON.stringify(data, null, 2);
  const result = await writeFile("./data.json", str);
  console.log("result =", result);
  return result;
}
