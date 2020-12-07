---
id: workflow
title: Workflow
---

Every single electronic record in SENAITE is bound to a set of rules that define
the different status the item can reach within its life-cycle, the required
transitions and the permissions that apply on each stage. The specific set of 
rules and permissions that apply to each type of electronic record (e.g. Sample, 
Worksheet, Service, Container, etc.) is known as "Workflow definition". Thus,
SENAITE has multiple "Workflow definitions" registered. 

Some of the "Workflow definitions" are quite generic and are used for those 
types not meant to play a special role within the daily laboratory operation: 
are records mostly used for assignment to Samples, etc. These generic workflow
definitions typically provide two statuses ("active", "inactive") and two 
transitions as well ("activate", "deactivate"). An example of a type that 
implement such workflow is "Sample Type": only those with "active" status are 
available for selection while creating a Sample.

Generic "Workflow definitions" are not discussed in detail in this manual, but
efforts has been made to explain with comprehensive information those for which
the laboratory personnel might be specially interested, that are intrinsically
related with the daily lab operation: Sample Workflow, Analysis workflow and 
Worksheet workflow.


## Sample workflow

Sample is the central object in SENAITE LIMS and therefore, its workflow is
designed to mimic the laboratory operation. Every laboratory is different and
the way they handle samples and operate internally might vary a lot depending on
several factors such as corporation policies, laboratory discipline or type of
organization. Workflow of Sample in SENAITE is meant to cover the lowest common 
denominator among them, but can also be extended and customized to meet the 
specific needs of the laboratory.


### Sample registration

The registration is the first step of the Sample workflow. Users with enough
privileges (*LabManagers*, *LabClerks* or even *Clients*) can directly register
a Sample in the SENAITE LIMS through the "Sample Add form". This form is accessible 
through the button "Add Sample" that is displayed at the top of all Sample listings. 
Once the basic and required information about the Sample (Sample type, Date of 
collection, etc.) and the tests to be performed are selected, the user can 
submit the form and a Sample electronic record is created afterwards.

