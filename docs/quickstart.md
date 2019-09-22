---
id: quickstart
title: A quick start into SENAITE
sidebar_label: Quickstart
---

In this guide we will show you how to create your first sample in SENAITE.

## Configure SENAITE for the first sample

When SENAITE is initially installed, it comes without any configuration and
needs to be setup first to be able to create samples.


### Open the LIMS Setup Screen

Navigate to the *LIMS Setup* by clicking the ⚙️ button in the upper right corner.

![Setup Screen](/screenshots/setup_screen.png "SENAITE LIMS Setup")

This screen shows all the available setup items to configure SENAITE for your lab.

**☝️Note:**
The ⚙️button is almost on every screen available and allows you to quickly
navigate to the LIMS Setup.

**🤓 Pro-Tip:**
You can also press the key-combination `Ctrl+Space` to open the *Spotlight
Search*. You can search then the setup location you want to visit and select
with the `Up` and `Down` arrow keys of your keyboard the location and press
`Enter`. SENAITE will navigate you then directly to the item you requested.


### Add Lab Departments

Firstly, we want to add a lab department. Therefore, click on the *Lab
Departments* tile to navigate to the listing of laboratory departments.

![Lab Departments](/screenshots/lab_departments_listing.png "Lab Departments")

Click on the *Add* button above the listing table to add a new lab department.

![Add Lab Department](/screenshots/add_lab_department_screen.png "Add a new Lab Department")

Enter the following values in the add form:

- Title: `Chemistry`
- Description: `Analytical chemistry department`

Click the *Save* button when you are done.


### Add Analysis Categories

Move to the *LIMS Setup* screen by clicking again the ⚙ button in the
upper right corner of your screen.

Click now the *Analysis Categories* tile to add a category for the analyses you add in the next step.

Currently, your SENAITE installation has no analysis categories configured.

![Analysis Categories](/screenshots/analysis_categories_listing.png "Analysis Categories")

Let's add the category *Metal* to group together analyses which trace metals by
clicking the *Add* Button above the listing table.

![Add Analysis Category](/screenshots/add_analysis_category_screen.png "Add a new Analysis Category")

- Title: `Metals`
- Description: `Trace metals in water`

Click again the *Save* button when you are done.


### Add Analysis Services

Finally, we add some analysis services by chosing the *Analysis Services* tile in the *LIMS Setup* screen.

In this example we are adding **Calcium**, **Magnesium** and **Total Hardness**.

![Analysis Services](/screenshots/analysis_services_listing.png "Analysis Services")

Proceed like in the previous examples by clicking on the *Add* button and entering the values, e.g.
for the *Calcium* analysis as follows:

- Title: `Calcium`
- Unit: `mg`
- Analysis Keyword: `Ca`
- Point of Capture: `Lab`
- Analysis Category: `Water`
- Price (excluding VAT): `10`
- Department `Chemistry`

Repeat the steps for the **Magnesium** and **Total Hardness** Analysis Services
and chose `Mg` and `THCaCO3` as the Analysis Keyword respectively.


**🤓 Pro-Tip:**
You can also duplicate existing Analysis Services from the listing view by
selecting the checkbox of the Service you want to copy and click on the
*Duplicate* button.


### Add Sample Types

To be able to create samples in the system later, we need to add some *Sample
Types* as well. Navigate therefore to the *LIMS Setup* and click on the *Sample
Types* tile.

![Sample Types](/screenshots/sample_types_listing.png "Sample Types")

Create a new Sample Type "Water" by clicking on the "Add" button.

![Add Sample Type](/screenshots/add_sample_type_screen.png "Add Sample Type")

Enter the following values in the add form:

- Title: `Water`
- Prefix: `H2O`
- Minimum Volume: `100 ml`

**☝️Note:**
The Sample Type Prefix `H2O` will control the generated ID of the new sample
later. Please always chose a concise and short identifier!


## Creating the first sample

All Samples reside below *Clients* in SENAITE.

**☝️Note:**
Although the system was initially designed for contract analyses labs, it is
also perfectly possible to configure the system for non-contract-analysis labs ,
e.g. for quality control analyses for the producing industry. Simply add just
one client which represents your own company.

### Add Clients

Navigate to the *Clients* listing over the left side menu. Currently there are
no Clients in the database.

![Clients](/screenshots/clients_listing.png "Clients")

Add a new client by clicking on the *Add* button.

![Add Client](/screenshots/add_client_screen.png "Add Client")

Enter the following values in the add form:

- Name: `Happy Hills`
- Client ID: `HH`

Click the *Save* button when you are done.

**☝️Note:**
The `Client ID` must be unique in the system.


### Add Client Contacts

Each Client needs to have at least one Client Contact which represents a natural
person in the system.

Make sure you are within the newly created `Happy Hills` client and chose then
the *Contacts* tab.

![Client Contacts](/screenshots/client_contact_listing.png "Client Contacts")

Click on the *Add* button and create a new Client Contact with either your own
details or as shown in the screenshot above.

**☝️Note:**
The `Email Address` of the contact will be later used to send the result report.
The system need to have a configured Email Server setting as well.


### Add new Samples

As already mentioned, all samples reside inside Client Entities in the database.
Now that we just created a new Client, we can also add new Samples for this
Client.

Make sure you are in the newly created `Happy Hills` Client and chose the
*Samples* tab.

![Client Samples](/screenshots/client_samples_listing.png "Client Samples")

**☝️Note:**
The number next to the Add button let you chose the number of samples you want
to register in the system at once. You need to chose a value before you click
the *Add* button, otherwise already entered values get lost during reload.

Chose `2` and click *Add*.

![Add Samples](/screenshots/add_samples_screen.png "Add Samples")

Each displayed column represents the data for one sample.

**🤓 Pro-Tip:**
The ⏩ button in the second column let you copy over the row values from the
first column to the other Samples.

**🤓 Pro-Tip:**
You can globally set the visibility and order of the fields by clicking on the
*Manage Form Fields* link in the upper left corner of the form. Simply check
only the fields you need and change the order by dragging and dropping the lines
in that management view.

Enter the following values in the add form:

- Contact: `Rita Mohale`
- Date Sampled: Click the `now` button in the calendar popup to chose the
  current date and time
- Sample Type: `Water`
- Lab Analyses: Select `Calcium`, `Magnesium` and `Total Hardness`

Click on the *Save* button in the lower left corner to proceed.

![Client Samples](/screenshots/client_samples_listing_2.png "Client Samples")

Congratulations 🙌 you successfully created your first Sample in SENAITE.

You can click now on the generated *Sample ID* link to inspect the created sample.
Also note how the generated ID contains our referenced *Sample Type* `H2O` and
is initially in the state `Sample due`, which means that the sample has
physically not yet arrived in the lab.

Continue then with the next section to learn the basic handling of samples in
SENAITE.
