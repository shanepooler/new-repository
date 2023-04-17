# React-Tailwind Demo Auth App

This is a template for a React project using TailwindCSS and Vite. If features a simple login/registration system using `json-server` and `ky`. As you implement your own authentication system on your Java Spring Boot backend, you will systematically remove/update this stuff.

For the most part, you can just update [src/api-service.js](./src/api-service.js) to match your backend. You'll probably want to use JWTs and [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#examples) to manage a logged in user. A utility function has been provided for you in [src/utils.js](./src/utils.js) to help with this.

You'll want to consult the [Tailwind CSS docs 📝](https://tailwindcss.com/docs) for more information on how to use TailwindCSS so that you can customize the look and feel of things here 💄.

## `json-server`

This project includes a login/registration system that uses `json-server` for demo/dev purposes only. It is not meant to be used in production. You can and should remove `json-server` from `package.json` when you are building out your own project.

To use it for demo purposes, you need to create a `db.json` file (ignored by git 🙈) in the root of the project.

Here's an example:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "username": "johndoe",
      "password": "password"
    }
  ]
}
```

Then, from `api.js`, you could use `ky` to make requests to the API at: `http://localhost:3001/users`. Don't forget to run `npm run json-server` in a separate terminal from `npm start`.

[Docs 📝](https://www.npmjs.com/package/json-server)

Please see `src/api.js`[./src/api.js]. It has an example of a simplistic/fake registration/login system that you might use to build off of.

## Scripts

- `npm start` - Starts the development server.
- `npm run json-server` - Starts the `json-server` on port `3001`.

## Architecture

This project uses the following architecture heavily inspired by Tania Rascia's [React Architecture](https://www.taniarascia.com/react-architecture-directory-structure/).

- `src/` - All of our source code.

  - `components/` - All of our React components (`.jsx`). Global shared/reusable components, such as layout (wrappers, navigation), form components, buttons. `form` components have been consolidated.
  - `pages/` - All of our React pages.

  Also see `api.js` and `utils.js` for additional 🎶.

### Absolute Imports

This project uses absolute imports for all of our files. This means that we can import files from any directory using the `@` prefix instead of relative paths. See `vite.config.js` for the configuration.

## Linting and Prettier

This project uses `"standard"` linting with the recommended for `react` and `"prettier"`. This includes recommendations for **rules of hooks** and **a11y.**

## VS Code Extensions and Settings

It also includes sensible VS Code defaults for [settings](./.vscode/settings.json) and [extensions](./.vscode/extensions.json).

For the **settings**, we are doing things like:

- `"css.validate": false,` - TailwindCSS uses a lot of custom CSS syntax that VS Code doesn't understand, so we disable validation.
- `"editor.formatOnSave": true,` - We want to format our code on save.
- `"editor.defaultFormatter": "esbenp.prettier-vscode",` - We want to use Prettier to format our code.
- `"editor.codeActionsOnSave": { "source.fixAll.eslint": true },` - We want to use ESLint to fix any linting errors on save.

You should install the recommended extensions when you open the project in VS Code to get the full benefit of these settings.
.

## License

[MIT](./LICENSE)

## Credits

This project was bootstrapped with [create-vite](https://vitejs.dev/guide/).
