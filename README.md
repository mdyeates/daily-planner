<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mdyeates/daily-planner">
    <img src="assets/images/readmelogo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Daily Planner</h3>

  <p align="center">
  In this Daily Planner App, you can keep track of important appointments during your 9-5 work day and make every hour count.

<br />
<a href="https://github.com/mdyeates/daily-planner"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://mdyeates.github.io/daily-planner/">View Live Deployment</a>
·
<a href="https://github.com/mdyeates/daily-planner/issues">Report Bug</a>
·
<a href="https://github.com/mdyeates/daily-planner/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
        <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Daily Planner][product-screenshot]](https://mdyeates.github.io/daily-planner/)

User Story:

- AS AN employee with a busy schedule
- I WANT to add important events to a daily planner
- SO THAT I can manage my time effectively

Project Summary:

- The current day and time is displayed at the top of the calendar when a user opens the planner
- Timeblocks are dynamically created for the standard work day, 9am to 5pm
- Each timeblock is colour coded based on past (red), present (blue), and future (green)
- The user can enter an appointment on each timeblock
- When a user clicks the save button, the corresponding appointment is saved to localStorage, a save notification is displayed and an audio sfx is played
- If a page is refreshed, the saved appointment is displayed in the timeblock

During this project I learned how to:

- Use third-party API's such as jQuery and Moment.js to dynamically update a web page
- Implement DOM manipulation strategies using the jQuery library
- Create time-based operations using Moment.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Bootstrap][bootstrap.com]][bootstrap-url]
- [![JQuery][jquery.com]][jquery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

The following animation demonstrates the application functionality:

![Daily Planner](assets/images/usagegif.gif)

The application works on a variety of devices, for example:

<img src="assets/images/mobile.png" width="300">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Michael Yeates - [@mdyeates](https://twitter.com/mdyeates) - michael-yeates@outlook.com

Project Link: [https://github.com/mdyeates/daily-planner](https://github.com/mdyeates/daily-planner)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Flat Icon](https://www.flaticon.com/free-icons/calendar)
- [Save SFX](https://mixkit.co/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/mdyeates/daily-planner.svg?style=for-the-badge
[license-url]: https://github.com/mdyeates/daily-planner/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mdyeates
[product-screenshot]: assets/images/screenshot.png
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
