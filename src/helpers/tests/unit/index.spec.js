import { convertToArray, getParagraphs } from "../../index";

import jsonData from "../../../data/english.json";

import { expected1, expected2 } from "./data";

describe("TESTING FIRST ALGORITHM", () => {
  test("TESTING IF WE RECIEVED EXPECTED DATA", () => {
    expect(convertToArray(jsonData)).toEqual(expected1);
  });
});
describe("TESTING SECOND ALGORITHM", () => {
  test("TESTING IF WE RECIEVED EXPECTED DATA", () => {
    expect(getParagraphs(jsonData)).toMatchObject(expected2);
  });
});
