import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import SearchBar from "../src/components/SearchBar";
import '@testing-library/jest-dom/extend-expect'; 

describe("SearchBar Component", () => {
    const mockOnSearch = jest.fn();
    const mockOnUseCurrentLocation = jest.fn();

    beforeEach(() => {
        render(<SearchBar onSearch={mockOnSearch} onUseCurrentLocation={mockOnUseCurrentLocation} />);
    });

    it("renders input field and buttons", () => {
        expect(screen.getByPlaceholderText("Enter city name")).toBeInTheDocument();
        expect(screen.getByText("Current Location")).toBeInTheDocument();
        expect(screen.getByText("Get Weather")).toBeInTheDocument();
    });

    it("updates input value when typed", () => {
        const input = screen.getByPlaceholderText("Enter city name") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "New York" } });
        expect(input.value).toBe("New York");
    });

    it("calls onSearch when submitting city name", () => {
        const input = screen.getByPlaceholderText("Enter city name");
        fireEvent.change(input, { target: { value: "London" } });
        fireEvent.click(screen.getByText("Get Weather"));
        expect(mockOnSearch).toHaveBeenCalledWith("London");
    });

    it("calls onUseCurrentLocation when clicking 'Current Location'", () => {
        fireEvent.click(screen.getByText("Current Location"));
        expect(mockOnUseCurrentLocation).toHaveBeenCalled();
    });

    it("fetches and displays city suggestions", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([{ display_name: "Los Angeles, USA" }]),
            })
        ) as jest.Mock;

        const input = screen.getByPlaceholderText("Enter city name");
        fireEvent.change(input, { target: { value: "Los" } });

        await waitFor(() => {
            expect(screen.getByText("Los Angeles, USA")).toBeInTheDocument();
        });
    });
});