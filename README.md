# Expo-Website

Expo Arredo Website. Front-end with a lightweight backend to add information dynamically to the webside through an admin dashboard.

Technologies used: Sveltekit Tailwind Pocketbase Vite.

[Vite](https://vitejs.dev/)
[Sveltekit](https://kit.svelte.dev/)
[Gsap](https://www.npmjs.com/package/gsap)
[CapRover](https://caprover.com/)


## Description

This is the draft branch

The admin section, both API and FrontEnd pages, was thought to be used as a mean to change and update the website's content. For the moment it is depriciated but not removed, since there might be necessary usage in the future.

The website uses italian a default language, but offers multiple laguages, each laguage has its definitions into: `lang.ts`


## Usage

Clone the repo
```sh
git clone https://github.com/Puddi1/Expo-Website.git -b draft 
```
Add environment variables for the SMTP server you wish to use as seen in `.env.example`

Run locally:
```sh
npm run dev
```

Build:
```sh
git run build
```