# Authorisation web app

This web app was created as test task for OwnLab company

##  Project Summary

This web program can display the following pages such as:
- / - home
- /login - login and password entry page
- /news - page with news (any information of the same type)
- /profile - page with public text, inaccessible without authorization

Implemented functionality:
- login
- logout
- validation of authorization fields
- transition between pages 

### Authorisation data
The login form (/login) accepts "fake" data:

| Name       | Value    | Type  |
|:-----------|:---------|:------|
| `Login`    | `string` | Admin |
| `Password` | `string` | 12345 |

## Prerequisite

- npm >= 5.5.0
- node >= v16.14.0

## Install and Run the Project

Install
```bash
  npm i
```
Usage
```bash
  npm start
```
Run lint
```bash
  npm run lint    
  ```
Run tests
```bash
  npm test    
```
Buid
```bash
  npm build    
```






## Authors

- [Oleksandr](https://www.linkedin.com/in/oleksandr-siaskyi-325503139/)

