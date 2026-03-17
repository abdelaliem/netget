# Contributing to NetGet

## Branches
- Never push directly to `main`
- Always create a new branch from the latest `main`
- Branch naming: `feat/name`, `fix/name`, `chore/name`
- Delete your branch after it merges

## Pull Requests
- Every change goes through a PR — no exceptions
- One feature or fix per PR
- Write what you changed and why in the PR description
- The lead reviews and merges — you never merge your own PR
- Fix all review comments before asking for re-review

## Commits
- Present tense: `Add chart tooltip` not `Added chart tooltip`
- Format: `feat:`, `fix:`, `chore:`, `style:`, `refactor:`, `test:`
- One logical change per commit
- No `console.log` left in any commit

## JavaScript Rules
- No `var` — use `const` or `let`
- Always `===` never `==`
- PropTypes required on every component
- JSDoc required on every service function
- No `any` shortcuts — name your variables clearly

## Folder Rules
- Pages are thin — no logic, only imports
- Components go in `components/` only when 2+ features need them
- Never import from another feature's internal folder
- Socket event names always from `constants/socketEvents.js`

## State Rules
- Local UI state — useState inside the component
- Shared state — Zustand store
- No prop drilling beyond 2 levels

## Services Rules
- All HTTP calls through `services/api.js` only
- Socket client only through `services/socket.js` only
- No raw fetch() or axios calls in components

## Requires Lead Approval
- Adding a new npm package
- Adding a new store
- Changing services/
- Changing folder structure
- Adding a new route
- Renaming socket events

## Never Do
- Create a second socket instance
- Add a package without approval