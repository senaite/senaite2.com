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

In this secion we will mostly use Ubuntu as reference system.

The installation on other Linux distributions, MacOS or Windows is not covered here.


## A note about Versions

The current codebase of SENAITE is at the moment only compatible with the latest
version 4 of Plone. This version of Plone works only with [Python][PYTHON] 2.x.


## Python

Most UNIX based operating system (Linux/Mac OSX) ship already with a Python
interpreter installed. However, it is not recommended to use the system
interpreter to setup and install SENAITE on the local system.

Besides the required super-user permissions for installing additional Python
libraries is that it might get upgraded by the system and get incompatible.

Therefore, it is better to setup a virtual Python environment with one of the
following tools:

-   Virtualenv: <https://pypi.org/project/virtualenv>
-   Miniconda: <https://conda.io/miniconda.html>

In this manual we will use Miniconda.


## Miniconda

Please use your terminal to run the commands listed below.

1.  Download the `Python 2.7` version for your operating system
2.  Create a virtual environment with `conda create --name senaite`
3.  Activate the environment with `conda activate senaite`

The command `which python` can be used to check if the right Python interpreter
is active in the current shell:

```shell
$ which python
~/miniconda2/envs/senaite/bin/python
```


```shell
$ python
Python 2.7.16 |Anaconda, Inc.| (default, May  1 2018, 18:37:05)
[GCC 4.2.1 Compatible Clang 4.0.1 (tags/RELEASE_401/final)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```


## Install dependencies

Install the required dependencies for SENAITE:

```shell
sudo apt install build-essential
sudo apt install python2.7 python2.7-dev
sudo apt install libxml2 libxml2-dev libxslt1.1 libxslt1-dev
sudo apt install libffi-dev libcairo2 libpango-1.0-0 libgdk-pixbuf2.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0
```


## Download the Plone unified installer

The [Plone Unified Installer][PLONE-unified-installer] installs Plone and its
dependencies from source on most Unix-like platforms.

```
wget --no-check-certificate https://launchpad.net/plone/4.3/4.3.18/+download/Plone-4.3.18-UnifiedInstaller.tgz
tar xzf Plone-4.3.18-UnifiedInstaller.tgz
cd Plone-4.3.18-UnifiedInstaller
```


## Install Plone

Next step is to install Plone with the provided `install.sh` shell script:

```shell
./install.sh standalone --target=/home/senaite --instance=senaitelims --password=admin
```

**Note**
We install SENAITE in the directory `/home/senaite` and we have set the admin
password to `admin`


## Install SENAITE

To install SENAITE we need to modify the generated `buildout.cfg` config file.
[Buildout][BUILDOUT] is an automation tool written in and extended with Python:

```shell
cd /home/senaite
vim buildout.cfg
```

Add `senaite.lims` to the `eggs` section of the file:

```config
[buildout]
...
eggs =
    ...
    senaite.lims
zcml =
...
```

Re-run the `buildout` script:

```shell
PYTHONHTTPSVERIFY=0 bin/buildout
```

Also see here: https://github.com/senaite/senaite.lims#readme


## Starting SENAITE

After the `buildout` command of the previous step returned without errors, you
can start SENAITE from the terminal.

To start SENAITE in foreground (debug) mode, use this command:

```shell
bin/instance fg
```

To stop the server, you can press `CTRL+C` on your keyboard.

**Note**
You can also start SENAITE in the background (production) mode with the command
`bin/instance start` and stop it again with `bin/instance stop`.


This will print several logs to the terminal and notifies when the server is ready with the line:

```
2019-09-14 09:59:44 INFO Zope Ready to handle requests
```

Open a browser (Safari/Chrome/FireFox ...) and navigate to the URL http://localhost:8080

![Welcome Screen](/screenshots/welcome_screen.png "Welcome Screen")

Log in with `admin:admin` to proceed to the next page.

![Installation Screen](/screenshots/installation_screen.png "Installation Screen")

You can continue with the default settings and press the "Install SENAITE LIMS" button.
After a few moments, SENAITE should be installed and the dashboard view appears.

![Dashboard Screen](/screenshots/dashboard_screen.png "Dashboard Screen")

Congratulations 🙌 you successfully installed SENAITE LIMS on your system!

Please continue with the next sections to learn the first steps in your new system.



[PLONE]: https://plone.org  "The Ultimate Enterprise CMS"
[PLONE-installation]: https://docs.plone.org/4/en/manage/installing/installation.html#how-to-install-plone  "How to install Plone 4"
[PYTHON]: https://www.python.org   "Python Programming Language"
[DEBIAN]: https://www.debian.org/distrib/netinst  "Debian Linux"
[UBUNTU]: https://ubuntu.com/download/server   "Ubuntu Linux"
[HOMEBREW]: https://brew.sh "The missing package manager for macOS (or Linux)"
[PLONE-unified-installer]: https://github.com/plone/Installers-UnifiedInstaller  "Plone Unified Installer"
[BUILDOUT]: http://www.buildout.org/en/latest/  "Buildout, an automation tool written in and extended with Python"


