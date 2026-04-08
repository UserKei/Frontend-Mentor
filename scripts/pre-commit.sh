#!/bin/sh

set -eu

repo_root=$(git rev-parse --show-toplevel)
cd "$repo_root"

staged_files=$(git diff --cached --name-only --diff-filter=ACMR)

if [ -n "$staged_files" ]; then
  prettier_files=$(printf '%s\n' "$staged_files" | rg '\.(css|html|js|json|jsx|md|scss|ts|tsx|yaml|yml)$' || true)
  dart_files=$(printf '%s\n' "$staged_files" | rg '^flutter/recipe_page/.*\.dart$' || true)
  swift_files=$(printf '%s\n' "$staged_files" | rg '^ios/RecipePage/.*\.swift$' || true)

  if [ -n "$prettier_files" ]; then
    printf '%s\n' "$prettier_files" | xargs npx prettier --write
  fi

  if [ -n "$dart_files" ]; then
    printf '%s\n' "$dart_files" | xargs dart format
  fi

  if [ -n "$swift_files" ]; then
    printf '%s\n' "$swift_files" | xargs swift format format -i
  fi

  printf '%s\n' "$staged_files" | xargs git add
fi
