# Businessonbot
#Task2 backend 

Created a REST service that can fetch bank details, using the data given in the API’s query parameters. 

#Case 1

 Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.

Request URL  - /api/search?q=Mumbai&limit=2&offset=1 
![image](https://user-images.githubusercontent.com/83957391/221861606-efe4f63a-f63d-409f-ad31-e0aeafab09b8.png)

#Case 2

 Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset

Request URL  - /api/branch?q=LONI&limit=1&offset=0
![image](https://user-images.githubusercontent.com/83957391/221861941-8104ca6d-45eb-4d8c-b645-639f21188c9c.png)

Request URL  - /api/branch?q=LONI&limit=1&offset=1
![image](https://user-images.githubusercontent.com/83957391/221864175-9367a6ba-fada-497f-96b8-60742f6802ca.png)


#Running server
![image](https://user-images.githubusercontent.com/83957391/221863316-be1ebe34-8637-45f2-bdd8-88a80a3156cc.png)

#PostgreSQL Database
![image](https://user-images.githubusercontent.com/83957391/221863186-7813bdbb-bc07-4103-a97c-97fc25ad4915.png)



