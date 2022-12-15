import { vi, expect, it, describe, beforeEach } from "vitest";
import { saveData } from "./library.js";
import { writeFile } from "./files";

vi.mock("./files.js");

describe("library tests", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.resetModules();
  });

  it("should be true", async () => {
    vi.mocked(writeFile).mockImplementation(async () => {
      return true;
    });

    const name = "ryan";
    const age = 30;

    const result = await saveData(name, age);
    expect(result).toEqual(true);

    // ---
  });

  it("should be false", async () => {
    vi.mocked(writeFile).mockImplementation(async () => {
      return false;
    });

    const name = "ryan";
    const age = 30;

    const result = await saveData(name, age);
    expect(result).toEqual(false);

    // ---
  });
});
