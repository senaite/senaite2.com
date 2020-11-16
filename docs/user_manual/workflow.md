---
id: workflow
title: Workflow
---

## Overview

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
specific needs of the laboratory, as discussed later in *[Customization](#customization)*
section.


### Registration

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
*[Reception](#reception)* section.

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


### Cancellation

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


### Rejection

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


### Reception

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
*[Registration](#registration)*: *Client*, *Sample Type* and *Sample Template*.

Received samples can be processed and are available to *LabManager* on the views
for work assignment. Submission of results is also possible, but *Clients* won't
be able to see the results as long as they are not yet verified.

Samples in "received" status are displayed by default in all listings, under 
the "Active" and "Received" filter buttons displayed at the top of samples 
listing view.


### Verification

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
is discussed in next section, *[Publication](#publication)*. Therefore, when a
sample reaches this point, it is assumed that the sample has been validated,
processed and verified, so there is only two possible transitions: "publish" or
"invalidate".

Verified samples are displayed under both "Active" and "Verified" filter buttons
displayed at the top of samples listing views.


### Publication

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


### Invalidation

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


### Sampling workflow

TODO

## Analysis workflow

TODO


## Worksheet workflow

TODO


## Customization

TODO