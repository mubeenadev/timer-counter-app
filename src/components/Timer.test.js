import React from "react";
import { act, render, screen } from "@testing-library/react";
import { CountdownTimer } from "./Timer";

beforeEach(() => {
    jest.useFakeTimers({ advanceTimers: true });
});

test("it should start at 100", () => {
    render(<CountdownTimer />);
    expect(screen.getByText("Count: 100")).toBeInTheDocument();
});

test("it should decrement every second", () => {
    render(<CountdownTimer />);
    expect(screen.getByText("Count: 100")).toBeInTheDocument();

    for (let x = 100; x !== 0; x--) {
        expect(screen.getByText(`Count: ${x}`)).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(1000);
        });
    }
});

test("it should not countdown once it reaches 0", () => {
    render(<CountdownTimer />);
    act(() => {
        jest.advanceTimersByTime(100 * 1000);
    });
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
});
