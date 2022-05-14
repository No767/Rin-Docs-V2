---
title: Contributing
sidebar_position: 2
---

# Contributing

We are glad that you're willing to contribute to this project. We are usually very lenient and relaxed with the submissions of PRs, and Issues reports. But there are some stuff that you need to know before contributing.

## Requirements

To get started, you'll need these things installed: 

- [Git](https://git-scm.com/)
- [Python 3.10](https://www.python.org/)
- [Pyenv](https://github.com/pyenv/pyenv)
- [Pipenv](https://pipenv.pypa.io/en/latest/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/) (If working on Windows)

## Installing Dependencies

Getting the environment set up for the bot is a kinda complex process. Rin now uses [Uvloop](https://github.com/MagicStack/uvloop), which is a drop-in replacement for [Asyncio](https://docs.python.org/3/library/asyncio.html) and is just as fast as Node.js. If you want to get set up, here are the instructions to do so:

### Windows 

1. Install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/). Pick your distro of choice. In this example, we will use Ubuntu 22.04
2. Install the suggested build dependencies for pyenv. 

    ```sh
    sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev python3.10-dev git
    ```

3. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.4
    pyenv global 3.10.4
    pyenv rehash
    ```

4. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

5. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Rin.git && cd Rin
    ```

6. Install Pipenv

    ```sh
    pip install --upgrade pipenv
    ```

7. Create the venv and install the dependencies

    ```sh
    pipenv --python 3.10
    pipenv install --dev
    ```


### Ubuntu

1. Install the suggested build dependencies for pyenv. 

    ```sh
    sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev python3.10-dev git
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.4
    pyenv global 3.10.4
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Rin.git && cd Rin
    ```

5. Install Pipenv

    ```sh
    pip install --upgrade pipenv
    ```

6. Create the venv and install the dependencies

    ```sh
    pipenv --python 3.10
    pipenv install --dev
    ```

### OpenSUSE

1. Install the suggested build dependencies for pyenv.

    ```sh
    sudo zypper install gcc automake bzip2 libbz2-devel xz xz-devel openssl-devel ncurses-devel \
    readline-devel zlib-devel tk-devel libffi-devel sqlite3-devel python310-devel
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.4
    pyenv global 3.10.4
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Rin.git && cd Rin
    ```

5. Install Pipenv

    ```sh
    pip install --upgrade pipenv
    ```

6. Create the venv and install the dependencies

    ```sh
    pipenv --python 3.10
    pipenv install --dev
    ```

### Fedora/CentOS

1. Install the suggested build dependencies for pyenv

    Fedora 22 and above:

    ```sh
    sudo dnf install make gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel python-devel git curl
    ```

    CentOS or Fedora 22 and below:

    ```sh
    sudo yum install gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel python-devel git curl
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.4
    pyenv global 3.10.4
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Rin.git && cd Rin
    ```

5. Install Pipenv

    ```sh
    pip install --upgrade pipenv
    ```

6. Create the venv and install the dependencies

    ```sh
    pipenv --python 3.10
    pipenv install --dev
    ```

### Arch/Manjaro

1. Install the suggested build dependencies for pyenv

    ```sh
    sudo pacman -S --needed base-devel openssl zlib xz tk python libffi
    ```

2. Install Pyenv. Also make sure to follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

    ```sh
    curl https://pyenv.run | bash
    pyenv update
    pyenv install 3.10.4
    pyenv global 3.10.4
    pyenv rehash
    ```

3. Restart your shell (make sure you have added it to your path and configured it either in your `.zshrc`, or `.bashrc` files)
    
    ```sh
    exec "$SHELL"
    ```

4. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Rin.git && cd Rin
    ```

5. Install Pipenv

    ```sh
    pip install --upgrade pipenv
    ```

6. Create the venv and install the dependencies

    ```sh
    pipenv --python 3.10
    pipenv install --dev
    ```

### MacOS

1. Install Xcode Command Line Tools (`xcode-select --install`) and [Homebrew](https://brew.sh/)

2. Install the suggested build dependencies for pyenv

    ```sh
    brew install openssl readline sqlite3 xz zlib tcl-tk git curl
    ```
3. Install Pyenv via Homebrew

    ```sh
    brew update
    brew install pyenv
    ```

4. Install Python

    ```sh
    pyenv update
    pyenv install 3.10.4
    pyenv global 3.10.4
    pyenv rehash
    ```

5. Follow the rest of the steps, starting on [Set Up Your shell Environment For Pyenv](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

6. Fork and clone the repo

    ```sh
    git clone https://github.com/[username]/Rin.git && cd Rin
    ```

7. Install Pipenv

    ```sh
    pip install --upgrade pipenv
    ```

8. Create the venv and install the dependencies

    ```sh
    pipenv --python 3.10
    pipenv install --dev
    ```

## Pull Requests and Commits

You have 2 option: Fork the repo and make a pull request back into the main one, or commit to the branch directly. Option 2 is preferred.

## Formatting

This projects uses a ton of linters and formatters. The main formatters are Black, AutoPEP8, and Isort. And there are a lot of linters as well. Most of them are from Codefactor, Codacy, and Deepsource. You don't have to worry about them because they are set up as formatters on the CI/CD workflow. Meaning that once it is done, all the code is formatted already.

## Patches

In order to prevent merge conflicts for the upstream project [Kumiko](https://github.com/No767/Kumiko), all major changes for Rin needs to be added as a patch file (make sure that you make the commit first). To create one, run this cmd:

```sh
git format-patch -1 -o ./Patches
```

Make sure that it is either outputting it to the `Patches` directory, or that you are in the `Patches` directory. This will create a patch file, and you can use that to push to the main repo. From downstream, this cmd can be run:

```sh
git apply [patch file]
```

This allows for synchronization between both projects without constantly creating merge conflicts. Make sure that this is for the main code changes, not for other files like `README.md` or `LICENSE`. If there is a new Cog, then you probably don't have to create a patch file for it
## Tips about the Formatters

If you send a commit that has changes to the code, the Formatters will start kicking in. These exist as a CI Workflow, so make sure to wait 2-3 mins before you make any single change to the code. If you decide to commit and change a part of the main cogs, it will start complaining about merge conflicts. The workflow only formats the Cogs folder.

## Issue and Feature Requests Reports

If there is an issue or a feature you want to be added, use the built-in GitHub issue tracker. Though a system like Jira could be used, it would be more efficient to just use the issue tracker that GitHub provides.

- If submitting a issue report, follow the template. Duplicates will not receive support
- If submitting a feature request, follow the template as well. As with issue reports, duplicate requests will not receive support

## Releasing Tags
In order to automate the release system, you have to make sure that in order to use it, the git commit message must be done correctly. Only use this if there is a new update that is ready to be released. These are pretty similar to [Angular's Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). Here's a table that should help with explaining this:

| Type of Release, Update, or Patch | Example |
|              :--:                 | :--:    |
| Major Release                     | `Release: v3.0.0` |
| Minor Release                     | `Update: v3.1.0`|
| Patch Release                     | `Fix: Instagram API Cog removal` |


## Git Commit StyleGuides

- If updating any other files that aren't project files or not important (stuff like README.md, contributing.md, etc), add the [skip ci] label in the front
- With each new commit, the message should be more or less describing the changes. Please don't write useless commit messages...
- If releasing tags, have it in this style. `Release: [insert what changed here]`, `Update: [insert what changed here]`, and `Fix: [insert what changed here]`. Release is a major release. This means it bumps from 1.0 to 2.0. Minor means it bumps up the version from 1.4 to 1.4.1 for example. And fix just applies a patch, which would be 1.4.1 to 1.4.1.1.
