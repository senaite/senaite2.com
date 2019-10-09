---
id: analysis-templates
title: Analysis Templates
sidebar_label: Analysis Templates
---

Analysis templates are kind-of similar to [Analysis
Profiles](analysis-profiles), but allow the values to be changed when adding new
Samples and to pre-define [Sample Partitions](sample-partitions) as well as the
selected analyses per partition.

Another key difference to [Analysis Profiles](analysis-profiles) is that only
one *Analysis Template* can be added when adding a new Sample.


## Add global Analysis Templates

*Analysis Templates* can be added globally for the whole LIMS or per *Client*.
Here we are going to add one that is available globally.

Click on the ⚙️button in the upper right corner and chose the *Analysis Templates*
tile and press then the *Add* Button.

![Add Analysis Template](/screenshots/add_analysis_template_screen_default.png "Add Analysis Template")
![Add Analysis Template](/screenshots/add_analysis_template_screen_partitions.png "Add Analysis Template")
![Add Analysis Template](/screenshots/add_analysis_template_screen_analyses.png "Add Analysis Template")

Enter the following values in the add form:

- Title: `Standard Water Template`
- Description: `This template defines two partitions to split the chemical analyses from the microbiological analyses`
- Analyses: Activate `Calcium`, `Magnesium`, `Total Hardness` and `Salmonella` from the listing
- Sample Partitions: Press two times the more button and select the Sample type
  `Water` for the rows `part-1` and `part-2`.
  Also enable the Option *Auto-partition on receive*

Press the *Save* button when you are done.

**☝️Note:**
Analyses can be first assigned to partitions *after* the template was initially
saved with the initially set partitions.

Press the *Edit* tab again and navigate to the *Analyses* tab to assign the
selected analyses to the partitions.

![Add Analysis Template](/screenshots/add_analysis_template_screen_analyses2.png "Add Analysis Template")

Now assign the `Salmonella` Analysis to the second Partition and press the
*Save* button when you are done.

## Apply an Analysis Template to a Sample

Now it is time to apply the *Analysis Specification* to a Sample. Navigate to
the Samples tab of our Happy Hills Client and create a new Sample.

Add the new created *Analysis Template* in the corresponding field.

![Add Sample with Template](/screenshots/add_sample_with_template.png "Add Sample with Template")

Add now the remaining required fields and press the *Save* button when you are
done.

Receive the sample after creation by selecting it in the list and press the
*Receive* button. The partition view opens now automatically with the selected
analyses from the template assigned to each partition.

![Create Partitions](/screenshots/sample_create_partitions2.png "Create Partitions")

Click the *Create Partitions* button to proceed.

![Create Partitions](/screenshots/sample_create_partitions_saved2.png "Create Partitions")


Congratulations 🙌 you successfully learned the advantages of using *Analysis Templates* 
