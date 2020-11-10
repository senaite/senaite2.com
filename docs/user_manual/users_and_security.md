---
id: users_and_security
title: Users and Security
---

SENAITE LIMS is a multi-user system and by default, maintains the user accounts 
on its own database, without relying on the user accounts set up on the 
workstations or on the operating system under which runs. However, SENAITE LIMS
can use the industry-standard Lightweight Directory Access Protocol (LDAP) for
users management and authentication.

## User Roles

SENAITE LIMS is also a multi-role system, so every single user can have one or 
more roles assigned, and each role has a set of permissions granted. Therefore,
roles facilitate a lot the categorization of permissions in meaningful groups
that are directly correlated with the different activities required when running
a laboratory.

The following are the roles that come by default with the system:

* **LabManager**: Users with this role assigned can do almost everything (from
    maintaining electronic records such as analysis profiles, assigning work by
    means of worksheets, managing, laboratory and client contacts, etc.). A user 
    with LabManager role also have privileges to verify analyses, samples and 
    publish them. However, laboratory managers do not have privileges for
    system administration low-level tasks, for which a technically skilled user 
    with knowledge about the underlying Zope framework is required.
    
* **LabClerk**: Users with this role can manage clients, client contacts and
    some electronic records as well. They can also register samples into the 
    system, receive, cancel or reject them, but they cannot participate on 
    results introduction, verification and publication processes. These users 
    play an important role regarding to ocular inspection of the sample 
    conditions and data validation on sample reception.
    
* **Analyst**: Users with this role cannot manage electronic records, neither
    from clients nor from the laboratory. They can submit results of analyses 
    and also retract them, but they don't have privileges to verify, publish,
    reject or invalidate. Therefore, analyses are mostly responsible of
    results introduction.
    
* **Client**: Users with this role always belong to a Client/Sample Referrer
    and can access to the system, but they can only see the electronic records 
    that belong to their own organization. They can create new Samples, but
    these will remain in "sample due" status until received, cancelled or 
    rejected by laboratory personnel. Clients can also query and download 
    results reports from samples that have been verified and published by the 
    laboratory anytime. Regarding to results of tests, they cannot see them 
    unless verified by a lab user with enough privileges, even if they have 
    results submitted already.

* **Verifier**: Users with this role don't have rights to manage electronic 
    records or perform anything else other than verifying tests and samples.
    
* **Publisher**: Users with this role don't have rights to manage electronic
    records or perform anything else other than publishing samples.

Besides the roles above, there are two additional roles that are used internally
by the system:

* **Anonymous**: Any user that has not been authenticated in the system. These
    users have access to the Login screen only.

* **Authenticated**: Any authenticated user, regardless of their specific role
    belongs to this group. Authenticated users can see past the login screen, 
    the navigation bar, the menu items and some screens without sensitive data.
    
* **Owner**: This is an electronic-record-based (local) role. When a user 
    creates an electronic record in the system (this being a sample, an 
    analysis, etc.), this user automatically becomes the owner of that record.
    However, being an owner of an electronic record does not mean that all
    privileges are granted. This may depend on the type of record and its status.
    
* **Site Administrator**: Users with this role have almost full privileges to
    do everything, configuration of the underlying framework included. Is
    recommended that users with this role to be technically skilled and have
    knowledge about Plone and Zope frameworks. Users with this role should only 
    be used when strictly required and for system maintenance tasks mostly.


## User Groups

SENAITE comes with user groups too. Groups are used to "group" roles. A 
user can be assigned to a group and therefore, acquire all the privileges 
granted for the roles that are assigned to that same group. However, in a vanilla 
installation of SENAITE, the relationship between groups and roles is *almost* 
one to one in order to keep things simple. The term *almost* is used because 
besides this one-to-one relationship between groups and roles, groups contain
one or more of the internal roles discussed in the previous section. For 
instance, the group *LabManagers* (note the final 's' in plural) have both 
roles "LabManager" and "Authenticated". Same applies to the rest of user groups 
that come by default with SENAITE: *LabClerks*, *Analysts*, *Clients*, 
*Verifiers*, *Publishers*.

When creating users in SENAITE", the system administrator will mostly rely on 
groups, although additional roles for specific users can be assigned if 
necessary. Privileges for specific permissions can be granted at user level too.


## User Permissions

Permissions in SENAITE are quite powerful, mostly because their scope is at 
both object-level and status level: every single electronic record in SENAITE 
has its own permissions mapping and depends on its status. One might change the 
permission schema globally, but existing electronic records won't be affected. 
Not only that, permission mappings of a single electronic record are different 
depending on its status at any given time. For example, the permissions mapping 
for a Sample in status *received* (not yet processed) is different from the 
permissions mapping the Sample acquires when it reaches the status *verified* 
(the sample has been reviewed and verified by a user with "Lab Manager" role). 

