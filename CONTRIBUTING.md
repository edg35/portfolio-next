# Semantic Release Setup

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated version management and changelog generation.

## Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature (triggers a minor release)
- **fix**: A bug fix (triggers a patch release)
- **docs**: Documentation only changes (triggers a patch release)
- **style**: Changes that don't affect code meaning (triggers a patch release)
- **refactor**: Code change that neither fixes a bug nor adds a feature (triggers a patch release)
- **perf**: Performance improvements (triggers a patch release)
- **test**: Adding or updating tests
- **build**: Changes to build system or dependencies
- **ci**: Changes to CI configuration
- **chore**: Other changes that don't modify src or test files

### Breaking Changes

To trigger a major release, add `BREAKING CHANGE:` in the footer or add `!` after the type:

```
feat!: major change to API

BREAKING CHANGE: API endpoints have been restructured
```

## Examples

```bash
# Triggers a patch release
git commit -m "fix: resolve hydration error in page component"

# Triggers a minor release
git commit -m "feat: add new contact form component"

# Triggers a major release
git commit -m "feat!: redesign entire portfolio layout"

# No release
git commit -m "chore: update README"
```

## How It Works

1. **Automatic**: When you push to the `main` branch, GitHub Actions will automatically:
   - Analyze your commits
   - Determine the next version number
   - Generate/update CHANGELOG.md
   - Create a GitHub release
   - Update package.json version

2. **Manual**: You can also run semantic-release locally:
   ```bash
   npm run semantic-release
   ```

## First Release

To create your first release:

1. Make sure all changes are committed following the convention
2. Push to main branch
3. The workflow will create your first release

## Configuration

- `.releaserc.json` - Semantic release configuration
- `.github/workflows/release.yml` - GitHub Actions workflow
- `CHANGELOG.md` - Auto-generated changelog
