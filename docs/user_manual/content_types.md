---
id: content_types
title: Content types
---

SENAITE comprehends a variety of data types. The term "data type" is well known 
in software applications and can be understood as a way to categorize electronic
records based on their properties and the operations that can be performed with 
them. Since SENAITE is built on top of Plone Content Management System (CMS) and 
Zope Content Management Framework (CMF), the term "content type" is used in
this documentation to refer to the same concept. There is only a slight 
difference between a "data type" and a "content type" that is mostly related
with the fact that Zope is a web server focused on the publishing of "contents" 
through the web.

In SENAITE, everything are contents, and from different types. For instance, a 
given electronic record that represents a client is an object (or content). This
is, an instance of the content type with name *Client*. An object of type 
*Client* can, in turn, contain several objects from different types as well, 
such as *ClientContact*, *Sample*, etc. All content types provided by 
SENAITE can be categorized in three groups: *Static*, *Baseline* and *Dynamic*.

## Static content types

 Static content types refers to objects that are part of the 
underlying structure of the system, such as the clients folder (content type 
*ClientsFolder*), methods folder (*Methods*), and so on. Therefore, objects of 
static content types are created on install and user cannot add, modify or 
remove them.

These contents are called "static" because they are bound to a "single-status"
workflow, so they can only acquire one status: "active".

Note that since the elements that define the structure of SENAITE are in fact 
objects, they are also governed by the same security policies that apply to the 
rest of electronic records. Read *[Users and security]* for more information.

## Baseline content types

Baseline content types comprehends those contents that do not change too often: 
either because are part of the initial setup data (Departments, Sample Types, 
Analysis Services, Analysis Profiles, etc.) or because are not directly bound 
to the workflow that governs the daily operation of the laboratory regarding to 
samples and analyses.

The term "baseline" refers to the fact that these objects define the 
configuration layer that makes SENAITE fit with the laboratory discipline, 
operation and requirements. Therefore, objects from baseline content type need 
to be present before users can start routine work on SENAITE. Contents from this
types are also known as "master" data.

For the creation of baseline content types, static content types need to be
created first. This is the same as saying SENAITE needs to be installed first.

In most cases, baseline content types have a workflow assigned that only has two
possible statuses (*Active*, *Inactive*) and two possible transitions
(*deactivate*, *activate*).

Examples of baseline content types are *Client*, *Contact*, *Reference Sample*
*Department*, *Sample Type*, *Analysis Service*, *Analysis Profile*. These
content types are explained in detail in *[Glossary]* section.

## Dynamic content types

Dynamic content types comprehend those contents/electronic records that are
created and change on a daily basis. This type of objects are created 
repeatedly and are tightly bound to the workflow that governs the daily
operation for samples and analyses.

For the creation of dynamic content types, baseline content types need to be
created first. Obviously, one cannot create a *Sample* if no *Client* exists
yet in the system or no *Sample Type* objects are available.

*Sample*, *Analysis* and *Worksheet* are common examples of dynamic content
types.

## Removal of content types

SENAITE does not allow the removal of objects of any type. Rather, there are
specific transitions to tag the object as no longer valid. For instance, there
is the transition "deactivate" for baseline content types: contents in
"Inactive" status won't be displayed anywhere by default and won't be available 
for selection. However, they are kept in the system and any reference to them
is maintained as well (for instance, a Sample Type in "inactive" status is 
still referenced by Samples).

This guarantees the consistency of relationship among objects ever created in
the system, as well as the traceability by means of the [audit history log].


[Users and Security]: users_and_security
[Glossary]: glossary
[audit trail]: audit_trail