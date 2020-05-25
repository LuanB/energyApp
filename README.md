
Decision for the mobile platform:

I have gone with React Native mobile platform because I considered the target audience end user and product category "Music festival app". I felt a mobile app platform would be the best platform for the digital product considering our end user and the way the digital product would be used.


Comments on this task:

Main task is normalising the nested object from the api into a form required by the coding challenge. I mapped over the jsonData and then created an object with the required structure for the front end UI. There will be major issues for future CRUD operations giving that these tasks are done in the front end.

- Doing this task in the front end is not recommended:

-Performance issue:
- Time complexity issue Big O.  if we scale the data object up to several hundred festivals with several hundred bands would create major performance problems for the frontend without careful consideration of the data structures - hash tables, objects. 

Poor performance, delay in response from the UI would severely impact User Experience.

- Scalability - horizontally - If we need to update the schemas, objects, or add new features such as non-bands - performers, interlude acts. Maybe the product manager discovered a key feature we need. Then updating this manually in the front end without tools such as those in the backend would be prone to delays and errors.


-If we need to do this on another client such as a Web app. Then this code needs to be repeated on this new client. Any updates would need to be done on both mobile and the new clients - web, tablet etc. -Replication of work

-slow Velocity  / poor use of development resources - this task of data maulatiplation on the front end puts more load on the front end developers to manually do this task. Backend developers have access to tools and frameworks to quickly take care of this task.
Any future extensions / maintenance would require frontend development resources to manually do this work.

