# Instalacje
  
## Vs code
View -> Terminal (Ctrl+`)
https://code.visualstudio.com/
node -v 
v20.17.0

## Node
https://nodejs.org/en
npm -v 
10.8.2

## Git
https://git-scm.com/downloads/win
git -v 
git version 2.40.1.windows.1

F1 -> Terminal Default Profile => Bit bash

testuj-sii-playwright-listopad

# GIT
File -> Open Folder -> ...
View -> Terminal
git clone https://bitbucket.org/ev45ive/testuj-sii-playwright-listopad.git

F1 -> Git Clone -> {Wklej urk} -> Clone from URL -> Select location -> Open window

# Opcja: InteliJ keyboard shortcuts
https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings


# Playwright New Project
cd ../moj/katalog

npm init playwright@latest

Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · `TypeScript`
√ Where to put your end-to-end tests? · `tests`
√ Add a GitHub Actions workflow? (`y`/N) · `true`
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (`Y`/n) · `true`
Initializing NPM project (npm init -y)…
Wrote to C:\Projects\testuj-sii-playwright-listopad\package.json:
...

✔ Success! Created a Playwright Test project at C:\Projects\testuj-sii-playwright-listopad

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭

# Existing playwright install
git pull / clone ...

// install from package.json:
npm install 

// install browsers 
npx playwright install

# Run example tests
npx playwright test

# NVM vs FNM

## installs fnm (Fast Node Manager)
winget install Schniz.fnm
## configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression
## download and install Node.js
fnm use --install-if-missing 22

## Update GIT BASH
fnm env -> ~/.bashrc


