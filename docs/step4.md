# Step 4

Create Account to [MongoDB](https://www.mongodb.com/)

![mongodb](src/mongodb.png)

create an organization

![alt text](src/mongodb-step2.png)

Name Your Organization and Click to Button >> Next

![alt text](src/mongodb-step3.png)

Click to Button >> Create Organization

![alt text](src/mongodb-step4.png)

Click to Button >> New Project

![alt text](src/mongodb-step5.png)

Name Your Project and Click to Button >> Next

![alt text](src/mongodb-step6.png)

Click to Button >> Create Project

![alt text](src/mongodb-step7.png)

Click to Button >> Create a cluster

![alt text](src/mongodb-step8.png)

Region : Singapore (ap-southeast-1)

Click to Button >> Create Deployment

![alt text](src/mongodb-step9.png)

Click >> Allow Access from Anyware

![alt text](src/mongodb-step10.png)

Click to Button >> Add IP Address

![alt text](src/mongodb-step11.png)

- username : for you
- passeord : for you

Click to Button >> Create Database User

![alt text](src/mongodb-step12.png)

Click to Button >> Connect to Cluster

![alt text](src/mongodb-step13.png)

Click to Button >> MongoDB for VS Code

![alt text](src/mongodb-step14.png)

Copy :

`mongodb+srv://Admin:<db_password>@cluster0.7f15f.mongodb.net/`

Click to Button >> Done

![alt text](src/mongodb-step15.png)

Go to Project on VS Code

Create a new file `root/.evn`

~~~evn
MONGODB_URI=mongodb+srv://Admin:<db_password>@cluster0.7f15f.mongodb.net/
~~~

Chang `<db_password>` for your password

Save and close

Verify Environment Variable Loading :

Make sure you are loading environment variables from your `.env` file. You likely need the `dotenv` package :

~~~bash
npm install dotenv
~~~

Edit file `root/.gitignore`

~~~.gitignore
// ... rest code

# local env files
.env*.local
.env

// ... rest code
~~~

Save and close

[Next Step >>](step5.md)
