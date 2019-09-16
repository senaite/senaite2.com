---
id: sample-basics
title: Sample Basics
sidebar_label: Sample Basics
---

In the previous guide you created your first sample in SENAITE. Next we are
going to learn the basics about the standard sample workflow, how to process a
sample through the states of the sample workflow and how to publish a sample
report and send it to the Client Contact.


## Sample Workflow

Each entity in SENAITE follows a workflow which defines *Transitions* and
*States*. You can think of a workflow like a directed graph with nodes and edges,
where a node represents a State and the connecting edge reflects a Transition.

The basic workflow of a sample can thus be displayed as follows:

```text
Registered -> Sample Due -> Received -> Pending -> Verified -> Published
          \  /          \  /        \  /       \  /        \  /
       initialze      receive      submit     verify      publish
```

**☝️Note:**
This is graph omits some of the Sample states/transitions for the sake of simplicity.


### Receive the Sample

You have already seen the first *State* of the prior created *Sample*, which was
`Sample due`. In this state it is *not possible to enter any results*, because the
sample has not been received yet by the lab.

To receive a sample, you can select the "Receive" transition from the dropdown
menu within the Sample.

![Receive Sample](/screenshots/transition_receive_sample.png "Receive Sample")

Alternatively, it is also possible to select the Sample from the Samples Listing
view and click on the "Receive" button at the bottom.

![Receive Samples](/screenshots/transition_receive_samples.png "Receive Samples")

After you executed one of the two possibilities, the Sample is in the state *Received*.

![Sample Received](/screenshots/sample_received.png "Sample Received")

**☝️Note:**
The colored borders in the listings also encode the state of the items,
where yellow stands for `Sample due`, brown for `Sample received`, turquoise for
`To be verified`, blue for `Verified` and green for `Published`.


### Enter Results 

 Only in the *Received* state a user with the `Analyst` role can introduce the
measured results for the Analyses of the Sample.

Open the previously created by clicking on the generated link in the listing,
which automatically opens the "Manage Results" tab for you.

![Manage Results](/screenshots/sample_manage_results.png "Sample Manage Results")

You can now enter the results for each Analysis in the "Lab Analyses" listing.

Press the "Save" button when you are done to introduce the numbers to the server.

After the results were saved, they can be submitted.

![Manage Results](/screenshots/sample_manage_results_saved.png "Sample Manage Results")

**☝️Note:**
The intermediate "Save" step does not submit the results for verification yet,
but is used to trigger server side logic like e.g. calculations or range
specifications. As soon as the results are submitted, the Analyst can not change
the values anymore and the State of the Sample is "To be verified"

![Manage Results](/screenshots/sample_manage_results_submitted.png "Sample Manage Results")


### Verify the submitted Results

Only users with the role of a `Lab Manager` or `Verifier` are allowed to
*Verify* the results of a Sample by selecting the Analyses and click on the
"Verify" button.

However, the system does not allow per default that the user who submitted also
verifies them. To allow this, the setting need to be enabled in the *LIMS Setup*.

Click on the ⚙️button in the upper right corner and click on the grey *Setup* tile.
Navigate to the *Analyses* tab and check the Option "Allow self-verification of results".

![Allow self-verification of results](/screenshots/setup_analyses.png "Allow self-verification of results")

Click the "Save" button to submit the changes.

Go back to the created Sample and select all submitted Analyses. The button to
verify the results appears now.

![Verify Sample Results](/screenshots/sample_verify_results.png "Verify Sample Results")

Clicking on the "Verify" button verifies the results, but leaves a warning that
the user who verified the results also submitted them.

![Verified Sample Results](/screenshots/sample_verified_results.png "Verified Sample Results")

**☝️Note:**
You can put your mouse over the exclamation mark inside the analysis row to view
the warning message.


### Publish the Results

To finalize the Sample, it need to be transitioned to the "Published" state (or
another end-state). Only users with the role of a `Lab Manager` or a `Publisher`
are allowed to publish the sample.

Navigate to the sample view and select the "Publish" transition from the upper
right workflow dropdown.

![Publish Sample Results](/screenshots/sample_publish_results.png "Publish Sample Results")

This opens the PDF printing preview of [SENAITE Impress][SENAITE-impress], where
the report template, paper format, orientation and custom report options can be
selected.

![Sample Publish Preview](/screenshots/sample_publish_preview.png "Sample Publish Preview")

Click now on the "Save" button to generate the PDF for the result report. After
the report was created, the system redirects you to the analysis reports listing
of the client.

![Analysis Reports Listing](/screenshots/client_analysis_reports_listing.png "Analysis Reports Listing")

However, this step was not sufficient to transition the Sample to the final
"Published" state (note the blue border of the referenced sample). To achieve
this, the report needs to get either send via email to the noted Contacts of the
Sample or it need to get force published by a user with the `Lab Manager` role.

Selecting the report will therefore display these two options to proceed.

![Analysis Reports Listing](/screenshots/client_analysis_reports_listing_publish.png "Analysis Reports Listing")

Please click on the "Email" button to open the Email form for this analysis report.

![Email Analysis Report](/screenshots/client_analysis_report_email.png "Email Analysis Report")

Since we did not add a valid email address for our selected Client Contact, the
system shows an error message when we try to send the email.

![Email Analysis Report](/screenshots/client_analysis_report_email_failed.png "Email Analysis Report")

Luckily, this can be fixed by simply adding an email address to our Client Contact.
Navigate to the "Contacts" tab of the "Happy Hills" client and select the "Edit" tab for "Rita Mohale". 

![Edit Client Contact](/screenshots/client_contact_edit.png "Edit Client Contact")

Click on the "Save" button when you are done and navigate back to the "Analysis
Reports" listing, where you select the generated report and press the "Email"
button.

Now the system should allow to send the email, which will transition the Sample
into the "Publish" state.

![Analysis Reports Listing](/screenshots/client_analysis_reports_listing_2.png "Analysis Reports Listing")

**☝️Note:**
Although the system failed to send the email because we neither configured the
email settings of SENAITE, not entered a valid email address, it still
transitions the sample to the "Published" state.
This behavior is by purpose, because we actually cannot control email delivery
and the publication step should not depend on that.

![Sample Published](/screenshots/sample_published.png "Sample Published")

Congratulations 🙌 you successfully published your first Sample in SENAITE.


[SENAITE-impress]: https://github.com/senaite/senaite.impress  "HTML to PDF Rendering Engine for SENAITE"
