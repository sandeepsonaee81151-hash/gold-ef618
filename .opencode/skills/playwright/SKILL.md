---
name: Playwright E2E Testing
description: Run and maintain browser end-to-end tests for the Sanjay Jewellery site using Playwright.
---

# Playwright E2E Testing

Use this skill when checking page behavior, navigation, responsive layout, language switching, product quick view, cart, or calculator behavior.

## Project workflow

1. Read `playwright.config.js` and tests under `tests/` before changing the suite.
2. The default base URL is the deployed Firebase site. Set `PLAYWRIGHT_BASE_URL` to a local preview URL when available.
3. Run `npm test` for the full suite, or `npx playwright test tests/home.spec.js` for the home page suite.
4. Keep tests user-visible and use accessible roles/text where practical. Avoid testing implementation-only details unless there is no stable user-facing selector.
5. Save failure screenshots and traces in Playwright's `test-results/` output. Do not commit generated test artifacts.
6. Do not deploy to Firebase as part of a test run. Deployment requires an explicit user request.

## Existing coverage

- Home page title, hero content and primary links.
- Hindi/English toggle.
- Gold rate calculator arithmetic.
- Product quick-view description and price.
- Shop page product cards and filters.

## Notes

- Gold/silver live rates depend on third-party APIs and may be unavailable in a restricted network. Tests should not require a successful live-rate response; they should verify that the UI remains usable.
- Cart and language state use `localStorage`; clear it at test start where needed.
