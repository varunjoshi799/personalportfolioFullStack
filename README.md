# personalportfolioFullStack

## Purpose
The purpose of this project was to learn more about full stack web development and convert a front-end project into a fullstack project. 
## Intention
I already had a personal portfolio: [www.theVarunJoshi.com](www.theVarunJoshi.com)
Given that it was a photo heavy website, I wanted to implement full stack capabilities that made GET requests to retrieve photos, instead of creating a large project that required downloading all photos at once.
## Problems and Solutions

### Identifying my stack

**Problem:** Which database would serve my needs best?

**Solution** I knew I would use Express and Node.js as my middleware. I identified that a postgreSQL database would work best. I found tutorials online that helped me gain an initial understand of postgreSQL. I determined that my schema would include an index, title, and link to the actual photo. My front end was already built on React

**Takeaway:** Identifying the schema first is extremely useful to reduce development time down the road

### Identifying my storage service

**Problem:** I needed somewhere to store my photos for retrieval

**Solution:** I discovered Cloudinary. It had an API service which would securely let me access my photos and teach me more about the process

**Takeaway:** Cloudinary is extremely powerful. Over time, I want to take advantage of its services such as lazy loading, scripting different images based upon network speeds, etc. all to make the user experience as good as possible 

### Connecting the dots

**Problem:** I needed to develop my routes

**Solution:** Because I didn't want to overly complicate Cloudinary or my database, I determined that I would structure my routes in a way, so that they would only retrieve the specific images I needed, while keeping my code as DRY as possible

**Takeaway:** My endpoints were created with my database structure in mind. Based on which title I quered into my endpoint, my SQL script would retrieve only the photos for the specific album I required

### Deployment is difficult

**Problem:** I didn't know how to deploy a fullstack project

**Solution:** I'm still working on this part. AWS proved too difficult for the time being. Currently, I'm trying Netlify

**Takeaway:** Deploying a full stack project with a database is far more complicated than a frontend one!


## Additional

A deployed website is coming soon!