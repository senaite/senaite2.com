---
id: audit_trail
title: Audit trail
---

SENAITE generates snapshots of all electronic records on any modification 
and stores this information in a chronological order. This recorded information 
provides documentary evidence of the sequence of activities that have affected
at any time a specific operation, procedure or event. The following information
is kept on each single audit log record:

- **Electronic Record ID**:
  The unique identifier of the electronic record (also referred as "object")
  affected by the event.
 
- **Version number**:
  This number uniquely identifies the event within the object's history. This
  value increases in one unit each time an object is affected by an event

- **Modification date and time**:
  Date and time when the modification took place

- **Actor's user name**:
  The user name (login id) who triggered the event or modification
  
- **Actor's full name**: 
  The full name of the user who triggered the event or modification 

- **Remote IP address**:
  IP address of the remote computer from which the event or modification was
  triggered

- **Action taken**:
  Type or nature of the event. If the event is a transition, the stored value is
  the id of the transition (e.g. "Receive", "Verify", etc.). The value is
  "Edit" or "Create" otherwise

- **Workflow status**:
  The status of the object when the event took place. If the event is a
  transition, it's value is expressed as "*source status* → *destination status*"
  
- **Changes performed**
  A list that contains the metadata that have been changed due to the event.
  Each item of the list contains the affected field name (e.g. "Sample Type")
  and the change itself, represented as "*initial value* → *final value*"
  
Only users with role "Lab Manager" can access to the audit log. A button "Audit
Log" is displayed on every single electronic record view for easy access.
Alternatively, a "global" audit log where all records can be displayed regardless
of the affected Electronic Record can be found by clicking to the quick access 
button at the top bar, next to the gear button.
