// This is your API service. You will call your backend API from here.
// https://github.com/sindresorhus/ky
import ky from "ky";

// TODO: Replace this with your own backend API URL (e.g. `BASE_URL`).
const USERS_URL = "http://localhost:3001/users";

// TODO: Remove 🔥 this! It's only for demo purposes with 'json-server.'
// In real life, your back-end would handle logic for authentication and send back appropriate responses.
// We would NOT be making a request to the users endpoint to get all users. It's a hack for demo purposes.
const users = await ky.get(USERS_URL).json();

export default {
  register(newUser) {
    // Does the user already exist?
    const userExists = users.find((user) => user.username === newUser.username);

    if (userExists) {
      throw new Error("User already exists.");
    }

    return ky.post(USERS_URL, { json: newUser }).json();
  },
  login(credentials) {
    // Does the user exist and is the password correct?
    const user = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (!user) {
      throw new Error("Invalid credentials!");
    }

    return user;
  },
};
