---
id: analysis-categorization
title: Analysis Categorization
sidebar_label: Analysis Categorization
---

*Analysis Services* can be categorized to be better manageable and sortable.
In the section [Quickstart into SENAITE](quickstart#add-analysis-categories) you
created already category named `Water Chemistry`.

However, we did not activate yet the categorization, so all Analysis Services
appeared ungrouped in the listings.


## Activate Analysis Categorization

Click on the ⚙️button in the upper right corner and chose the *Setup* tile.
Navigate to the *Analyses* tab and activate the checkbox *Categorise analysis
services* and press the *Save* button afterwards.

![Activate Analysis Categorization](/screenshots/setup_analyses_categorization.png "Activate Analyses Categorization")

Move now back to the *Analysis Services* listing and see how the Analyses
Services are grouped together *Water Chemistry*. By default the Category rows
appear collapsed, but clicking on it expands the group.

![Categorized Analysis Services](/screenshots/analysis_services_listing_categorized_collapsed.png "Categorized Analysis Services")
![Categorized Analysis Services](/screenshots/analysis_services_listing_categorized_expanded.png "Categorized Analysis Services")


## Sorting Categories

*Analysis Categories* are per default sorted alphabetically. However, you may
also define a *Sort Key* to override the default sorting behavior.


## Adding more Categories

Let's extend the example a little bit by adding another department and category.

Add another *Analysis Category* for `Microbiology` (revisit the [Quickstart into
SENAITE](quickstart#add-analysis-categories) guide how to create a new *Analysis
Category*)

Also add the following *Analysis Services* to the System:

- Title: `Salmonella`
- Analysis Keyword: `Salmon`
- Point of Capture: `Lab`
- Analysis Category: `Microbiology`

Per default the category `Microbiology` appears now *before* `Water Chemistry`.

![Categorized Analysis Services](/screenshots/analysis_services_listing_categorized_2.png "Categorized Analysis Services")

Now we are going to add a *Sort Key* to the `Water Chemistry` category by
navigating to the *Edit* tab of this category and put the `100` as *SortKey*.

![Edit Analysis Category](/screenshots/edit_analysis_category_sortkey.png "Edit Analysis Category")

Navigate now back to the *Aanlysis Services* listing to verify the result.

![Categorized Analysis Services](/screenshots/analysis_services_listing_categorized_sortkey.png "Categorized Analysis Services")

**☝️Note:**
The *Sort Key* is a floatable number that get *prepended* to the category name,
e.g. `100.0Water_Chemistry`. Consequently, categories with *Sort key* will be
always listed *before* categories with no *Sort Key* set.

Congratulations 🙌 you successfully learned how to categorize *Analysis
Services* and how to use the *Sort Key* to override the sort order of the
categories.
