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
- [Pipenv](https://pipenv.pypa.io/en/latest/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/) (If working on Windows)

## Installing Dependencies

Getting the environment set up for the bot is a kinda complex process. Rin now uses [Uvloop](https://github.com/MagicStack/uvloop), which is a drop-in replacement for [Asyncio](https://docs.python.org/3/library/asyncio.html) and is just as fast as Node.js. If you want to get set up, here are the instructions to do so:
### Windows

1. Install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/). Uvloop does not have Windows support nor does the owner want to add it.
2. Add the `software-properties-common` package first. This is required for getting `python3.10-dev` (which is the Python C Header files, required by Pycord for voice support). To do this, run this cmd:

    ```sh
    sudo apt-get install software-properties-common
    ```
    
3. Make sure to install LZMA (If on Debian/Ubuntu) and all other needed libs. The `Jamdict-Data` package requires it to unpack the SQLite3 DB. To do so, run this command:

    ```sh
    sudo apt-get install liblzma-dev lzma libffi-dev python3.10-dev
    ```

4. Install Python 3.10. Chances are the `python3.10-dev` package requires Python 3.10 as a dependency, so make sure Python 3.10 is installed. If you did it this way, you will more than likely need to get pip, and you will need to use the get-pip.py method to do so. 

5. **Skip this step if you already have pip configured and installed for Python 3.10. Run `pip3.10 --version` to check if it is installed for Python 3.10**. Chances are that you don't have pip installed for Python 3.10. So you can use either cURL or wget in order to download it. In order to do so, run this cmd:

    cURL:

    ```sh
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3.10 get-pip.py
    ```

    wget: 

    ```sh
    wget https://bootstrap.pypa.io/get-pip.py && python3.10 get-pip.py
    ```

    After doing so, make sure to run `pip3.10 --version` to double check if it is installed correctly.

6. Install [Pipenv](https://pipenv.readthedocs.io/en/latest/). To do so, run this command:

    ```sh
    sudo python3.10 -m pip install --upgrade pipenv
    ```

7. Clone this repo. If you need the cmd to do so, run this cmd:

    ```sh
    git clone https://github.com/No767/Rin.git
    ```

8. `cd` into the cloned repo and set up the pipenv enviroment. To do so, run this cmd:

    ```sh
    cd Rin && pipenv --python 3.10
    ```

9. And now finally install all the dependencies by running this command:

    ```sh
    pipenv install
    ```

10. (Optional) If you are using PyCharm, make sure to set the Python Interpreter to WSL and specify the Python interpreter to use. For this, the file path will be usually here:

    ```sh
    $HOME/.local/share/virtualenvs/[Project Name]/bin/python3.10
    ```

Or if you using VS Code, install the [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) Extension for VS Code, and follow steps 1-6. Then connect to WSL. 

### Linux
    
1. Add the `software-properties-common` package first. This is required for getting `python3.10-dev` (which is the Python C Header files, required by Pycord for voice support). To do this, run this cmd:

    ```sh
    sudo apt-get install software-properties-common
    ```
    
2. Make sure to install LZMA (If on Debian/Ubuntu). The `Jamdict-Data` package requires it to unpack the SQLite3 DB. To do so, run this command:

    ```sh
    sudo apt-get install liblzma-dev lzma libffi-dev python3.10-dev
    ```

    If you are on a different distro that doesn't use `apt` like CentOS, install LZMA like so: 

    ```sh
    yum install -y xz-devel
    ```

4. Install Python 3.10. Chances are the `python3.10-dev` package requires Python 3.10 as a dependency, so make sure Python 3.10 is installed. If you did it this way, you will more than likely need to get pip, and you will need to use the get-pip.py method to do so. 

5. **Skip this step if you already have pip configured and installed for Python 3.10. Run `pip3.10 --version` to check if it is installed for Python 3.10**. Chances are that you don't have pip installed for Python 3.10. So you can use either cURL or wget in order to download it. In order to do so, run this cmd:

    cURL:

    ```sh
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3.10 get-pip.py
    ```

    wget: 

    ```sh
    wget https://bootstrap.pypa.io/get-pip.py && python3.10 get-pip.py
    ```

    After doing so, make sure to run `pip3.10 --version` to double check if it is installed correctly.

6. Install [Pipenv](https://pipenv.readthedocs.io/en/latest/). To do so, run this command:

    ```sh
    sudo python3.10 -m pip install --upgrade pipenv
    ```

7. Clone this repo. If you need the cmd to do so, run this cmd:

    ```sh
    git clone https://github.com/No767/Rin.git
    ```

8. `cd` into the cloned repo and set up the pipenv enviroment. To do so, run this cmd:

    ```sh
    cd Rin && pipenv --python 3.10
    ```

9. And now finally install all the dependencies by running this command:

    ```sh
    pipenv install
    ```

### MacOS

**Note that I have not tested MacOS yet. If you find any errors, please let me know by submitting a GitHub Issue Report.**

1. Install Python 3.10. This can be installed with the installer or compiled from source (Or use Homebrew). Either way it doesn't matter. 
2. Install [Pipenv](https://pipenv.readthedocs.io/en/latest/). To do so, run this command:

    ```sh
    python -m pip install --upgrade pipenv
    ```

3. Clone this repo. 
4. `cd` into the cloned repo and create the Pipenv. To do so, run this command: 

    ```sh
    cd Rin && pipenv --python 3.10
    ```

5. And now install all the dependencies by running this command:

    ```sh
    pipenv install
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