Once created, the default status of the Sample record is "**sample due**". As the
name clearly states, the sample record is registered, but the physical sample
has not yet arrived to the laboratory. This scenario is quite common in those
labs that are service-oriented, that run tests on-demand. For those laboratories
that do not need this step, SENAITE LIMS can be configured to skip this status
with the setting "Auto-receive samples". When this setting is enabled, the
system skips this status and automatically transitions the Sample record to the 
"sample received" status. The "sample received" status is discussed below, under
*[Reception](#sample-reception)* section.

At this "sample due" status, the data of the sample can be modified by *Clients*, 
*LabManagers* and *LabClerks* with the exception of the following fields, that 
cannot be changed anymore:

* *Client*: the referrer of the sample
* *Sample Type*: the nature of the sample (e.g. blood, water, swab, oil, etc.)
* *Sample Template*: not a required file while registering the sample, but if
    set, cannot be modified. Defines some additional properties about the sample,
    such as how the sample will be partitioned and the tests to perform
    
Analyses from Samples that are in "sample due" state cannot be processed and are
not available to the "LabManager" on the views for work assignment. The 
submission of results for these samples is not possible neither.
    
Samples that are in "Sample due" status can be filtered easily by using the 
"Sample due" filter button displayed at the top of samples listing views.


### Sample cancellation

When the sample is in "sample due" status, *LabManagers*, *LabClerks* and 
*Clients* can cancel the sample. The cancellation does not trigger any
notification and transitions the Sample to a "**cancelled**" status. In most cases,
this transition is performed when the sample has been wrongly registered or
neither the client nor the laboratory are interested on analyzing the sample.
Basically, the Sample has not been *validated* and the decision of cancellation
is not driven by objective reasons about the suitability or quality of the
sample, rather because of subjective reasons.

The status "cancelled" is an end-status. This means that samples in "cancelled" 
status cannot be modified at all, by anybody, are not displayed by default in 
listings and cannot be used anymore. Also, no further transitions can be performed.

To see cancelled samples, user has to press the "Cancelled" filter button
displayed at the top of listings.


### Sample rejection

By default, the rejection transition for Samples is not enabled. *LabManagers* 
can activate this transition in *Setup > Analyses*, setting
*Enable the rejection workflow*. User has to indicate a list of predefined
reasons of rejection too.

When enabled, the rejection of a sample can be triggered when its status is 
"sample due", "received" or "to be verified". Once the transition is performed,
the status of the sample becomes "**rejected**". This transition can only be 
performed by *LabManagers* or *LabClerks*. It also requires the user to 
indicate the reasons of rejections, these being from a pre-defined list or 
free-text.

The main difference with cancellation is that when a sample is rejected, the 
Client contact receives a notification (and the *LabManagers* too) when the
system is configured properly in *Setup > Notifications*. This notification
e-mail contains the reasons why the sample was rejected.

These are the common use cases that might lead to the rejection of a Sample:

* On reception, the sample is considered defective by lab personnel (e.g the 
  container is broken, the seal was not intact, not enough sample). Sample 
  cannot be processed and therefore, is rejected.
  
* No defects were encountered on reception, but although "received", the sample 
  becomes not suitable for testing because of a reason not foreseen (e.g. the
  sample is contaminated or the lab does not have enough kits for testing).
  
* The Sample can also be rejected on "to be verified" status. In this case, the
  reason of rejection arises after results are submitted. For instance, the
  Lab manager does not trust the anomalous results and wants to prompt for the
  collection of a new sample. Another option is that the sample requires a
  retest, but there is not enough volume left.

In a nutshell, the rejection of a sample is performed because of objective 
reasons about the suitability or quality of the sample. These objective reasons
must be specified during the rejection process.

The status "rejected" is an end-status, so Samples with this status cannot be
modified at all, cannot be used anymore, and are not displayed by default in 
listings. Also, no further transitions can be performed.

To see rejected samples, user has to press the "Rejected" filter button
displayed at the top of listings.


### Sample reception

This is the next natural step when the sample is in "sample due" status. After
the lab personnel has validated the sample is in correct conditions and it's
type, volume and preservation are suitable for the requested tests, *LabClerk*
or *LabManager* can "receive" the sample. Therefore, the reception of a Sample
involves ocular inspection and validation. Once the transition is done, the 
sample status becomes "**received**". 

*Lab Manager* can configure the system so sample barcodes are generated 
automatically when this transition takes place (*Setup > Sticker*, setting 
*Automatic sticker printing*). If so, the user is redirected automatically to
the barcode labels preview once the "receive" transition is triggered.

Received samples are are physically present in the laboratory facilities and 
are ready for the testing to take place. At this "received" status, the data of 
the sample can be modified by *Clients*, *LabManagers* and *LabClerks* with the 
exception of the permanent read-only fields discussed in 
*[Registration](#sample-registration)*: *Client*, *Sample Type* and *Sample Template*.

Received samples can be processed and are available to *LabManager* on the views
for work assignment. Submission of results is also possible, but *Clients* won't
be able to see the results as long as they are not yet verified.

Samples in "received" status are displayed by default in all listings, under 
the "Active" and "Received" filter buttons displayed at the top of samples 
listing view.


### Sample verification

The verification of the sample takes place automatically as soon as all the
analyses from the Sample are verified by the *LabManager* or *Verifier*. However, 
this transition may not happen automatically (e.g. system has been configured with
additional "guards" that validate that some data from the sample is correct).
In such case, only *LabManager* or *Verifier* users can perform such transition. 
Once the transition is done, the sample status becomes "**verified**". 

As the name clearly states, the "verification" of the sample means that both
tests and sample have been verified by the *LabManager* and the sample is now
ready for publish. *Client* user can also see the results of the sample, even
if the sample has not yet been published. 

The "verified" status is a *no-way-back* status, most data of the sample cannot 
be modified anymore, with the exception of "Results interpretation". This field
is discussed in next section, *[Publication](#sample-publication)*. Therefore, when a
sample reaches this point, it is assumed that the sample has been validated,
processed and verified, so there is only two possible transitions: "publish" or
"invalidate".

Verified samples are displayed under both "Active" and "Verified" filter buttons
displayed at the top of samples listing views.


### Sample publication

Only "LabManager" or "Publisher" can publish samples. The publishing of a Sample
involves the generation of the results report, that can be sent directly via 
e-mail as an attachment to the Sample's client contact. Once the transition is
done, the sample status becomes "**published**".

Before publishing, the user can introduce free-text in "Results Interpretation"
field and the contents will be rendered in the pdf generated afterwards.

Once published, the *Client* user can access to the system and download the
results report at a glance. Results are also visible.

The status "published" can be considered as an end-status, so Samples with this 
status cannot be modified at all, cannot be used anymore, and are not displayed 
by default in listings. Also, no further transitions but invalidation can be
performed. Therefore, there is no more actions required for this sample and is
kept in history.

Published samples are displayed under "Published" filter button displayed at the
top of samples listing views.


### Sample invalidation

Invalidation transition is the "last-resort" transition when the sample has
been published and the lab personnel realizes there is an issue with the sample,
the results or in the results report. The invalidation of a sample involves the
invalidation of the pdf generated and a notification e-mail is sent to the 
Sample's client contact. As a result of the invalidation process, the status
of the invalidated sample becomes "**invalid**" and a new sample (retest) in 
"received" status is created automatically. However, the relationship between
an invalidated sample and the retest is kept and two informative panels are
displayed accordingly:

* In the "invalidated" sample, an informative panel stating the sample has been
  invalidated and a link to the re-test is displayed.

* In the re-test sample, an informative panel is displayed at the top of the
  view stating that the sample is the outcome of an invalidation of another
  sample. A link to the invalidated sample is displayed too.

The e-mail subject and body of the notification e-mail that is sent on
invalidation can be configured in "*Setup > Notifications*".

The invalidation can only take place after a Sample is published and *Client*
users have view access to the Sample.

The status "published" is as an end-status, Samples cannot be modified at all, 
cannot be used anymore, and are not displayed by default in listings. Also, no 
further transitions can be performed.

Invalidated samples are displayed under "Invalid" filter button displayed at 
the top of samples listing views.


## Sampling workflow

Besides the classic workflow for Samples explained in previous section, SENAITE
allows to enable a workflow for when the laboratory is also in charge of
collecting the sample. There are two main reasons why a laboratory may need to
collect the sample by itself instead of receiving them only:

- The laboratory is part of an organization and the collection of samples within
  the organization facilities or outside is one of its responsibilities. 
  
- The laboratory is service-oriented and the collection of sample is included in
  the services offered.

A laboratory from a high-school that is studying the evolution of a population 
of bacteria in a particular environment (e.g. a lake) over a period of time 
would be good example of the first use cae. Another one would be a lab that 
belongs to a food & beverage company and is required by law to regularly collect
and test samples for quality testing from the production line.

An example of the second scenario would be a laboratory specializing on
environmental analysis and waste products treatment. The lab has a schedule
setup for the collection of samples from client facilities.

*Sampling workflow* can be enabled from Setup and once enabled, the field 
*Scheduled Sampling Date* is displayed on the Sample add form instead of the
*Date Sampled* field. While the former expects future dates, the latter only
accepts dates from the past. Field is required in both cases.


### Sampling registration

Same privileges as for registration without sampling worklow enabled are 
required: *LabManagers*, *LabClerks* or *Clients*.

When a Sample is registered with *Sampling workflow* enabled, the first status
the Sample acquires is "**to be sampled**". At this point, the Sample has
not been collected yet and the date introduced for field *Scheduled Sampling
Date* is the tentative date the laboratory expects the sample to be collected.

Samples in this status can be cancelled and/or rejected as usual (see previous
sections *[Cancellation](#sample-cancellation)* and *[Rejection](#sample-rejection)*). 
However, there are two additional transitions: *Sample* and *Submit*. While the 
first transition is obvious, the second one refers to the fact that quite often,
some tests must be performed at the point of sample collection (e.g. Temperature).

Samples in "to be sampled" status are displayed by default in listings, when
either the "Active" or "To be sampled" filter buttons are clicked. 


### Sample collection

This transition is not available unless a user with enough privileges (*LabClerk*
or *LabManager*) assigns first the laboratory contact in charge of collecting
the sample. This laboratory contact must belong to the group *Samplers*. 

Once the sampler is assigned, this transition can be triggered by users with 
any roles *LabManager* and *Sampler*, but only any of these two conditions is
met:

- The sample does not have "field" analyses assigned
- Results for "field" analyses assigned to the sample have been submitted

"field" analyses are those tests required at point of collection: only users 
with "Sampler" role can submit results. Also, result entry for this type of 
analyses is only allowed when the status of the sample is "to be sampled". 
User can directly introduce the results from the Sample's edit view, under 
"Field Analyses" section.

Once the transition is done, the sample status becomes "**sample due**" and 
the classic workflow discussed in previous section follows. 


## Analysis workflow

Analysis workflow works in parallel to Sample workflow and some of their
transitions are bound together. This workflow is conceived to represent the
lab operation regarding the handling and processing of tests.

### Analysis registration

A Sample is usually submitted on SENAITE together with the tests/analyses to
be performed. The addition of analyses to a sample can be either done on 
sample registration or afterwards. On the first case, a list of available
analyses is displayed at the bottom of the Sample add form for easy selection.
For the addition of analyses after the sample has been registered in the system,
users with enough privileges can do so through "Manage Analyses" from Sample
view. 

Users might not know beforehand the analyses that should be performed, either 
because the user who is submitting the sample belongs to the client role (and 
therefore, does not necessarily have enough knowledge about the techniques 
involved) or simply because at that point in time, there is not enough 
information yet for a formed decision. The former use case can be addressed by
using Analyses Profiles or Sample Templates, while the latter can be addressed
through "Manage Analyses" from Sample View.

When an analysis is selected on sample submission or is added to a sample that
has not yet been received, its status becomes "**registered**". As a general rule, 
results introduction for an analysis is not allowed at this status, except for 
"field" analyses, cause their results are precisely meant to be captured on 
sample collection.

Analyses remain in "registered" status until the sample is received by lab
personnel. At this point, the transition "initialize" takes place automatically
and the analysis status becomes "**unassigned**". Users with enough privileges
(analysts and lab managers) can submit results for analyses that are in
"unassigned" status. The submission of results at this status can only be done
from Sample's view. The name "unassigned" refers to the fact that the analysis 
has not yet been assigned to a "batch of work" that in turn, is associated to a 
specific analyst.

### Analysis assignment

Most labs don't expect the results introduction to take place individually for
each sample. Laboratory manager can group analyses from different samples in a 
single work unit or run: the Worksheet. In a worksheet, the introduction of 
results happens in "batch", so the capture is for multiple analyses and from 
different samples at once.

The "assignment" of an analysis refers to the action of "adding"/"assigning" 
analyses to a given worksheet. Analyses can be assigned to open worksheets or
directly on worksheet creation.

When an analysis is added to a worksheet, the status becomes "**assigned**"
and no particular changes regarding permissions take place. The analyst 
assigned to the worksheet is automatically assigned to the analysis too.

In analyses listing (Sample view), an icon that hyperlinks to a given worksheet
is displayed next to the title of assigned analyses. For those Samples with
all analyses assigned, same icon is displayed next to the sample ID in listings.

### Analysis submission

As discussed previously, users with enough privileges (Lab manager and Analyst)
can submit results for analyses that are either in "unassigned" or "assigned"
status. This is true for all analyses except for "field" analyses, for which
the submission of a result has to take place before the reception of the sample.

The submission of results can be manually done on sample view or on the 
Worksheet view. The capture of results can be automated by interfacing SENAITE
with laboratory equipment too. In both cases, the analyses is transitioned
to "**to be verified**" status. As the name clearly indicates, analyses in 
this status require the review from users with enough privileges (lab managers 
or verifiers). Therefore, once a result is submitted, analysts can no longer
modify the result unless the analysis is retracted. 

### Analysis verification

Analyses on "to be verified" status can be retracted by lab managers and 
users with "Verifier" role. The verification of analyses, together with 
retraction, are mechanisms to guarantee that:

* analyst followed best practices while performing the test
* analyst followed the procedure and/or method correctly
* the equipment used, if any, was working properly and was correctly calibrated
* the procedure and/or method can be repeated, with same expected outcome
* the analysis result is reliable

Verification follows the peer-review principle, so the analysis result submitted
must always be verified by another user with enough privileges. This principle
is also true even when the submitter is a lab manager. Although only one
verification is required by default, the number of required verifications 
can be increased up to four.  

When all required verifications have taken place, the status of the analysis 
becomes "**verified**" and no further actions for this analysis, regardless of 
user roles, are allowed.

### Analysis retraction

Analyses awaiting for verification ("to be verified") can also be retracted by 
lab managers and verifiers. User triggers a retraction when there is not enough 
confidence about the validity of the analysis result: one or more than one 
pre-condition of those explained in Verification section are questioned.

When retracting an analysis, the system creates a copy of that analysis, the
retest, but without a result set. System automatically transitions this retest
to the same status as the original analysis had before the result was submitted 
("assigned" or "unassigned"). The original analysis (the retested analysis), 
along with its metadata (capture date, result, submitter, etc.) is preserved for
traceability purposes and does not longer appear under the "Valid" filter in 
listings, but under "Invalid" filter. It's status becomes "**retracted**".

The retest analysis is then available to the Analyst for result capture. 

### Analysis retest

Action "retest" can also be performed against analyses that are awaiting for 
verification ("to be verified" status). Retest behaves like retraction, except 
that the original analysis is not transitioned to "retracted" status but to 
"verified". Therefore, the "retest" action does not necessarily mean the 
procedure has not been performed correctly, but the technique may have some 
limitations or the result value is uncertain. Retest action is commonly used to 
prevent false positives and/or false negatives.

### Analysis rejection

An analysis can be rejected by laboratory manager at any status, except once
verified. When an analysis is rejected, the analysis status becomes 
"**rejected**" and is no longer available under "Valid" filter in listings, but 
under "Invalid" filter.

Note that the difference with retraction is that no retest is created when an 
analysis is rejected: the introduction of results for an analysis that has been
rejected is not possible at all.


## Worksheet workflow

Worksheets are the main artifact for planning tests in the laboratory. Are used
to group related analyses from different samples so they can be processed in a
single work unit or run. Worksheets are also used to add reference samples 
(controls and blanks) and duplicates. 

### Worksheet creation

Lab manager users can create worksheets manually from Worksheets view. User has
to first choose the analyst in charge of results capture of the work unit. On 
same view, the user can also select the instrument to be used. As soon as these
values are submitted, the user is redirected to the "Manage analyses" view of
the worksheet. From this view, the user can search and manually assign the
analyses to be included. Only "unassigned" analyses are displayed for selection.

Although worksheets can be created manually by lab managers each time is
required, a better approach is to create them by using Worksheet Templates. In 
a Worksheet Template, the user can define the layout, the number of slots and 
the type of analyses (reference or routine) to be placed in each slot, as well 
as the method and instrument to use.

Once created, the status of a worksheet becomes "**open**", awaiting for 
results submission, either by the assigned analyst or automatically by means of
an instrument import interface.

Open worksheets are displayed by default in worksheets listing, under "Active"
and "Open" filters.

### Worksheet submission

The worksheet transitions automatically from "open" to "**to be verifed**" 
status as soon as all the assigned analyses are submitted.

Worksheets awaiting for verification are displayed by default in worksheets
listing, under "Active", "Open" and "To be verified" filters.

### Worksheet verification

The worksheet transitions automatically from "to be verified" to "**verified**"
status as soon as all the assigned analyses are verified.

Verified worksheets are no longer displayed by default in worksheet listing, but
under the filter "Verified".
