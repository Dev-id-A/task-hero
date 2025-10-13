import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest"
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event"
import { useState, useRef } from "react";

function LoginPage() {
    const [lang, setLang] = useState<"es" | "en">("es")
    const user = useRef<HTMLInputElement | null>(null)
    

    const toggleFade = (langParam : "es" | "en")=>{
        setLang(langParam)
    };
    return(
        <MemoryRouter>
            <Login lang={lang} toggleFade={toggleFade} nightMode={false} user={user}/>
        </MemoryRouter>
    );
}


describe("Login", () =>{
    it("Changes the language", async ()=>{
        render(<LoginPage />);
        const esButton = screen.getByAltText("Spanish icon")
        const enButton = screen.getByAltText("English icon")

        expect(screen.getByText("Bienvenido")).toBeInTheDocument()
        expect(screen.getByText("Idioma")).toBeInTheDocument()
        expect(screen.getByText("Entrar")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Introduzca su nombre")).toBeInTheDocument()

        await userEvent.click(enButton);

        expect(await screen.findByText("Welcome")).toBeInTheDocument()
        expect(await screen.findByText("Language")).toBeInTheDocument()
        expect(await screen.findByText("Enter")).toBeInTheDocument()
        expect(await screen.findByPlaceholderText("Enter your name")).toBeInTheDocument()

        await userEvent.click(esButton);

        expect(await screen.findByText("Bienvenido")).toBeInTheDocument()


        
    });

})