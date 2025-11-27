---
id: installation
title: Installation
sidebar_label: Installation
---

SENAITE is an Add-on for the [Plone Content Management Framework][PLONE] and the
installation instructions depend therefore mostly on the successful
[installation of Plone][PLONE-installation].

## Operating system

We recommend to install SENAITE on [Ubuntu][UBUNTU] or [Debian][DEBIAN] Linux.
Installation on MacOS works as well, but needs additional packages installed
via [Homebrew][HOMEBREW].

In this section we will mostly use **Ubuntu 24.02** as reference system.

The installation on other Linux distributions, MacOS or Windows is not covered here.


## A note about Versions

The current codebase of SENAITE is at the moment only compatible with the latest
version 5.2 of Plone.

**☝️Note:**
**This version of Plone works only with [Python][PYTHON] 2.x.**


## Python

Most UNIX based operating system (Linux/Mac OSX) ship already with a Python
interpreter installed. However, it is not recommended to use the system
interpreter to setup and install SENAITE on the local system.

Besides the required super-user permissions for installing additional Python
libraries is that it might get upgraded by the system and get incompatible.

Therefore, it is better to setup a virtual Python environment with one of the
following tools:

  - Virtualenv: <https://pypi.org/project/virtualenv>
  - Pyenv: <https://github.com/pyenv/pyenv>

In this manual we will use **Pyenv**.


## Initial System Setup

### Step 1: Install Basic Packages

Login into a fresh installed Ubuntu 24.02 and install some basic packages:

```shell
$ sudo apt install zsh vim git byobu net-tools tree neofetch
```

### Step 2: Install oh-my-zsh (Optional)

```shell
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

You can change the `.zshrc` config to dpoggi theme and add some aliases if desired.

### Step 3: Fix Locales Error (if required)

```shell
$ sudo apt install locales
$ sudo locale-gen de_DE.UTF-8
```


## Install Pyenv

### Step 1: Install Pyenv

```shell
$ curl https://pyenv.run | bash
```

### Step 2: Install Required Packages to Build Python

```shell
$ sudo apt install build-essential libbz2-dev zlib1g-dev libssl-dev \
  libsqlite3-dev libffi-dev uuid-dev libnss3-dev libgdbm-dev \
  libgdbm-compat-dev libncursesw5-dev liblzma-dev libreadline-dev
```

### Step 3: Update ~/.zshrc

Add the following lines to your `~/.zshrc` (or `~/.bashrc` if using bash):

```shell
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Reload your shell configuration:

```shell
$ source ~/.zshrc
```


## Install Python 2.7

### Step 1: Install Python 2.7.18

```shell
$ pyenv install 2.7.18
```

### Step 2: Create Virtual Environment

Create a virtual environment using pyenv virtualenv plugin:

```shell
$ pyenv virtualenv 2.7.18 python2.7-senaite
```

### Step 3: Activate the Virtual Environment

```shell
$ pyenv activate python2.7-senaite
```

The command `which python` can be used to check if the right Python interpreter
is active in the current session:

```shell
$ which python
/home/username/.pyenv/versions/python2.7-senaite/bin/python
```


## Install System Dependencies

Install the required dependencies for SENAITE:

```shell
$ sudo apt install libpcre3-dev libcairo2 libpango-1.0-0 libpangocairo-1.0-0
```


## Setup SENAITE

### Step 1: Create SENAITE Directory

```shell
$ mkdir senaite && cd senaite
```

### Step 2: Create buildout.cfg

Create a `buildout.cfg` file with the following content:

```config
[buildout]
index = https://pypi.org/simple/
extends = https://dist.plone.org/release/5.2.14/versions.cfg
find-links =
    https://dist.plone.org/release/5.2.14/
    https://dist.plone.org/thirdparty/

parts =
    instance

eggs =
    senaite.lims

eggs-directory = eggs
download-cache = downloads

[instance]
recipe = plone.recipe.zope2instance
http-address = 0.0.0.0:8080
user = admin:admin
wsgi = on
eggs =
    ${buildout:eggs}

[versions]
senaite.lims = 2.5.0
et-xmlfile = 1.1.0
```

### Step 3: Create requirements.txt

Create a `requirements.txt` file with the following content:

```
setuptools==44.1.1
zc.buildout==2.13.8
wheel
```

### Step 4: Install Requirements

```shell
$ pip install -r requirements.txt
```

### Step 5: Run Buildout

```shell
$ buildout -c buildout.cfg
```

**☝️Note:**
The buildout process may take several minutes to download and install all
required packages.


## Starting SENAITE

After the `buildout` command of the previous step returned without errors, you
can start SENAITE from the terminal.

To start SENAITE in foreground (debug) mode, use this command:

```shell
$ bin/instance fg
```

To stop the server, you can press `CTRL+C` on your keyboard.

**Note**
You can also start SENAITE in the background (production) mode with the command
`bin/instance start` and stop it again with `bin/instance stop`.


This will print several logs to the terminal and notifies when the server is ready with the line:

```log
2019-09-14 09:59:44 INFO Zope Ready to handle requests
```

Open a browser (Safari/Chrome/FireFox ...) and navigate to the URL http://localhost:8080

![Welcome Screen](/screenshots/welcome_screen.png "Welcome Screen")

Log in with `admin:admin` to proceed to the next page.

![Installation Screen](/screenshots/installation_screen.png "Installation Screen")

You can continue with the default settings and press the *Install SENAITE LIMS* button.
After a few moments, SENAITE should be installed and the dashboard view appears.

![Dashboard Screen](/screenshots/dashboard_screen.png "Dashboard Screen")

Congratulations 🙌 you successfully installed SENAITE LIMS on your system!

Please continue with the next sections to learn the first steps in your new system.


## Further links

- https://github.com/senaite/senaite.lims#readme
- http://www.buildout.org/en/latest/
- https://setuptools.readthedocs.io/en/latest
- https://github.com/pyenv/pyenv


[PLONE]: https://plone.org  "The Ultimate Enterprise CMS"
[PLONE-installation]: https://docs.plone.org/manage/installing/installation.html  "How to install Plone"
[PYTHON]: https://www.python.org   "Python Programming Language"
[DEBIAN]: https://www.debian.org/distrib/netinst  "Debian Linux"
[UBUNTU]: https://ubuntu.com/download/server   "Ubuntu Linux"
[HOMEBREW]: https://brew.sh "The missing package manager for macOS (or Linux)"
[PLONE-unified-installer]: https://github.com/plone/Installers-UnifiedInstaller  "Plone Unified Installer"
[BUILDOUT]: http://www.buildout.org/en/latest/  "Buildout, an automation tool written in and extended with Python"


