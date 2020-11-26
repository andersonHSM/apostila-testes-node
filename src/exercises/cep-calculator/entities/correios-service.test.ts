import { mocked } from "ts-jest/utils";
import CorreiosService from "./correios-service";
jest.mock("./correios-service");

const mockedCorreiosService = mocked(CorreiosService, true);

describe("Correio Serivice Test", () => {
  let correiosService: CorreiosService;

  beforeEach(() => {
    mockedCorreiosService.mockClear();
    mockedCorreiosService.mockImplementation(() => {
      return {
        getCepValue: () => 50,
      };
    });

    correiosService = new CorreiosService();
  });

  test(`deve retornar o valor definido`, () => {
    expect(correiosService.getCepValue("")).toBe(50);
  });
});
