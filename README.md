# Project 5: Nodejs Express

---
**Name:  Matt Heerspink**  
**Contact: mheerspink75@gmail.com**  
**Organization: Texas A&M University Kingsville**  
**Program:  Full Stack Web Development Bootcamp**  
**Project:  MERN Photo Mapping Application**

---

## Abstract:  

Full-Stack MERN Photo-Mapping application combining Create React App frontend with Nodejs-Express REST API backend and MongoDB Atlas cloud database.  The Photo-Mapping application integrates external Geocoding, Maps and Places APIs from Google Cloud Platform.  Users are required to upload a profile image during account registration. Once authenticated, users can create, update and delete their photo blog entries.  User authentication, a blog post image and a valid address is required when a blog entry is created.  The backend REST API retrieves blog post location data from Google Cloud Platform. The REACT App frontend then renders a map to the location. The REST API backend and REACT App front end are deployed separately as stand-alone apps on Heroku.  The code to develop this App was primarily taken from lectures created by Maximilian Schwarzmüller then updated and combined with code inspired by lectures created by Brad Traversy.

---

**Install instructions**

**1.**  Clone the repoistory
```
git clone https://github.com/mheerspink75/MERN-Project.git
```
**2.** Install the backend and frontend npm packages
```
npm install && cd client && npm install
```

**3.** Login to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), create a new database and name it "places". Set up database access and network access and copy the connection string.

**4.** Login to the [Google Cloud Platform](https://cloud.google.com/) dashboard, create a new project, enable the Geocoding, Maps Javascript and Places APIs and create and create an API key.

**5.** Create environment variables for the backend in the root directory by creating a nodemon.json file.
```
cd .. && touch nodemon.json
```
**6.**  Add your MongoDB Atlas connection string, Google API and JWT keys to the nodemon.json file.
```bash
# Add this script to nodemon.json
{
    "env": {
        "GOOGLE_API_KEY": "<YoUrApIkEy>",
        "ATLAS_URI": "mongodb+srv://<username>:<password>@cluster0-wqcxx.gcp.mongodb.net/places?retryWrites=true&w=majority",
        "JWT_KEY": "<jWtKeY>"
    }
}
```
**7.** Create environment variables for the frontend by creating a .env file.
```
cd client && touch .env
```
**8.** Add your google api key and dev server to the .env file.
```bash
# Add this script to client/.env
REACT_APP_GOOGLE_API_KEY=<YoUrApIkEy>
REACT_APP_BACKEND_URL=http://localhost:5000/api
REACT_APP_ASSET_URL=http://localhost:5000
```
**9.** Run the dev server...
```bash
# Run the front end and backend dev servers concurrently
npm run dev
```
**10.** Or, run the frontend and backend servers individually...
```bash
# Run just the backend dev server
npm run server

# Run just the frontend dev server
cd client && npm run client

# Run just the frontend build folder
cd client && npm run build && npm run static
```

---



