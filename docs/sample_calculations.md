---
id: sample-calculations
title: Sample Calculations
sidebar_label: Sample Calculations
---

*Calculations* are a powerful tool in SENAITE to define *Analysis Services* that
take no manual input, but are calculated out of the Results of other Analyses
Results.

During this guide we created an *Analysis Service* for `Total Hardness`. However, we did
not specify a calculation so far, but would like to be it a sum of the Results
from the `Calcium` and `Magnesium` Analyses.

### Add Calculations

Navigate to the *LIMS Setup* by clicking the ⚙️ button in the upper right corner
and then on the *Calculations* tile.

![Add Calculation](/screenshots/add_calculation_screen.png "Add Calculation")

Enter the following values in the add form:

- Title: `Total Hardness`
- Description: `Calculate the total hardness of Water based on the Calcium and Magnesium Results`
- Calculation Formula `[Ca] + [Mg]`

Click the *Save* button when you are done.

**☝️Note:**
The calculation formula references the *Keywords* of the *Analysis Services* we
defined in the [Quickstart](quickstart#add-analysis-services) section earlier.
Selecting a meaningful *Analysis Service Keyword* is therefore from absolute importance,
since changing it in a later point will break existing *Calculations*!


## Using the calculation in an Analysis Service

Next we need to hook the calculation to the *Analysis Service*. Navigate to the
*LIMS Setup* and chose the *Analysis Services* tile. Select the `Total Hardness`
service from the listing and click on the *Edit* tab.

![Analysis Service Calculation](/screenshots/analysis_service_calculation.png "Analysis Service Calculation")

Navigate to the *Method* tab and deselect the option *Use the Default
Calculation of Method*. The *Calculation* selection should then be automatically
filled with our new created calculation. Press the *Save* button when you are
done.


## Applying an Analysis with a Calculation to a Sample

As already mentioned in the [Sample Analyses](sample-analyses) section, our
change in the *Analysis Service* for `Total Hardness` does not affect any
existing Analyses in our Samples.

Consequently, we must either create a new Sample with the `Total Hardness`
Analysis, e.g. by copying an existing one, or remove and re-add this Analysis
from an existing Sample .

Here we are going to create a new Sample by copying an existing one and save the
copied values without any changes and receive it afterwards.

![Sample with Calculation](/screenshots/sample_with_calculation.png "Sample with Calculation")

The *Manage Results* listing looks almost similar to the previous ones, but has
the Results field of the `Total Hardness` Analysis greyed out, so that you can
not introduce their a manual result anymore.
