<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the net-ninja-node-crash-course and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** drobb2020, net-ninja-node-crash-course, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/drobb2020/readme-template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Node.js Crash Course Tutorial</h3>

  <p align="center">
    Learn Node from the ground up - what it is, how to use it, and how to make dynamic websites.
    <br />
    <a href="https://github.com/drobb2020/net-ninja-node-crash-course"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/drobb2020/net-ninja-node-crash-course">View Demo</a>
    ·
    <a href="https://github.com/drobb2020/net-ninja-node-crash-course/issues">Report Bug</a>
    ·
    <a href="https://github.com/drobb2020/net-ninja-node-crash-course/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
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
      <ul>
        <li><a href="dotenv-configuration">dotenv configuration</a></li>
        <li><a href="#running-the-project">Running the Project</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![Blog Ninja Node.js Tutorial](https://github.com/drobb2020/net-ninja-node-crash-course/blob/main/images/screenshot.png)

This project is based on a [YouTube Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU) presented by The Net Ninja. This tutorial is worth watching and you will learn many valuable examples of how to work with Node.js, express, and MongoDB.

### Built With

* [Node.js](https://nodejs.org/en/)
* [expressjs](https://expressjs.com/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [MongoDb Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_canada_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624311&gclid=Cj0KCQjw5uWGBhCTARIsAL70sLJqIKC0gb4tZtQGA-wFIy60Q18IwifJY4ahHodtUxeFH47e_VLVRL8aAnBKEALw_wcB)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This project assumes that you have Node.js and npm installed on your local machine. After that you can use npm to install the following packages:

* npm

  ```sh
  npm install ejs express mongoose dotenv
  ```

Other npm packages that were installed:

  ```sh
  npm i -g nodemon # Installed globally
  npm i lodash morgan # Installed earlier in the tutorial but not used in the final project.
  npm i serve-favicon # Installed by me to add a favicon.ico to the project (work-in-progress)
  ```

* MongoDB Atlas
  
  You will also need a MongoDB Atlas account and configure a cluster and database.

### Installation

1. Clone the net-ninja-node-crash-course

   ```sh
   git clone https://github.com/drobb2020/net-ninja-node-crash-course.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

This is a simple example of a blog site where anyone can post a new blog, or delete an existing blog. There is no authentication mechanism attached to this project. Therefore it is not suitable for production, but is a great learning tool for Node.js and express.

### Dotenv Configuration

To protect your username and password to MongoDB Atlas it is highly recommended to store your MongoDB connection string in an environment variable. The npm module dotenv is perfect for this. Make sure you do not accidentally send the .env file to github by adding the filename to your gitignore file.

### Running the project

You will find in package.json a script named dev. To startup the project use the following command:

  ```sh
    npm run dev # this will run the project using nodemon
  ```

  ```sh
    npm run start # This will run the project without nodemon
  ```

  In both cases the server is designed to run on: [http://localhost:3000](http://localhost:3000)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/drobb2020/net-ninja-node-crash-course/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

David Robb - [@DavidRobb2](https://twitter.com/DavidRobb2) - drobb2011@gmail.com

Project Link: [https://github.com/drobb2020/net-ninja-node-crash-course](https://github.com/drobb2020/net-ninja-node-crash-course)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [The Net Ninja](https://www.youtube.com/c/TheNetNinja/featured)
* [Original Github Repository](https://github.com/iamshaunjp/node-crash-course)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/drobb2020/net-ninja-node-crash-course.svg?style=for-the-badge
[contributors-url]: https://github.com/drobb2020/net-ninja-node-crash-course/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/drobb2020/net-ninja-node-crash-course.svg?style=for-the-badge
[forks-url]: https://github.com/drobb2020/net-ninja-node-crash-course/network/members
[stars-shield]: https://img.shields.io/github/stars/drobb2020/net-ninja-node-crash-course.svg?style=for-the-badge
[stars-url]: https://github.com/drobb2020/net-ninja-node-crash-course/stargazers
[issues-shield]: https://img.shields.io/github/issues/drobb2020/net-ninja-node-crash-course.svg?style=for-the-badge
[issues-url]: https://github.com/drobb2020/net-ninja-node-crash-course/issues
[license-shield]: https://img.shields.io/github/license/drobb2020/net-ninja-node-crash-course.svg?style=for-the-badge
[license-url]: https://github.com/drobb2020/net-ninja-node-crash-course/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/david-robb-42436a20/
