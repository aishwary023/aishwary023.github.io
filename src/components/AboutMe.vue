<template>
  <div class="container" id="about" height="100vh">
    <span>
      <h3>About Me</h3>
    </span>
    <hr />
    <body>
      <br />
      <br />
      <p style="text-align:center">
        <img
          style="border-radius:50%"
          src="../assets/aishwary.png"
          alt="Aishwary Saxena"
          height="200px"
          width="200px"
        />
      </p>
      <br />
      <br />
      <p align="center" id="readme-md">
        💬 student, self-taught coder
        <br />📙 studies at Indian Institute of Technology, BHU, Varanasi
        <br />🌱 learning Django. REST. TypeScript. VueJS.
        <br />🔭 intrested in web-development, open-source, info-sec, anything tech <br />🖥
        develops webapps. back-end works. <br />🧩 likes painting. cycling.
        dancing. and obviously coding
        <br />
      </p>
      <p>
        <br />
        <br />
      </p>
      <p align="center">
        <a
          class="contact-icon"
          :href="socialLinks.github"
          target="_blank"
          title="GitHub"
        >
          <img height="32" src="../assets/github.svg" />
        </a>
        <a
          class="contact-icon"
          :href="socialLinks.linkedin"
          target="_blank"
          title="LinkedIn"
        >
          <img height="32" src="../assets/linkedin.svg" />
        </a>
        <a
          class="contact-icon"
          :href="socialLinks.mail"
          target="_blank"
          title="Gmail"
        >
          <img height="32" src="../assets/mail.svg" />
        </a>
        <a
          class="contact-icon"
          :href="socialLinks.whatsapp"
          target="_blank"
          title="Whatsapp"
        >
          <img height="32" src="../assets/message.svg" />
        </a>
        <a
          class="contact-icon"
          :href="socialLinks.instagram"
          target="_blank"
          title="Instagram"
        >
          <img height="32" src="../assets/instagram.svg" />
        </a>
      </p>
    </body>
  </div>
</template>

<script>
import json from '../json-data/social.json';
export default {
  data: () => {
    return {
      socialLinks: json
    };
  }
};
</script>

<style>
.contact-icon {
  padding: 0px 8px;
}
#about {
  margin: 50px auto 150px auto;
}
body {
  color: #000000;
}
h3 {
  font-family: 'Audrey-Normal', monospace;
  font-size: 40px !important;
  color: #494949;
  font-weight: 200;
}
#readme-md {
  font-family: 'Futura';

  font-size: 20px;
}
@media (max-width: 768px) {
  #readme-md {
    font-family: 'Futura';

    font-size: 16px;
  }
  h3 {
    font-family: 'Audrey-Normal', monospace;
    font-size: 28px !important;
    color: #494949;
    font-weight: 200;
  }
}
</style>
