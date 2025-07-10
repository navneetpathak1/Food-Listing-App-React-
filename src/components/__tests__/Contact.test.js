import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
    test("renders the heading", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("renders the button", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    test("renders the Send Message text", () => {
        render(<Contact />);
        const button = screen.getByText("Send Message");
        expect(button).toBeInTheDocument();
    });

    test("renders input with placeholder 'Your name'", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Your name");
        expect(inputName).toBeInTheDocument();
    });

    test("loads 3 input boxes", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(3);
    });


    it("loads 3 input boxes", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).not.toBe(2);
    });

})
