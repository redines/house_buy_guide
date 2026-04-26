# Copilot Commit Message Instructions

When generating Git commit messages for this repository, follow the Conventional Commits 1.0.0 specification:
https://www.conventionalcommits.org/en/v1.0.0/

## Required format

Use this exact structure:

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

## Rules

- Use one of these types when appropriate: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Keep the description concise and imperative (for example: "add mortgage calculator input validation").
- Use lowercase type and lowercase description unless a proper noun requires capitalization.
- If there is a breaking change, add `!` after type or scope and include a `BREAKING CHANGE:` footer.
- Use footers for metadata like issue references (for example: `Refs: #123`).

## SemVer mapping

Commit intent should align with Semantic Versioning:

- `feat` -> MINOR version bump
- `fix` -> PATCH version bump
- Any commit with `!` or `BREAKING CHANGE:` -> MAJOR version bump
- Other types (`docs`, `chore`, `test`, etc.) usually -> no version bump unless release policy says otherwise

## Examples

- `feat(search): add neighborhood price trend filters`
- `fix(api): handle empty financing options response`
- `feat!: remove legacy affordability endpoint`
- `refactor(ui): simplify loan summary card rendering`
- `chore(deps): update react-router to latest compatible version`

When asked to generate a commit message, always output a valid Conventional Commit and consider the SemVer impact.