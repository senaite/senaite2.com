---
id: sample-analyses
title: Sample Analyses
sidebar_label: Sample Analyses
---

Analyses define the tests to be conducted on a Sample and are basically clones
of *Analysis Services*.

In the section [Quickstart into SENAITE](quickstart#add-analysis-services) you
created *Analysis Services* for `Calcium`, `Magnesium` and `Total Hardness` and
added them later to your [first Sample](quickstart#add-new-samples), where they
were transformed to *Analyses*.

Consequently, the *Analysis Service* act like templates for *Analyses*, that
were added during Sample creation or when you *Manage Analyses*.

This also means that changing the *Analysis Service* at a later point will not
change any of the *Analyses* that were created.


## Manage Analyses in Samples

Changing, adding or removing *Analyses* after the Sample was created can be done
in the Samples's *Manage Analyses* tab.

**☝️Note:**
The *Manage Analyses* tab is only visible when at least one Analysis is still in
an open state, e.g. not submitted for verification yet.

![Manage Analyses](/screenshots/sample_manage_analyses.png "Manage Analyses")

It is important to understand here that the *Manage Analyses* lists all
available *Analyses Services* (not *Analyses*).
However, the **Analyses Services* that were added as *Analyses* are preselected
in the listing.


### Remove Analyses

To remove an Analysis of a Sample, simply uncheck the checkbox of the corresponding
*Analysis Service* in the *Manage Analyses* listing.

Please uncheck the `Total Hardness` Service of this Sample and press *Save*.

![Sample Analyses](/screenshots/sample_analysis_removed.png "Sample Analyses")

The Sample now only contains the other two *Analyses* and the `Total Hardness` Analysis
have been removed from the Sample.

**☝️Note:**
Removing an Analysis from a Sample is only allowed when no Result has been submitted!

To demonstrate this, insert a Result to the `Calcium` Analysis and submit it.
Navigate then back to the *Manage Analyses* tab.

![Manage Analyses](/screenshots/sample_manage_analyses_2.png "Manage Analyses")

The checkbox of the Analysis Service for `Calcium` appears now disabled, so that
it cannot be removed anymore.


### Add Analyses

To add an Analysis to a Sample, simply check the checkbox of the corresponding
*Analysis Service* in the *Manage Analyses* listing.

Please check the `Total Hardness` Service of this Sample and press *Save*.

![Sample Analyses](/screenshots/sample_analysis_added.png "Sample Analyses")

The Sample now only contains again the `Total Hardness` Analysis.

**☝️Note:**
It is very important to understand that the re-added Analysis is created from
the newest version of the *Analysis Service*. Consequently, this is the way to
go if you want that changes done in the *Analyses Service* appear in a Sample.


### Change Analyses Properties

You may have already noticed the *Hidden* checkbox and the *Price* field in
*Manage Analyses* listing. These properties can be changed per Sample
individually to a different value than specified in the *Analyses Services*.

#### Hidden Flag

The *Hidden* flag specifies if the corresponding *Analysis* should appear in the
final *Analysis Results Report*. Checking the checkbox *hides* therefore the
Analysis.

#### Price

SENAITE provides some basic functionalities to generate *Invoices* for Analysis
Requests. The prices are calculated either on a per-Analyses base or based on
the *Analysis Profile* (more on this later). The prices are calculated either on
a per *Analysis* or on a per *Analysis Profile* basis (more on the latter one
later). Changing a price here will therefore change the invoiced price for per
Analysis invoiced Samples.

**☝️Note:**
The price field only appears if the *Include and display pricing information*
in the *Accounting Setup* is enabled.
Furthermore, this setting also affects the display of the prices in the *Request
new Analyses* form when adding new Samples.

![Accounting Setup](/screenshots/setup_accounting.png "Accounting Setup")


#### Specifications

Specifications allow to set a valid *Result Range* for Analyses (more on this
later) and can be set on a per Analysis basis as well.

The setting need to be explicitly enabled in the *Analyses Setup* by activating
the *Enable Sample Specifications* setting.

![Analyses Setup](/screenshots/setup_analyses_specifications.png "Analyses Setup")

Navigating back to the *Manage Analyses* (or reloading this view) will now
display the allowed Result Ranges Settings per Analyses.

![Manage Analyses](/screenshots/sample_manage_analyses_specs.png "Manage Analyses")

This allows to define the allowed minimum and maximum Result values and a
shoulder range, where the Result is still valid, but a warning is issued.

Congratulations 🙌 you successfully managed the Analyses in Samples.
Continue to learn more about Specifications and how they are used in SENAITE.
