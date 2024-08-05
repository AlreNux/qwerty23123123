# Установка и настройка

## Настройка PC (Windows 10)

- Установить PowerShell Версии >= 7 [СКАЧАТЬ](https://github.com/PowerShell/PowerShell#get-powershell)
- Установите Node.JS Версии >= ^14.17.0 (LTS) [СКАЧАТЬ](https://nodejs.org/en/)
- Установите yarn командой `npm install -g yarn`
- Установите commitizen `npm install -g commitizen`

## Настройка VSCode

### Расширения

#### Обязательные

- Установите [ZipFS - a zip file system](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)
- Установите [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Установите [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Установите [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- Установите [Russian - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-russian)
- Установите [Jest](https://marketplace.visualstudio.com/items?itemName=orta.vscode-jest)
- Установите [jock.svg](https://marketplace.visualstudio.com/items?itemName=jock.svg)
- Установите [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- Установите [Create Next, React and React Native Component](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component)

#### Необязательные

- Установите [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- Установите [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- Установите [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=coenraads.bracket-pair-colorizer-2)
- Установите [Russian Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-ceintl.vscode-language-pack-ru)
- Установите [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

## Общие настройки `CTRL+SHIFT+P` -> `open settings (JSON)`

```JSON
    "files.autoSave": "afterDelay",
    "files.trimTrailingWhitespace": true,

    "git.autofetch": true,
    "git.ignoreWindowsGit27Warning": true,
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.ignoreMissingGitWarning": true,

    "search.useGlobalIgnoreFiles": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.linkedEditing": true,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.suggestSelection": "first",
    "editor.wordWrap": "on",
    "editor.fontFamily": "FiraCode-Retina, Fira Code Retina",
    "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'zero', 'onum'",
    "editor.fontWeight": "300",
    "editor.codeActionsOnSave": {
        "source.organizeImports": true
    },
    "editor.quickSuggestions": {
        "strings": true,
        "comments": true
    },
    "editor.inlineSuggest.enabled": true,

    "terminal.external.windowsExec": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",

    "cSpell.language": "en,en-GB,ru",

    "javascript.suggest.autoImports": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "typescript.suggest.autoImports": true,
    "typescript.updateImportsOnFileMove.enabled": "always",

    "eslint.alwaysShowStatus": true,
    "eslint.run": "onSave",

    "jest.autoRun": "off",

    "security.workspace.trust.untrustedFiles": "open"
```

<!-- ### Дополнительный софт -->
