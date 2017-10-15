# tilr_user_directory

This Repository is just to emulate a contact book of a particular user. Since the contacts are personal to a user 
and should be available to only the user, we use JWT to make sure that user is verified and then only serve the data 
to him/her. The user can <b>add, get and delete</b> his/her contacts. 

Make sure the Monod is running
```sh
$ mongod
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd <directory to where ypu cloned the project>
$ npm install
$ node server.js
```

To make the contacts app work we need to create dummy users. This could be achieved by running the below <b>CURL</b> command:

```sh
curl -X POST \
  http://localhost:3000/rest/register \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b21b0c05-618e-1c7c-fafc-2a400862cc33' \
  -d '{"new_user" : {
	"username": "jane_doe",
	"password": "1234",
    "first_name": "Jane",
    "last_name": "Doe"
	}
}'
```

OR (these are just dummy users, can add any name)

```sh
curl -X POST \
  http://localhost:3000/rest/register \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b21b0c05-618e-1c7c-fafc-2a400862cc33' \
  -d '{"new_user" : {
	"username": "jane_doe_2",
	"password": "1234",
    "first_name": "Jane",
    "last_name": "Doe_2"
	}
}'
```

Once you have run one of the above commands, you can use the app to login through the credentials above and this way you 
can your contacts. 

##TODO

* Need to hide the signup, login once logged-in successfully
* Add Logout option and convert CURD to a register form
* Better Route handling using ui-router
* We should be able to edit and display all the details of the contact.

