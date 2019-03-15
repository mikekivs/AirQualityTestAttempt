# AirQualityTestAttempt
This is a test attempt for: https://github.com/bbc/vj-code-tests/tree/master/airquality by Michael Kivuva.

## How to install/run
I live demo for the project is available at https://airqualitytestapp.herokuapp.com/ . 
To deploy the project clone the `./airQualityProject/dist` folder to your computer.
Navigate into the `./airQualityProject/dist` folder and serve index.html using a http-server.
I recommend using https://www.npmjs.com/package/http-server which can be installed as follows:
```sh
$ npm install http-server -g
```
If using http-server, just cd into the `./airQualityProject/dist` folder and run the command http-server from yor terminal.
```sh
$ cd airQualityProject/dist
$ http-server
```
If you wish to run the project as dev, you will need to install the node dependancies.
From `./airQualityProject`, run npm install
```sh
$ cd airQualityProject
$ npm install
```
Once dependancies are installed, run ng serve
```sh
$ cd airQualityProject
$ ng serve
```
If you wish to run tests for the project, from `./airQualityProject` run ng test
```sh
$ cd airQualityProject
$ ng test
```
## Build process
I started the project by reading the technical and project requirements from https://github.com/bbc/vj-code-tests/tree/master/airquality. 
This was followed by exploring the files given, mainly `airquality/src/data/english.json` to get an understanding of how the data is structured and how I would present it.
I then made a rough sketch of the layout in a notebook.
I wanted to showcase my skills as a hybrid engineer / designer, so I jumped into Adobe Experience Design (Xd) to make a high fidelity mockup that would guide my user interface implementation. 
Files for the mockup can be found in `./airQualityProject/process`  
  - airQualityMockup.xd
  - airQualityMockup.pdf
  - airQualityMockup.png

Below is a preview of the mockup.
![](https://airqualitytestapp.herokuapp.com/preview.png)
Once I had the design ready. I created a new angular app with angular-cli and started building the components. 
```sh
$ ng new airQualityProject
```
I split the functionality into three parts:
  - A data service that handles where the data is coming from
  - A main app component that renders the story and a form for users to select cities
  - A chart component that shows the data in cigarettes and particulate matter

Finally I wrote some tests to ensure that future modifications don’t break the app.