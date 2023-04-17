import { useContext, useState } from "react";
import { Form, Navigate } from "react-router-dom";
import apiService from "../api-service";
import Error from "../components/error";
import { TextInput } from "../components/form";
import AuthContext from "../auth-context";
import { createObjectFromFormSubmission } from "../utils";

export default function Home() {
  const [user, setUser] = useContext(AuthContext);

  const [isRegistering, setIsRegistering] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // If the user is already logged in, redirect them to the authenticated page.
  // TODO: Implement authentication on your server and use `localStorage` to persist the user's login.
  return user ? (
    <Navigate to="/authenticated" />
  ) : (
    <Form
      // Clear the error message when the user focuses on the form.
      onFocus={() => setErrorMessage(null)}
      onSubmit={async (event) => {
        event.preventDefault();

        const submission = createObjectFromFormSubmission(event.target);

        if (isRegistering) {
          if (submission.password !== submission.confirmPassword)
            setErrorMessage("Passwords do not match");

          try {
            const newUser = await apiService.register(submission);

            setUser(newUser);
          } catch (error) {
            setErrorMessage(error.message);
          }
        } else {
          try {
            const existingUser = await apiService.login(submission);

            setUser(existingUser);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }
      }}
    >
      <h2>{isRegistering ? "Register" : "Login"}</h2>

      {/* Conditional Rendering (https://react.dev/learn/conditional-rendering) */}
      {isRegistering && <TextInput id="name" placeholder="Your Full Name" />}

      <TextInput id="username" />
      <TextInput type="password" id="password" />
      {isRegistering && (
        <TextInput
          id="confirm-password"
          type="password"
          // Don't require the confirm password field. We will be checking it in 'handleSubmit' anyway.
          required={false}
        />
      )}

      <button type="submit" className="btn">
        {isRegistering ? "Register" : "Login"}
      </button>

      <button
        className="text-orange-500"
        type="button"
        onClick={() => setIsRegistering((prev) => !prev)}
      >
        {isRegistering ? "Already have an account?" : "Don't have an account?"}
      </button>

      {errorMessage && <Error message={errorMessage} />}
    </Form>
  );
}
