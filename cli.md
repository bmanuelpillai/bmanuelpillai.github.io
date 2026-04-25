# Command Line Tools

*Get Fast with the CLI*

### Why Learn to Use CLI tools

After spending some time programming you'll want to get faster at general routine tasks and you'll want to be able
to easily explain what you did to someone else.
I think graphical user interfaces are great when you are first learning an application, which is why I started my
Version Control article with GitHub Desktop, but if you get comfortable with command line tools you can get a lot
faster
at your work and easy have someone reproduce what you did without having to point and click.

### Getting Good with your Terminal

Learning to navigate through your computer's file system using linux commands opens up several doors for you,
with the main benefit being opening you up to use

### `pwd` (Print Working Directory)

This command shows your current location in the file system.

```
$ pwd
  /Users/username/Documents
```

### `ls` (List)

Lists all files and directories in your current location.

```
$ ls
  Desktop  Documents  Downloads  Pictures
```

Add options like `-l` for detailed view or `-a` to show hidden files:

```
$ ls -la
```

### `cd` (Change Directory)

Moves you to a different directory.

```
$ cd Documents
```

### `cd ..`

Moves up one directory level (to the parent directory).

```
$ cd ..
```

## File Management

### `mv` (Move)

Moves files or directories to a new location, or renames them.

```
  # Move a file
  $ mv file.txt Documents/

  # Rename a file
  $ mv oldname.txt newname.txt
```

## Package Management

### `pip`

Package installer for Python. Use it to install Python libraries.

```
  # Install a package
  $ pip install numpy

  # List installed packages
  $ pip list
```

### `brew` (Homebrew)

Package manager for macOS (and Linux). Use it to install software.

```
  # Install software
  $ brew install git

  # Update Homebrew
  $ brew update

  # Upgrade installed packages
  $ brew upgrade
```

## Tips for Effective Terminal Use

- Tab to autocomplete (useful for completing file paths)
- Press the up arrow to recall previously commands
- Use `clear` to clear screen
- Create aliases for frequently used commands in your `.bashrc` or `.zshrc` file

## Introduction to Shell Scripts

It is also useful to learn writing shell scripts which can be used to automate tasks such as managing backups,
batch-renaming files, setting up development environments, automating data processing pipelines, scheduling repetitive
tasks with cron, and even simplifying complex command sequences into single, reusable scripts.

I typically create bash scripts when I want to rerun R scripts with different parameter combinations on a computing cluster.

Here is a good resource on learning about bash scripts: [link](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/)
