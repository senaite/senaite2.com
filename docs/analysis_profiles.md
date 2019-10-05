---
id: analysis-profiles
title: Analysis Profiles
sidebar_label: Analysis Profiles
---

In the previous sections you added single Analyses for each Sample, which can
become difficult to manage when you have numerous *Analysis Services* in the
system. Also some labs provide package prices on tests that encompass several
Analyses instead of pricing them individually.

This is where *Analysis Profiles* come in and simplify the handling and creation
process of new created Samples. Think of *Analysis Profiles* like a "Recipe" or
a "Makefile" that defines the *Analyses* to be added.

## Add global Analysis Profiles

*Analysis Profiles* can be added globally for the whole LIMS or per *Client*.
Here we are going to add one that is available for all Client Samples.

Click on the ⚙️button in the upper right corner and chose the *Analysis Profiles*
tile and press then the *Add* Button.


![Add Analysis Profile](/screenshots/add_analysis_profilescreen.png "Add Analysis Profile")

Enter the following values in the add form:

- Title: `Total Hardness`
- Description: `Total permanent hardness of water (CACO3)`
- Profile Keyword: `TH`
- Analyses: Activate `Calcium`, `Magnesium` and `Total Hardness` from the listing
- Accounting: Activate `Use Analysis Profile Price`
- Price (excluding VAT): `25`
- VAT %: `19`
