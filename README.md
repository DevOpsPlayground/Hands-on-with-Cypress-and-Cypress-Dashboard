# playground-cypress-dashboard
Set up repository for the DevOps Playground with Cypress Dashboard

Running Cypress with record from your local machine

cypress run --record --key <record key>

--OR--

export CYPRESS_RECORD_KEY=<record key>
cypress run --record

TIP: Store your <record key> in your .env file, ADD: .env to .gitignore file

Initial Set Up – Check Before You Start!

Do you have a GitHub account? If not sign up here: https://github.com/


# Step 1: Getting Started with Cypress Dashboard

Go to https://www.cypress.io/dashboard and make an account! Pro-Tip you can just use your GitHub account to log in!

Click on 'Your Personal Organisation' and then click ‘Set Up Project’ to create your first cypress dashboard project. You will be redirected to Cypress’s Dashboard setup guide. You can follow through this to set up independently or continue along with this guide to set it up with this project.

 

First fork this repository into your own GitHub account by clicking the ‘Fork’ button in the top right: https://github.com/GraceATree/playground-cypress-dashboard

  
Once GitHub has finished copying you should now see this repository under your GitHub username with below the original repository that you Forked from.  
‘<Your_UserName>/playground-cypress-dashboard’

 
Now click on the big green ‘Code’ button copy the Https link of GitHub repository. 

 

Now go to the terminal and run the following command to clone this repository to your local machine. 

‘git clone <link to your GitHub repo>’

Now open your repository that you just cloned down by typing ‘code .’ to open in visual studio code. Here lets take a look at the package.json file. In this file is all the dependencies that will be needed to run the application along with developer dependencies such as our Cypress engine. If we take a look at the scripts object we can see commands that we can use to get started. However these commands run through our project dependencies that need to be downloaded and installed. We will do this by opening up a terminal inside visual studio code (the IDE) through ‘Terminal-> New Terminal’ and typing ‘yarn’ .

 

Now the dependencies (including cypress) are installed we can run ‘yarn cypress open’ which will open up the Cypress UI. In the top right you will be able to log into Cypress. Do so with your GitHub account details.

Once logged in click on ‘Settings->Record Key’. Here you will find your record key needed to authorise your cypress test runner to record the tests to your Cypress Dashboard account. 

To be able to use this key we will take a look at the example.env file. Copy the contents inside the file and create a new ‘.env’ file and paste the contents. Now we need to copy the record key to the right side of the assignment operator

‘CYPRESS_RECORD_KEY=<your-cypress-dashboard-key>’
e.g. CYPRESS_RECORD_KEY= XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

You will also need to copy the ‘Project ID’ from ‘Cypress->Settings->Project ID’ and place this value into the cypress.json file, replacing the temporary value that was assigned. 

Now let’s test we have managed to integrate. We will do this by opening another terminal inside of visual studio code to run the application with ‘yarn start’. Once the application is running you should see this message ‘Compiled successfully’ in the terminal.
 

Now we need to kill cypress in the first terminal (1: node) by navigating back and doing ‘ctrl+c’. Or you can manually close cypress. 

 

Once cypress is killed we need to export our cypress key by running ‘export CYPRESS_RECORD_KEY=< your-cypress-dashboard-key>’. You can copy this from your .env file to save you some time. 

There is an initial test that has already been written so we can test our configuration with Cypress Dashboard. If we go to the package.json file scripts object we can see there is a command called ‘test-dashboard’. We will run this in our terminal with ‘yarn test-dashboard’. This command contains the following flags ‘--report’ and ‘--key’ which let cypress know we wish to record our results to Cypress dashboard along with where it can find the environment key for authentication. 

Feel free to look through the output in the console. You will see the test run and pass along with a video being created. The most important part to take note of is the ‘Uploading Results’ section as this tells us if it was successfully uploaded to our cypress dashboard. We can now confirm this by going to our cypress dashboard account. 

 

Woohoo! Congratulations you have now set up the application with cypress dashboard. But just to check it is all working well lets go ahead and edit the test file to fail. Go ahead and open ‘cypress/integration/test.spec.js’.

We can make this test fail by inverting the assert on the submit button to ‘not.be.visible’

cy.get('[type="submit"]').should('not.be.visible');

Now run the ‘yarn test-dashboard’ command in the terminal and you should see the test fail. Once done uploading check back on Cypress Dashboard. (You may need to refresh the page). 

 

 

Awesome! Looks like it is working correctly. If you have sped ahead please take some time to familiarise yourself to Cypress Dashboard if you are new. You can click on the runs and view more details about the tests that were run and what has been recorded. This is a great way to see how easy it is to view reasons for test failures when using Cypress along with test successes. 

Before we wrap this section of Cypress Dashboard up, there is one more configuration to make. This is with adding the GitHub Webhook integration. 

In Cypress Dashboard go to ‘Integrations’ and select ‘Install’ for GitHub. 

 

You will be redirected to GitHub where you chose to allow Cypress Dashboard access to all repositories in your account or you can just select this repository ‘playground-cypress-dashboard’.

 
Once installed Cypress Dashboard will submit status checks for your cypress test runs on pull requests. We can make this check required by configuring the settings of our GitHub repo. Go to your GitHub Repo and click on ‘Settings’. As you have forked this repository it will have inherited the branch protection policies that were already set up. 

Next we will move onto the next section with adding in CI to trigger this Cypress Integration – Automating Cypress Tests though AWS Code Build.
