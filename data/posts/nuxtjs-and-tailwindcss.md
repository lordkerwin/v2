---
title: 'Nuxt.js + Tailwind 2.0'
publishedAt: 'December 19, 2020'
summary: 'Add Tailwind to your Nuxt.js project'
image: '/static/articles/nuxtjs-and-tailwind/hero.webp'
---

In the post, i'm going to explain how to use the new Tailwind 2.0 with Nuxt.js.

By default, when you create a new Nuxt project, it comes with tailwind 1.X. To utilize the new Tailwind 2.0 and it's new classes you'll need to make some changes.

As of writing this post. There is a PR out for Nuxt and Tailwind 2.0, there's currently an issue because Nuxt 2.14 still uses PostCSS 7. Tailwind 2.0 requires PostCSS 8. You can checkout the PR [here](https://github.com/nuxt-community/tailwindcss-module/pull/203).

The good people over at Tailwind have made a compatibility build, allowing us to use PostCSS 7 with Tailwind 2. Nuxt 2.15 should be using PostCSS 8 but again, as of writing this, Nuxt 2.14 is using PostCSS 7.

What I did to get Tailwind 2.0 working on a fresh project is the following:

Run `create-nuxt-app tailwind-v2` to create a project.

I answered the following:

```bash
> Project name: tailwind-v2
> Programming language: JavaScript
> Package manager: Yarn
> UI framework: Tailwind CSS
> Testing framework: None
> Rendering mode: Universal (SSR / SSG)
> Deployment target: Server (Node.js hosting)
```

This will create a new project, but using Tailwind 1.X, I then went on to do the following:

```bash
yarn add --dev tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

This will add the compatibility build to your project.

I then ran `npx tailwind init` to generate a tailwind.config.js and added the new `tailwind/forms` package required in tailwind 2.0 for the form styling to test it out.

My `tailwind.config.js` just looks like this for the demo project.

```js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
```

And that's basically it.

Run `yarn dev` in your terminal and then head-over to [https://tailwindui.com](https://tailwindui.com) to test out the new pre-built Tailwind 2.0 components.
