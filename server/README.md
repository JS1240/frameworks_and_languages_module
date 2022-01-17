Server
======
Project Name 
======
Digital Artefact 

Under development server implementation using Django as a back end framework.

Project status
======
The project is currently under development in the server side but the client side is all finished and ready to run.

Installation and Setup Instructions
======

Existing virtualenv
======
If your project is already in an existing python3 virtualenv first install django by running

$ pip install django

Getting Started
======
First clone the repository from Github and switch to the new directory:

$ git clone git@github.com/USERNAME/{{ project_name }}.git
$ cd {{ project_name }}

Activate the virtualenv for your project.

Install project dependencies:

$ pip install -r requirements/local.txt

Then simply apply the migrations:

$ python manage.py migrate

You can now run the development server:

$ python manage.py runserver

======

This was a two and half months long project built during my third year at Canterbury Christ Church University of Frameworks and Languages. Project goals included using technologies learned up until this point that we chose in the assessment one and familiarizing myself with the documentation and functionalities of the framework.

We had to build a web application which would take inputs from the user for the item. The item should consist of user id, keywords, description, latitude, longitude, date from and date to, and image.

During this period it was really difficult for me to finish the project as there are all restrictions with COVID-19 it was hard to go and visit my family. Also, a family member had died which took me some time to mourn. There were also some other less important risks which held me from finishing this project as my laptop was stolen and I had to find another job.

At the end of the day, the technologies that I implemented in this project were interesting to use and I am looking forward to use React and Django in future.


======

Postgresql needs to be installed for server to be running. Download postgress and steps need to be followed.
And during this you will be asked password by postgress and put this in the settings file where is database name.