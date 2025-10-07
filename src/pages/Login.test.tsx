import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest"
import { MemoryRouter } from "react-router";

describe("Login", () =>{
    it("Looking if tests run", ()=>{
        render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
        );
        expect(screen.getByText("Login")).toBeInTheDocument()
    });
})