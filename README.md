# Weathr.io


## Building and installing

Make sure you have installed Node.js (at least v12) and Python (v3) on your computer. Run `npm install` to build all necessary dependencies for overall project. `cd frontend` and run `npm install` to install those for the frontend. `cd backend` and run `pip install -r requirements.txt` (if you have pip on PATH) or `py -m pip install -r requirements.txt` to install those for the backend. Note that you can do so globally or you can set up your own virtual environment (venv).

Run `git checkout dev` so that you're working on the developer branch. From there, you can checkout to feature branch you're currently working on

Run `npm run start:dev-venv` or `npm run start:dev-global` to start the local servers for both frontend and backend to begin development! Use the global version if you don't have a virtual environment set up.

If you only need to work on the backend, just run `npm run start:backend`. If you only need to work on the frontend, just run `npm run start:frontend`. 

# AWS Notes

You will need an Amazon Web Services Account. 

Install the AWS CLI and link your account by running `aws configure` and entering in your AWS credentials.
Your AWS Account will host the resources (DynamoDB tables, ElasticBeanstalk Applications, CodePipeline pipelines) necessary to develop and deploy the application.
