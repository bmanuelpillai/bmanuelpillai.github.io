# Python Environments

### Using Poetry and Conda to Manage Dependencies

### Going From R to Python

R is great but there are many packages that python has that R does not, especially when it comes to machine
learning
(scikit learn, PyTorch, etc.).
One the biggest sticking points I experienced from going from R to python is managing virtual environments and
dependencies. In R a lot of this is done behind the scenes and you often do not have to worry about using an
explicit
package version for your code. Although in Python it is important to download specific versions of your
dependencies for
each project.
One method I really like it using poetry environments.

### Poetry Installation

- Download [Python](https://www.python.org/downloads/) onto your computer
- You want to get a [package manager](https://pip.pypa.io/en/stable/installation/)for Python on your computer
- Follow these instructions to get [Poetry](https://python-poetry.org/docs/) on your
  computer

### General Workflow using Poetry

```
  # set up poetry and virtual environment for your repo
  poetry init
  poetry lock
  poetry env activate
  source .venv/bin/activate
  # this should create a poetry.toml file and a lock file

  # Add packages to your poetry environment
  poetry add
  poetry update
```

Use pyenv if you need to use a different version of python than the one that is on your system.

### Use Conda to Manage Dependencies for all Programming languages

Conda is similar to poetry just can be for more than just python package packages. I think both are really good and knowing a bit about both can allow you to use whatever the rest of your team is using.

```
    # Create a new conda environment
    conda create --name myenv python=3.9

    # Activate the environment
    conda activate myenv

    # Install packages in your conda environment
    conda install package_name

    # Export environment for reproducibility
    conda env export > environment.yaml

    # Create environment from file
    conda env create -f environment.yaml

    # Update all packages in the environment
    conda update --all

    # Remove an environment
    conda env remove --name myenv
```

[Back to Top](#)
