---
id: sample-specifications
title: Sample Specifications
sidebar_label: Sample Specifications
---

In the previous Section you learned how to manage Analyses and how to add Result
Ranges for single Analyses. In this section we are going a step further and
create an *Analysis Specification* for the whole Sample and learn about inclusive
and exclusive borders in the minimum and maximum Ranges.


## Add global Analysis Specifications

*Analyses Specifications* are defined per *Sample Type* and can be added in the
*LIMS Setup*.
Click on the ⚙️button in the upper right corner and chose the *Analysis
Specifications* tile and press then the *Add* Button.

![Add Analysis Specification](/screenshots/add_analysis_specification_screen.png "Add Analysis Specification")

Enter the following values in the add form:

- Sample Type: `Water`
- Title: `Water`
- Description: `Analysis Specifications for Samples with the Sample Type "Water"`
- Specifications:
  - Calcium:
    - `Min warn: 9.5`
    - `Min Operator: >`
    - `Min: 9`
    - `Max Operator: <`
    - `Max: 11`
    - `Max warn: 10.5`
  - Magnesium:
    - `Min warn: 9.5`
    - `Min Operator: >`
    - `Min: 9`
    - `Max Operator: <=`
    - `Max: 11`
    - `Max warn: 10.5`
  - Total Hardness:
    - `Min warn: 9.5`
    - `Min Operator: >=`
    - `Min: 9`
    - `Max Operator: <=`
    - `Max: 11`
    - `Max warn: 10.5`
    - `< Min: <9`
    - `> Max: >11`

Click the *Save* button when you are done.


### Min/Max Operators Explained

You might have wondered about the logic of the *Min Operators* `>` and `>=` and
the *Max Operators* `<` and `<=` about being maybe the wrong way around, because
according to Wikipedia, the "greater than" sign is `>`[¹][1] and the "less than"
is `<`[²][2].

However, the logic used here specifies everything that is **in range** rather
than **out of range** with these operators.

Therefore, the `Min operator` states that everything greater or equal to the
entered value is *in range*, and the `Max operator` states that everything lower
or equal to the entered value is *in range*.

To sum it up this means that values of `9` and below and `11` and above are out of
range for `Calcium`, but not for `Total Hardness`, where `9` and `11` are included
by the `Min Operator` and `Max Operator`. The `Magnesium` Analysis excludes `9` for
the minimum allowed value, but includes 11 for the maximum allowed value.


## Applying an Analysis Specification to a Sample

Now it is time to apply the *Analysis Specification* to a Sample. Navigate to
the listing of all Samples and copy one of the existing Samples.

Add the new created *Analysis Specification* in the corresponding field and
press the *Save* button when you are done.

![Add Sample with Specification](/screenshots/add_sample_with_specification.png "Add Sample with Specification")

**☝️Note:**
The `(Lab)` Suffix in the name distinguishes between global `(Lab)` and Client
`(Client)` located *Analysis Specifications*.

Receive the Sample after it was registered as you did in the section [Sample
Basics](sample-basics#receive-the-sample) and make sure you are in the *View*
tab of the Sample.





[1]: https://en.wikipedia.org/wiki/Greater-than_sign
[2]: https://en.wikipedia.org/wiki/Less-than_sign

