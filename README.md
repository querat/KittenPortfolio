# KittenPortfolio

This project is to become be a small portfolio about administrating kittens with a dashboard

### Dependencies:
- Frontend:
  - ReactJs
  - Redux (State management)
  - react-router (URL manipulation)
  - react-feather (icons)
  - axios (AJAX queries)
  - reactstrap (Layout)
  
- Backend:
  - Django
  - Django REST framework
  - Django CORS headers (You just risk getting your kittens hijacked by a third party)

## Installation & Running of the project

### Frontend
You can run `npm install` in the frontend directory to fetch the dependencies. I am using npm `6.4.1`

#### Running the project

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


### Backend
I am using python3.7.
you need to create a virtualenv, activate it and install the requirements.

`cd backend`

`python3.7 -m venv ./virtualenv`

`source ./virtualenv/bin/activate`

`pip install -r requirements.txt`

You can then run the project this way:

`./manage.py runserver`

# TODO
Users & JSON Web tokens based authentication
more kittens data fields


