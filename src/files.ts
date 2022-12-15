import fsp from "fs/promises";

export async function writeFile(filename: string, data: any) {
  console.log(`writing data to ${filename}`);
  await fsp.writeFile(filename, data);

  return true;
}
