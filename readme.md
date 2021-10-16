# Next.js Project to visualise AI image dataset

## Hosted URL
https://infilect.vercel.app/

## Problem statement
Given a set of images and corresponding XML files containing the information about the objects in the image, build a tool to visualize these images along with these objects in the images. The users of this tool are AI engineers who want to understand the dataset, the objects in the images. This includes inspecting certain images individually, glancing through the entire dataset
to search for interesting images, filter only images containing specific types of objects etc.

## Solution
1. The XML is converted and stored in a mongodb cluster. 
2. The images are placed on the server.
3. Hosted on vercel.
4. Display the list of images in '/' route.
5. Results are paginated. 20 results per load. 
6. Can load more images on reaching the end of the screen by clicking on the load more button.
6. Clicking on an image routes to '/images/{id}' route where the file, folder, images(segmented images if they are present) and object json are displayed.
6. Can filter based on object names. Need to type in the search string and click on search to get results. (Note: Debouncing can also be implemented)
9. Toggle the bounding boxes to hide/show them.


## Running locally in development mode
To get started,  run `npm install && npm run dev`:
```
npm install
npm run dev
```
This will startup both the backend and frontend.

## Tech-stack
1. **Frontend**: Next.js, tailwind
2. **Backend**: Inbuilt express server of Next.js
3. **Database**: MongoDB
4. **Storage**: File storage in server and publicly exposed images as static files

### Reasons for choosing Next.js
1. Static **file** serving
2. Provides a solution to build your **API** with Next.js.
3. Its React.js on steroids.
4. Image optimization - always serve correctly sized image for each device, using modern image formats, Images are only loaded when they enter the viewport, with optional blur-up placeholders.
5. Font Optimization
6. 

### Reasons for choosing MongoDB
1. Support for unstructured text
2. Power of Indexing enables for faster retrievals 

### Storage
1. Currently, have utilized static file serving of Next.js
2. We can also make use of cloud services like aws s3, cloudinary, dropbox, etc to store the images. We can also use object locking and authorization for security.

## Performance and Scalability
1. Using Next.js' image optimization which includes serving the image based on viewport, optional blur-up placeholders, caching on server-side, this solution is highly scalable. 
2. This project has Visual Stability, i.e it prevents Cumulative Layout Shift.

## Screenshots

#### Images' listed view
![Images listed view](https://drive.google.com/uc?export=view&id=1DfKhy7a5pp2_8bh2DZN3voZ-lXyWdjs)

#### 'Load more' button at the end of results
!['Load more' button](https://drive.google.com/uc?export=view&id=1Pn3H_ZmAVYOIPrqaAP9PUWRkCwtFqPO4)

#### Individual image view
![Individual image view](https://drive.google.com/uc?export=view&id=1j3CIvUKGh2SPTRJXsO8MM4HUfescrrdq)

#### Filtered Images
![Filtered Results](https://drive.google.com/uc?export=view&id=1leuw9gJ6SbbQgsPzn_MHw60HJrz0wKjo)

#### Bounded boxes 

![Filtered Results](https://drive.google.com/uc?export=view&id=1vNgQhGNO4KQSkkxiv03CaaJU06HqVOuU)