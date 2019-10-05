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
a "Makefile" that defines the *Analyses* to be added to a Sample.

## Add global Analysis Profiles

*Analysis Profiles* can be added globally for the whole LIMS or per *Client*.
Here we are going to add one that is available globally.

Click on the ⚙️button in the upper right corner and chose the *Analysis Profiles*
tile and press then the *Add* Button.

![Add Analysis Profile](/screenshots/add_analysis_profile_screen_default.png "Add Analysis Profile")
![Add Analysis Profile](/screenshots/add_analysis_profile_screen_analyses.png "Add Analysis Profile")
![Add Analysis Profile](/screenshots/add_analysis_profile_screen_accounting.png "Add Analysis Profile")

Enter the following values in the add form:

- Title: `Total Hardness`
- Description: `Total permanent hardness of water (CACO3)`
- Analyses: Activate `Calcium`, `Magnesium` and `Total Hardness` from the listing
- Accounting: Activate `Use Analysis Profile Price`
- Price (excluding VAT): `25`
- VAT %: `19`


## Apply an Analysis Profile to a Sample

Now it is time to apply the *Analysis Specification* to a Sample. Navigate to
the Samples tab of our Happy Hills Client and create a new Sample.

Add the new created *Analysis Profile* in the corresponding field.

![Add Sample with Profile](/screenshots/add_sample_with_profile.png "Add Sample with Profile")

Scroll now down to the *Lab Analyses* row and click it to expand the selected
Analyses. The Analyses from our previously created *Analysis Profile* were
selected automatically and clicking on the 🛈 Button will show you that their
origin is the *Total Hardness* profile.

![Add Sample with Profile](/screenshots/add_sample_with_profile_analyses.png "Add Sample with Profile")

**☝️Note:**
Analyses coming from an *Analysis Profile* cannot be deselected and are
therefore locked (symbolized with the 🔒 icon).
Removing them would require to remove the corresponding *Analysis Profile* first.

Also note that the price has been taken from the profile.

![Add Sample with Profile](/screenshots/add_sample_with_profile_price.png "Add Sample with Profile")

Add now the remaining required fields and press the *Save* button when you are
done.

Navigate now to the new created Sample View to inspect the Sample Metadata.

![Sample with Profile View](/screenshots/sample_with_profile_view.png "Sample with Profile View")

**☝️Note:**
Although most of the Sample fields can be modified after creation, *Analysis
Profiles* can not. Therefore, if an Analysis Profile has been erroneous added,
the whole Sample has to be cancelled and recreated with the right Profile(s).

Congratulations 🙌 you successfully learned the advantages of using *Analysis Profiles* 
