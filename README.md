# Portfolio-Website

My personal portfolio website made using VueJS and Bootstrap.

## Make your own website!

Follow the below mentioned steps to configure the code accordingly!

## Project Setup

After cloning the repository, install all dependencies by running:

```
npm install
```

If you dont have NPM or Node, install them first:
[Install Node and NPM](https://nodejs.org/en/download/package-manager/)

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

Now the default website must be running, to customize it:

#### 1. Update `/src/components/Home.vue`

Edit the text accorind to your preference.

#### 2. Edit `/src/json-data/social.json` and `/src/json-data/projects.json`

Edit these files to add your social media links, and projects. If you want to remove any social media or add any goto `/src/components/AboutMe.vue` and edit accordingly.

#### 3. Add required images and fonts

Add images in `/src/assets` and fonts in `/src/fonts`. Import your font by going to `App.vue` and changing the import statement in `<script></script>`.

For any other problem, feel free to raise an issue or contact me on the given details. Also, if you find any bugs or improvement please create a Pull Request to the `develop` branch.
