Needed a Simple place to get some ideas down

--- General Ideas ---
With the dotenv file we could even hold off on loading very important pages until all checks are done on the env file
We could also pack some wireguard server configs into this as well

on user creation we do two things,
1. create and store the key in the database
2. create and store env / config in a directory that the database will point to as well.

Databases | Tables  --- Selling Setup
1. Admin Table
  1a. username
  1b. password
  1c. config 1 location
  1d. config 2 location
  1e. config 3 location
  1f. config 4 location
2. User Table
  2a. login key
  2b. payment date
  2c. expiration

Database | Tables  --- Site to Site Setup
1. Admin Table
  1a. username
  1b. password
  1c. config 1
  1d. config 2
2. User Table
  2a. First Name
  2b. Last Name
  2c. Email
  2d. Position
  2e. config location

--- More Technial Ideas ---
// If env does not exist \\
1. we should create it and start the setup process for the YouNameItVPN
2. We should init a database as well so that we can store key code for anon login
  2a. database will only hold 2 tables
  2b. first table - admin section --- username, password, config location
  2c. second table - login key code(no username/password), directory, last paid, experation date
3. We should during the first run probably ask the user what they want are going to use it for
  3a. Selling VPN
  3b. Site to Site
4. Need to come up with separate Management screen depending on what the user is going to do sell / site to Site
  4a. maybe just hide the payment area and not allow others to Login
  4b. we need separate js files for site to site or selling


** when users create a login key we need to hash before sending and storing in the database, we should never send anything not hashed
  This includes all variables sent back to the server as well. everything should be hashed and unhashed **

--- Screens ---
- First run
  1. database creation / env creation
  2. Ask if selling or Site to Site
  3. admin user creation
  4. wireguard install / setup
  5. first client setup / start client facing
- Every other time
  1. Login / create screen
  2. Management dashboard
  3. Payment Page
