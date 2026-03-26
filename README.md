# Frontend Mentor Workspace

This repository is organized as a workspace for multiple Frontend Mentor challenges.

## Structure

```text
.
├── challenges/   # One folder per challenge
├── archive/      # Original starter downloads and local backups
└── .gitignore    # Shared root ignore rules
```

## Conventions

- Add each new challenge under `challenges/<challenge-name>`.
- Keep challenge-specific files inside that challenge folder.
- Preserve any original starter files that matter for the challenge itself.
- Put downloaded starter zip files in `archive/` instead of the repository root.
- Allow each challenge to keep its own `.gitignore` when the starter includes one.

## Current Challenges

| Challenge   | Path                          | Notes                       |
| ----------- | ----------------------------- | --------------------------- |
| Recipe page | `challenges/recipe-page-main` | Starter structure preserved |

## Recommended Next Steps

1. Replace each challenge's default `README.md` with your own project notes when you finish it.
2. If you start using a shared toolchain later, add it at the repository root instead of duplicating it per challenge.
3. Keep the root clean by storing only workspace-level files here.

## Formatting

This workspace uses a shared root-level Prettier setup for HTML, CSS, Markdown, JSON, and other text files.

```bash
npm install
npm run format
```

To check formatting without writing files:

```bash
npm run format:check
```
