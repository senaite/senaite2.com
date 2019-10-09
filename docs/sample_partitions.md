---
id: sample-partitions
title: Sample Partitions
sidebar_label: Sample Partitions
---

Samples can be splitted into Partitions (Aliquots), so that specific analyses
can be conducted on each Partition individually.

**☝️Note:**
Each Partition acts like a normal Sample and also follows the [same
Workflow](sample-basics#sample-workflow) as the other Samples.

In this section we extend our given setup to mimic a laboratory with two
departments, one for `Water Chemistry` and one for `Microbiology`.
Since these two departments are located physically in different buildings,
we need to partition the incoming Water samples into two Aliquots.


## Preparing the LIMS

First we add a new *Lab Department* in the *LIMS Setup*.

Enter the following values in the add form:

- Title: `Microbiology`
- Description: `Micro-Biological analysis`

Please revisit the [Quickstart section](quickstart#add-lab-departments) how to
add lab departments.

Next we add a new *Analysis Category* in the *LIMS Setup*.

Enter the following values in the add form:

- Title: `Microbiology`
- Description: `Micro-Biological analyses grouped together`
- Department: `Microbiology`

Please revisit the [Quickstart section](quickstart#add-analysis-categories) how
to add analysis categories.

Finally, we add a new *Analysis Service*.

Enter the following values in the add form:

- Title: `Salmonella`
- Analysis Keyword: `Salmon`
- Point of Capture: `Lab`
- Analysis Category: `Microbiology`
- Department `Microbiology`

Please revisit the [Quickstart section](quickstart#add-analysis-services) how
to add analysis services.


## Creating Sample Partitions

Now it is time to create a new Sample for partitioning

Enter the following values in the add form:

- Contact: `Rita Mohale`
- Date Sampled: Click the `now` button in the calendar popup to chose the
  current date and time
- Sample Type: `Water`
- Lab Analyses: Select `Calcium`, `Magnesium`, `Total Hardness` and `Salmonella`

Please revisit the [Quickstart section](quickstart#add-new-samples) how
to add new samples.

Also make sure to receive the sample after creation by selecting it in the list
and press the *Receive* button.

Now select the new created Sample and click on the *Create Partitions* Button
to open the partitioning view.

Please select first the number of Partitions to create, in our case `2` and
press the *Preview* button.

Select now the `Calcium`, `Magnesium` and `Total Hardness` Analyses for the
first Partition, and `Salmonella` for the second Partition.

![Create Partitions](/screenshots/sample_create_partitions.png "Create Partitions")

Click the *Create Partitions* button when you are done.

![Create Partitions](/screenshots/sample_create_partitions_saved.png "Create Partitions")

A little black triangle appears now in the Samples listing next to our partitioned Sample.
Click on it to expand and view the created partitions.


## Introducing Results in Partitions

Introducing results to partitions works the same like in all other Samples, see the
[Sample Basics section](sample-basics#enter-results) to recap how to enter results.

However, the key difference is, that Partitions propagate the analysis results
to their root Sample.

Let's enter the same results as we did before to our first Partition. Click on
the link for the first Sample (the one ending with `-P01`) and enter some results.

![Manage Partition Results](/screenshots/sample_manage_partition_results_saved.png "Manage Partition Results")

Click the *Save* and then the *Submit* Button when you are done.

Now click on the generated link in the blue info box to navigate to the root Sample.

![Partition Alert Box](/screenshots/sample_alert_box_partition.png "Partition Alert Box")

The entered results will be displayed on the root Sample as well.

![Manage Partition Results](/screenshots/sample_manage_partition_results_root.png "Manage Partition Results")

Now we are going to verify the submitted results on the root Sample.

![Verify Partition Results](/screenshots/sample_verify_partition_results_root.png "Verify Partition Results")

Navigating back to the first Partition shows that also this operation was correctly propagated back.

![Verify Partition Results](/screenshots/sample_verify_partition_results_verified.png "Verify Partition Results")


Congratulations 🙌 you successfully learned how to create Partitions in SENAITE.
