<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <!-- <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">COMPRESS-DECOMPRESS</h3>
  <p align="center">
    A basic compress-decompress web page built on C++ with a lot of room for work.
    <br /><br />
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
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
<a name="about-the-project"></a>
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
This web application allows users to compress and decompress text files using the Huffman coding algorithm. The backend of the application is built using C++ and Express.js, while the frontend is developed using Next.js. This README provides instructions for setting up and using the application.

Huffman coding is a lossless data compression algorithm that assigns variable-length codes to input characters based on their frequencies. This enables more frequent characters to be represented with shorter codes, reducing the overall size of the data. The backend handles the compression and decompression processes, while the frontend provides a user-friendly interface for interacting with the application.


<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- GETTING STARTED -->
## Getting Started
<a name="getting-started"></a>
This is an example of how you may set up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation
<a name="installation"></a>
<ul>
  <li>
  1. Clone the repo

   ```sh
   git clone https://github.com/Rutvik-R/Compress_decompress.git
   ```
  </li>
  <li>
2. Install all packages from package.json
    
  ```sh
    cd Compress_decompress\Front_end
    npm i
    cd ..\Back_end
    npm i
  ```
  </li>
  <li>
3. Create .env file in Front_end and write 

    BACK_END_URL = http://localhost:5000/
  </li>
  <li>
4. Start Front_end Server for that go in Front_end and run
    
    npm run dev
  </li>
  <li>
5. Start Back_end Server for that go in Back_end and run

    node App.js
</li>
<li>
  6. Finally Done now open this url in Browser
 
  ```
   http://localhost:3000/
  ```
</li>
</ul>


<!-- CONTACT -->
## Contact
<a name="contact"></a>
Rutvik Ranpariya - [@twitter_handle](https://twitter.com/RutvikRanpariya) - rutvikranpariya1221@gmail.com

Project Link: [https://github.com/Rutvik-R/Compress_decompress](https://github.com/Rutvik-R/Compress_decompress)
