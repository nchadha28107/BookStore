# Book Store Web Automation Project with Cypress

This project provides a framework for web automation testing using Cypress.

## Project Structure

The project follows a standard Cypress structure:

```
.
├── cypress
│   ├── fixtures          # Contains data files (e.g., JSON for test data)
│   │   └── books.json
│   │   └── login.json
│   ├── integration       # Contains feature files for tests
│   │   └── bookStore.feature
│   ├── support           # Contains supporting files
│   │   ├── config
│   │   │   └── urls.json # Store URLs for different environments
│   │   ├── locators          # Page locators
│   │   │   ├── home.locators.ts
│   │   │   ├── bookStore.locators.ts
│   │   │   ├── login.locators.ts
│   │   ├── pages             # Page Object Model (POM) classes
│   │   │   ├── home.page.ts
│   │   │   ├── bookStore.page.ts
│   │   │   ├── login.page.ts
│   │   ├── step_definitions  # Cucumber step definitions
│   │   │   ├── home.steps.ts
│   │   │   ├── bookStore.steps.ts
│   │   │   ├── login.steps.ts
│   │   ├── commands.ts        # Custom Cypress commands
│   │   └── e2e.ts             # Cypress configuration and imports
├── .gitignore
├── cypress.config.ts    # Cypress configuration file
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration file
```

## Benefits

*   **Easy to Use:** Cypress is known for its straightforward API and ease of setup.
*   **Fast and Reliable:** Cypress offers fast, reliable testing with features like automatic waiting and retries.
*   **Developer-Friendly:** Provides excellent debugging tools and a time travel feature.
*   **Modular and Reusable:** The use of Page Object Model (POM) makes the code modular and easier to maintain.
*   **Cross-Browser Compatibility:** Can be used on multiple browsers.
*   **Responsive Testing:** Provides tools for testing the application on different screen sizes and devices.

## Technologies Used

*   **TypeScript:** The primary programming language.
*   **Cypress:** The end-to-end testing framework.
*   **Cucumber:** For Behavior-Driven Development (BDD).
*   **Node.js and npm/yarn:** For package management.

## Setup

1.  **Prerequisites:**
    *   Node.js (v14 or higher) and npm or yarn.

2.  **Installation:**
    *   Clone the repository: `git clone https://github.com/nchadha28107/BookStore.git`
    *   Navigate to the project directory
    *   Install dependencies: `npm install` or `yarn install`

3.  **Test Data Configuration:**
    *   Manually create a new user at https://demoqa.com/register
    *   Update the credentials in `cypress/fixtures/login.json`:
        ```json
        {
          "username": "your_username",
          "password": "your_password"
        }
        ```

## Running the Tests

You can run the tests using the following commands:

*   **Run all tests in headless mode (command line):**
    ```bash
    npx cypress run
    ```

*   **Open Cypress Test Runner (GUI):**
    ```bash
    npx cypress open
    ```

## Environment Configuration

The project supports different environments (e.g., `dev`, `staging`, `production`). The default environment is `dev`. You can specify the environment using the `--env` flag:

*   **Run tests against the development environment:**
    ```bash
    npx cypress run --env environment=dev
    ```
    *   `dev` is the default, so you don't strictly need to specify this unless you want to be explicit.
    *   You can change URLs for each environment inside `cypress/support/config/urls/urls.json`.

## Cross-Browser Testing

Cypress supports cross-browser testing. You can specify the browser to run tests on using the `--browser` flag:

*   **Run tests in Chrome:**
    ```bash
    npx cypress run --browser chrome --env environment=dev
    ```

*   **Run tests in Edge:**
    ```bash
    npx cypress run --browser edge --env environment=dev
    ```

*   **Run tests in Firefox:**
    ```bash
    npx cypress run --browser firefox --env environment=dev
    ```

*   **Run tests in Electron (default):**
    ```bash
    npx cypress run --env environment=dev
    ```
    *   Electron is the default browser if no browser is specified.

## Viewport Configuration

The tests are designed to be responsive.  You can specify the viewport (screen size) for the tests using the `--env` flag along with the `device` parameter:

*   **Run tests with an iPhone XR viewport:**
    ```bash
    npx cypress run --env environment=dev,device=iphone-xr
    ```

*   **Run tests with a Macbook-15 viewport:**
    ```bash
    npx cypress run --env environment=dev,device=macbook-15
    ```
    *   `macbook-15` is the default if no device is specified.

**Available Viewport Presets:**

The following presets are available for viewport configuration:

| Preset          | width | height |
| --------------- | ----- | ------ |
| ipad-2          | 768   | 1024   |
| ipad-mini       | 768   | 1024   |
| iphone-3        | 320   | 480    |
| iphone-4        | 320   | 480    |
| iphone-5        | 320   | 568    |
| iphone-6        | 375   | 667    |
| iphone-6+       | 414   | 736    |
| iphone-7        | 375   | 667    |
| iphone-8        | 375   | 667    |
| iphone-x        | 375   | 812    |
| iphone-xr       | 414   | 896    |
| iphone-se2      | 375   | 667    |
| macbook-11      | 1366  | 768    |
| macbook-13      | 1280  | 800    |
| macbook-15      | 1440  | 900    |
| macbook-16      | 1536  | 960    |
| samsung-note9   | 414   | 846    |
| samsung-s10     | 360   | 760    |

## Reporting

The test results are generated at `cypress/reports`
*   **Cucumber HTML Report:**
    The Cucumber HTML report is generated at `cypress/reports/html/cucumber.html`. This report provides detailed information about the test execution, including the steps executed, their statuses, and any errors that occurred.
*   **Test Videos:**
    Cypress automatically captures test videos and saves them at `cypress/reports/videos`. These videos can be used for debugging and analyzing test failures.
*   **Screenshots:**
    Cypress automatically captures screenshots on test failures and saves them at `cypress/reports/screenshots/`. This helps in identifying the exact state of the application when a test fails.
*   **Book Details File:**
    The extracted book details (Title, Author, Publisher) are saved at `cypress/reports/book-details.json`.

Note: These reports are not published to GitHub.

## Conclusion

This project provides a robust framework for web automation testing using Cypress. The project structure is well-organized, making it easy to maintain and extend. With the reporting features, you can easily track test execution and analyze failures.