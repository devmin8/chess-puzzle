# Chess Puzzle

Built with SvelteKit, Better Auth, Drizzle, and SQLite.

# License

This project is licensed under the GNU General Public License v3.0 or later
(GPL-3.0-or-later). See [LICENSE](./LICENSE).

This project uses [Chessground](https://github.com/lichess-org/chessground),
which is distributed under GPL-3.0-or-later.

# How to run

- Install [portless](https://portless.sh/).
- Copy `.env.example` to `.env` and set `BETTER_AUTH_SECRET`.
- `.env` overrides existing shell vars so this app does not pick up another project's `DATABASE_URL` or Better Auth URL.
- Run `pnpm install`.
- Run `pnpm db:push` to create the SQLite schema.
- Run `pnpm create-user --email you@example.com --name You` to create a login.
- Run `pnpm dev`
- Open http://chess-puzzle.localhost in browser.

# DB migration commands

- Run `db:push` to push schema changes directly to the database.
- Run `db:generate` to generate SQL migration files from schema changes.
- Run `db:migrate` to apply generated migrations to the database.
