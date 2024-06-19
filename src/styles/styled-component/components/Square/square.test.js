/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Square from ".";

describe("vou realizar alguns testes com o square", () => {
  it("verifica se o component", () => {
    const { container } = render(<Square />);

    expect(container.firstChild).toHaveStyle('width: 200px')
  });
});
