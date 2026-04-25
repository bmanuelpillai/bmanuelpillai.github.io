# Data Manipulation in R and Python

*Get Comfortable Working with Data in R and Python*

### Cleaning and Visualizing Data

The best place to start working with data is to clean and visualize it. You should calculate descriptive
statistics on your dataset before running any statistical tests.

### Tidyverse (R)

Learning the Tidyverse is a great way to write clean, readable R code for data manipulation. It also works
seamlessly with ggplot2 for data visualization.

I recommend starting with this [course](https://american-stat-412612.netlify.app/) and
this associated YouTube series [by Kelsey Codes](https://www.youtube.com/playlist?list=PL6FsZxVq54ERrlMRNE5aq2qUFH042fbuM).
The course quickly introduces you to Tidyverse and ggplot and provides practical exercises.

#### Frequently Used Tidyverse Functions

- select(): Choose specific columns
- filter(): Filter rows based on conditions
- mutate(): Create or transform variables
- arrange(): Sort data by column values
- pivot\_longer(): Reshape wide data into long format
- pivot\_wider(): Reshape long data into wide format
- ggplot(): Build layered plots using + to add elements

You should also look into creating [Quarto](https://quarto.org/docs/computations/r.html) or [Rmarkdown](https://www.datacamp.com/tutorial/r-markdown-tutorial) files to present your code in a nice looking report

### Pandas (Python)

Data manipulation in Python using pandas is conceptually similar to using base R or the Tidyverse.
Once you're comfortable with one language, transitioning to the other becomes easier.

#### Frequently Used Pandas Functions

- df[['col1', 'col2']]: Select specific columns
- df[df['col'] == value]: Filter rows based on conditions
- df.assign(): Create or modify columns
- df.sort\_values(): Sort data by column values
- df.melt(): Reshape wide data into long format
- df.pivot() or df.pivot\_table(): Reshape long data into wide format
- df.plot() or use seaborn/matplotlib: Create plots (analogous to ggplot)

[Back to Top](#)
