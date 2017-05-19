## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Home

**HeaderContainer**
  - Header

**BusinessIndexContainer**
  - BusinessIndex

**BusinessIndex**
  - BusinessIndexItem
  - BusinessDetailContainer

## Routes
|Path   | Component   |
|-------|-------------|
| "/" | "SessionFormContainer" |
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/search |  "BusinessIndexContainer |
| "/businesses/:businessId" | "BusinessDetailContainer" |