The "mutation" of the permission mappings at object-level each time the status
of an electronic record changes is done automatically depending on the workflow 
definition for that specific type of electronic record. Every single type 
(Sample, Worksheet, Analysis, Client, etc) has its own workflow definition,
and therefore, have its own permission mapping for every single status they can 
have.

There are four types of permissions:

* **Object permissions**: these are the best known permissions and are 
    traditionally used for read and update operations at object level. The 
    four principal permissions of this type, inherited from Zope framework are:
    
    * *View*: allow/disallow the user to *view* all information from an
       electronic record. "Sample ID", "Sample Type", "Sample's contact" are
       fields of information from a Sample (electronic record)

    * *Modify portal content*: allow/disallow the user to edit the contents of
       an electronic record. Note that it does not refer to electronic record 
       information only, but also to the electronic record and children 

    * *Access contents information*: allow/disallow the user access to the
       basic data information of an electronic record. Every electronic record 
       has some information that is considered as basic (like IDs, titles or 
       descriptions). However, the "basic" information accessible might differ
       depending on the electronic record type. This permission is useful for
       when full access "View" to an electronic record is not desirable, but
       user should still be able to locate and know about that record
 
    * *List folder contents*: allow/disallow the user to list electronic
       records contained by an electronic record. As an example, a Sample belongs
       to a Client and as such, its container is the Client electronic record.
       One might want the user to have access to the Client information, but not
       able to reach the Samples inside

* **Field permissions**: the scope of these permissions are the fields
    an electronic record contain. Usually, there are two permissions for each
    field: one for view and another for edit. When a Sample is in "received"
    status, "Lab Clerks" and "Lab Managers" can modify the information of
    the sample: these roles have the object-level permission "Modify portal 
    content" granted. However, there are some fields that neither "Lab Manager"
    nor "Lab Clerk" can edit at this point: "Client", "Sample Type", etc. The
    read/write privilege for these fields is governed by field-scope permissions:
    "Field Edit Sample Type" and "Field View Sample Type"
    
* **Transition permissions**: these permissions govern whether a given role can
    perform a given action/transition to an object at a given status. Only
    "Lab Manager" can transition a Sample from "to be verified" to "verified" 
    status, even when other roles have the object-level permission 
    "Modify portal content" granted.
    
* **Behavioral permissions**: these are the less common permissions and are used
    in heterogeneous places (not necessarily bound to an object) to control what
    the information to display or actions allowed to the user. "Manage SENAITE"
    is a behavioral permission and users with this permission granted can access
    to some control panels and settings that otherwise, remain hidden.

The fine-granularity of permissions and their scope, together with the fact that
they are tightly bound to the workflow status of electronic records make 
SENAITE LIMS a very strong system in terms of security, while being flexible
enough to fit with security policies from different types of organizations.


## Users and Contacts

SENAITE does differentiate between Users and Contacts. A User is the actor that 
can login on the system with credentials (username and password). Users can be
assigned to Groups and/or roles and they can even have specific permissions 
granted.

A Contact is an electronic record a given User might be associated to, but a 
Contact can exist without being assigned to any User. Therefore, laboratory can 
maintain as many Contacts as needed, while keeping a subset of Contacts with
Users assigned, giving them access to the system. SENAITE keeps track of all
actions performed by any user to any electronic record at any given time. This
User-Contact relationship allows the laboratory to disable contacts, disable
access or even remove users without the risk of loosing traceability.

Besides the name, other personal information such as physical address, phone, 
e-mail, etc. can be assigned to a contact electronic record.

There are two types of Contact in a vanilla installation of SENAITE:

* **Laboratory Contact**: Laboratory contacts represent the laboratory personnel. 
    For each laboratory employee, a single contact should be created. Laboratory
    contacts can be created by users with "Lab Manager" role.
    
* **Client Contact**: As the name suggests, Client contacts are employees from
    the Clients registered in the system. They represent the client's primary 
    contact for notifications about activities regarding samples and tests. 
    Client contacts can be created by users with "Lab Manager" and/or 
    "Lab Clerk" roles.  

Contacts are displayed in different places for selection in different places
depending on their type. For instance, the selection of a Client Contact is
required when creating a Sample. Only the contacts from the same client the
Sample belongs to are available for selection. On the other side, the selection
of a Laboratory Contact is required when creating a Worksheet.

