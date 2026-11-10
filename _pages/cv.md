---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **Ph.D. in Epidemiology**, Rollins School of Public Health, Emory University, 2025–present
  * Coursework: Probability Theory for Epidemiology, Teaching Epidemiology, Bias Analysis, Advanced Epidemiological Methods II, Causal Inference
* **M.P.H. in Epidemiology**, Rollins School of Public Health, Emory University, 2024
  * Infectious Disease Epidemiology Certificate; Rollins Earn and Learn Award; Student Honor Council
* **B.S. in Environmental Health**, minor in Psychology as a Social Science, University of Rochester, 2022
  * High Distinction; Bausch & Lomb Honorary Science Award

Research experience
======
* **Research Assistant, EpiModel Research Lab**, Emory University, August 2026–present
  * Building an extension to the EpiModelHIV R package to model the effect of DoxyPEP on STIs and HIV
  * Writing shell scripts to run simulations on the HPC cluster and visualize results
  * Writing a manuscript comparing DoxyPEP indication rules and their effect on gonorrhea, chlamydia, and syphilis transmission

* **Research Assistant, Lopman Lab**, Emory University, May 2026–present
  * Aggregating MMR vaccination coverage for over 3,000 counties (2018–2025) using Epic Cosmos SlicerDicer
  * Writing a manuscript on the strengths and weaknesses of EHR data for estimating population-level vaccination coverage
  * Building Bayesian beta regression models to impute county-level MMR coverage

* **Ferguson Emerging Infectious Diseases Graduate Fellow**, Center for Forecasting and Outbreak Analytics, CDC, June 2024–May 2025
  * Extended CFA's mpox clade I network model to incorporate differential mixing by treatment-seeking status
  * Quantified network assortativity using EpiModel and igraph; extended the epimodel-mpox R package
  * Ran 1,000 outbreak simulations in parallel on Microsoft Azure Batch with Docker containers
  * Added unit tests and a CI/CD pipeline with pre-commit hooks and GitHub Actions
  * Estimated MSM population sizes in large counties using American Community Survey data and the US Census Bureau API

* **Research Assistant, EpiModel Research Lab**, Emory University, September 2023–May 2024
  * Analyzed the American Men's Internet Survey (AMIS) and modeled drivers of PrEP discontinuation with logistic regression
  * Tested the EpiModelHIV R package for syphilis modeling and contributed to its documentation

* **Research Intern**, National Institute of Allergy and Infectious Diseases, May 2023–August 2023
  * First author on a literature review of persistent positivity and reinfection with COVID-19 in immunodeficient people
  * Analyzed B and T cell responses in immunodeficient individuals with repeat or persistent SARS-CoV-2 positivity

* **Research Assistant, Leslie Lab**, Emory University, August 2022–May 2023
  * Conducted a GWAS of common variants associated with orofacial clefts in the Filipino population (Gabriella Miller Kids First)

* **Intern**, Arnot Ogden Medical Center, May 2019–July 2019
  * Built an audit system for the rapid response team and a policy to reduce bed-cleaning turnaround

Fellowships
======
* **Ferguson RISE Graduate Fellowship** (CDC-funded), June 2024–May 2025
  * Teaching for Diversity & Social Justice: weekly discussions on health equity; led a session on religious oppression in the U.S.
  * Research Symposium: created a website on programming tools for data scientists

Academic projects
======
* **EPI 598R: MPH Thesis Research** (2023–2024): time-series analysis of medical encounters through TRICARE before and after COVID-19 NPIs, published in *The Journal of Infectious Diseases* (2025)
* **EPI 570: Infectious Disease Dynamics** (2024): SEIR model of HPV and the impact of increased childhood vaccination
* **DATA 532: Advanced GIS** (2024): spatial analysis of the 1854 London cholera outbreak in R
* **EPI 537: Epidemiology of Chronic Diseases** (2023): literature review on outdoor air pollution and childhood asthma

Skills
======
* **Proficient:** R (dplyr, EpiModel, ggplot2, Roxygen, renv), Python (NumPy, Pandas, Scikit-Learn, Conda), Git, Bash, GitHub Actions, Docker, Microsoft Azure Batch, LaTeX, Typst, Vim, Claude Code
* **Familiar:** ArcGIS Pro, SAS, Microsoft Azure Data Explorer

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Service
======
* **All Campus Judicial Council**, University of Rochester, May 2020–May 2022
