<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./images/bbc.logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">BBC LOWBANDWIDTH</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <br />
    <a href="#">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Landing Page][product-screenshot]](https://example.com)

### Instructions

You have been given some data by the editorial department in the `./src/data` directory.

They need you to build an interactive project where users will select an Indian city and have their local air quality displayed in cigarettes and particulate matter.

How the users select their city is up to you: editorial have used dropdowns, buttons, maps, and keyword entry autocomplete text fields before. It's your choice.

#### Techincal requirements

The task must be served as all flat files so that the solution can scale in a serverless environment - e.g. we would put the HTML, CSS, and JS into S3 and serve statically

The task _could_ use node, npm, webpack, babel etc to compile/transpile into the end project files for deployment. Whatever environment you are comfortable with, but no jquery, please. If you prefer, you can build a webpage by hand - it's up to you. 

The project is going to go live in areas that do not have good broadband access, so please pay attention to file size and performance.

Some users may have older phones, so please ensure your code works on IE11 and up.

#### Project requirements

Must have: 
- Ability for users to choose a city and see air quality in the form of cigarettes and particulate matter (PM2.5)
- all text fields from the data json file displaying in a logical manner
- All production files output into a `./dist` folder ready for making live.

Nice to have:
- A version in hindi (data also supplied in separate JSON file)
- Test cases for your code.

#### What we're looking for

Ideally, we're looking for a logical approach to the work, some creativity, beautiful code and a nice output, but we are not expecting a finished product by a long chalk.

Don't spend too long on it. Try and cap it at 4 hours.

This really is an opportunity for us to see how you think, how you organise yourself, how you express yourself. Have fun!


#### Help

If you have any issues with this assessment or require some clarification then
please email your contact at the BBC.

#### Submission

Please send your code together with a Readme file explaining how to install/run
the project and any other notes as a Zip file or a GitHub repository. Please
also confirm that we have received the test (it may get blocked by spam
filters).


### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Vue](https://vuejs.org/)
* [Vue-test-utils](https://vue-test-utils.vuejs.org/)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation using NPM

1. Get to  [https://github.com/jeff-ofobrukweta/bbc-nobandwidth](https://github.com/jeff-ofobrukweta/bbc-nobandwidth)
2. Clone the repo
   ```sh
   git clone https://github.com/jeff-ofobrukweta/bbc-nobandwidth
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run unit test 
   ```sh
   npm run test:unit
   ```
5. Run lint 
   ```sh
   npm run lint
   ```
6. get the dist production build 
   ```sh
   npm run build
   ```

### Installation using Yarn

1. Get to  [https://github.com/jeff-ofobrukweta/bbc-nobandwidth](https://github.com/jeff-ofobrukweta/bbc-nobandwidth)
2. Clone the repo
   ```sh
   git clone https://github.com/jeff-ofobrukweta/bbc-nobandwidth
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Run unit test 
   ```sh
   yarn run test:unit
   ```
5. Run lint 
   ```sh
   yarn run lint
   ```
6. get the dist production build 
   ```sh
   yarn run build
   ```


<!-- USAGE EXAMPLES -->
## Usage
To Get the Flat run command below:
### Bilding dist folder for deployment
 production build 
   ```sh
   npm run build
   ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- CONTACT -->
## Contact

Jefferson . Ofobrukweta . O - [@https://www.linkedin.com/in/ofobrukweta-jeff-207506136/](https://www.linkedin.com/in/ofobrukweta-jeff-207506136/) - oghenerukevwejeff@gmail.com

Project Link: [https://github.com/jeff-ofobrukweta/bbc-nobandwidth](https://github.com/jeff-ofobrukweta/bbc-nobandwidth)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-url]: https://www.linkedin.com/in/ofobrukweta-jeff-207506136/
[product-screenshot]: images/bbc-screen.png
[product-precaching-config]: images/workbox_precaching.png
