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

SENAITE allows comes with user groups too. Groups are used to "group" roles. A 
user can be assigned to a group and therefore, acquire all the privileges 
granted for the roles that are assigned to that group. However, in a vanilla 
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
object-level: every single electronic record in SENAITE has its own permissions 
mapping. One might change the permission schema globally, but existing electronic
records won't be affected. 


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

