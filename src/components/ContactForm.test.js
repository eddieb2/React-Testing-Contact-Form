import React from "react";
import { render, fireEvent, getByDisplayValue } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly ", () => {
  render(<ContactForm />);

  // NOTE
  // Changed ContactForm component name and the test fails.
  // Test is working correctly.
});

test("form adds new fields to state ", () => {
  const { getByLabelText, getByText, findAllByText, getByRole } = render(<ContactForm />);

  //NOTE Why can't this be firstName?
  //NOTE Test revealed we needed an id for each input
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);

  //NOTE Not getting counted as a test? but above is?
  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Eddie" }
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Blanciak" }
  });
  fireEvent.change(emailInput, {
    target: { name: "email", value: "dsda@dsad.com" }
  });

  const submitButton = document.querySelector("input:last-child");

  fireEvent.click(submitButton);
});
