# docBert: Slack File Management Bot

## Docker & MongoDB ##

This guide is a quickstart cheatsheet to getting a MongoDB database up and running in a Docker container.
[Docker](https://www.docker.com/) is easy to use and intuitive once you get the hang of it. It's also a nice skill to have in your
list of skills on your resume. Lets get cracking!

## Docker in a nutshell ##

What's Docker, and why use it?

As FCC students, we're used to writing our code in tiny blocks, each in isolation. We don't have to worry about
dependencies, packages, dev environments, deployment, code testing, git branches, etc. 

If you've created a Wordpress site before, it was as easy as sending files via FTP and letting the server setup your MySQL database.

As JS developers/engineers, we manage our own servers. Docker was designed specifically to make that task easier by handling deployment. 

Example: 

 1. We create a Docker 'container' with Linux (Ubuntu 16.04) + MongoDB (version 3.4) running inside it.

 2. We 'push' the container to our server (e.g. Amazon AWS), and the container is deployed to our exact specification.

 3. A co-worker working on the same code base could just 'pull' the container you created, and be working on the same environment in 
    _minutes_. 

 4. Your container which run on your PC/Mac would be completely isolated - that means you experiment to your heart's content.

 Enough talk, lets code!


## Step 1. ##

Install Docker. You might get some errors along the way, but its nothing Professor Google and Stackoverflow can't solve.

Docker for [Mac](https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac).

Docker for [Linux](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04).

Docker for [Windows](https://docs.docker.com/toolbox/toolbox_install_windows/). Install **Docker Toolbox** from the link. Docker for Windows has minimum requirements of Windows 7, 64-bit.

**Notes for Windows (IMPORTANT)**

You will notice Docker-Toolbox installs 2 programs for you - Kitematic and Docker Quickstart.

Use the Quickstart to launch the Docker Toolbox terminal and run all commands in Step 2 from it.

**Do not** run the commands from Windows Powershell or Command Prompt.


## Step 2. ##

Docker has two key concepts you should understand : images and containers. Both will be explained a little further in **Step 3**.

**Linux & Mac**

Here's the original [article](https://docs.docker.com/engine/getstarted/step_three/#step-2-run-the-whalesay-image).

Test your Docker installation by pulling a basic image to your machine: 

`$ docker run docker/whalesay cowsay boo`

Docker will download an image and run it as a container. You should see a whale saying 'boo' once the process is done.

Run `docker images` :

```
 $ docker images
 REPOSITORY           TAG         IMAGE ID            CREATED            SIZE
 docker/whalesay      latest      fb434121fc77        3 hours ago        247 MB
```

## Step 3. ##

Simple explanation of images and containers. **Lets use a suitable analogy : _film photography_**:

 * Docker images are similar to the original negatives you have when you've spent a roll of film.

 * Docker containers are similar to the photos you print at the shop with your negatives. You can print as many as you want, but the    original negatives stay unchanged.

That means you can use a container however you want. If you completed the whalesay test above, you have this Docker image: **docker/whalesay**.

Lets move on to MongoDB. You can read more [here](https://www.mongodb.com/nosql-explained).

Pull a Docker image of MongoDB. This command pulls an image of MongoDb from Docker Hub.

```
$ docker pull mongo
```
Once the images is downloaded, do :

```
$ docker images
REPOSITORY           TAG         IMAGE ID            CREATED            SIZE
mongo                latest      ad974e767ec4        3 weeks ago        402 MB
```

You should see something similar to the above. Next, lets type the command to have our Docker image run **_as a container_**

```
$ docker run --name docbert-db -p 27017:27017 -d mongo
```
The docker CLI flags explained:

 * --name : the name of your container (it can be anything)
 * -p     : the port you'll be using to access it with JS (use 27017 for now)
 * -d     : run the container in detached mode, which means keep it running until you say stop
 * mongo  : that's the _image_ we're creating the container from

Then run `docker ps` (to show all running containers):

```
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
e4427f49ec82        mongo               "/entrypoint.sh mo..."   3 seconds ago       Up 2 seconds        0.0.0.0:27017->27017/tcp   docbert-db
```

If you see the above, it means your container is up and running!

Now go to your browser and visit `http://127.0.0.1:27017/` <--- notice 27017 is the port we specified above

If you see a message from MongoDB, scolding you : `It looks like you are trying to access MongoDB over HTTP on the native driver port.` Success! You've successfully run Docker and an isolated MongoDB database. 

Next up, [Mongoose](http://mongoosejs.com/), a Javascript library that helps us easily interact with MongoDB. Feel free to run your own experiments beforehand.