---
title: 'Gatsbyjs VS Nuxtjs? Which is better static site generator? '
subtitle: What should you choose for your next project?
date: 2021-01-17T04:26:47.477Z
thumb_image: /images/acabsdkasnda.png
image: /images/acabsdkasnda.png
template: post
---
GatsbyJS and Nuxt Js are both Static Site Generators aka SSG's for React and Vue JS respectively. SO if yu're familiar with react Gatsby should be your go to choice for your next project. It gives routing, image optimization, SEO and so much more out of the box. Let's have a deeper look in both

<!--StartFragment-->

> **Note:**This is only a personal experience and points of view might be different for any individual. 

<!--EndFragment-->

## **What is GatsbyJS?**

<!--StartFragment-->

<!--StartFragment-->

[![GatsbyJS](https://res.cloudinary.com/practicaldev/image/fetch/s--dhb9j1jx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/1000/1%2AG9aVAI3aezHLw_JsiCfB1Q.jpeg)](https://res.cloudinary.com/practicaldev/image/fetch/s--dhb9j1jx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/1000/1%2AG9aVAI3aezHLw_JsiCfB1Q.jpeg)

<!--EndFragment-->

Gatsby is a React-based open-source framework for creating websites and apps. It's great whether you're building a portfolio site or blog, or a high-traffic e-commerce store or company homepage.

<!--EndFragment-->

<!--StartFragment-->

## What are GatsbyJS's pros?

GatsbyJS is a collection of pros actually and I love it. Here I will explain some that are outstanding in my opinion:

* Using React as the main library for rendering the pages. Which will cause blazing fast pages in my opinion.
* Using GraphQL for data API and other stuff which is gonna make your experience much more cool.
* Being able to deploy the production mode in almost every environment since it is only in HTML, CSS and JavaScript and nothing more.
* Good code splitting and fast load time.
* Almost perfect CMS integration for WordPress and other famous CMS's.

<!--EndFragment-->

<!--StartFragment-->

## Nuxt.js

Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, webpack and Babel.js for building server-side rendered and/or static web applications using Vue.\

<!--StartFragment-->

[![Nuxt.js](https://res.cloudinary.com/practicaldev/image/fetch/s--IMZ72WkS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/3004/1%2AdKYx6tc_nT6hELIz9_pExg.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--IMZ72WkS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/3004/1%2AdKYx6tc_nT6hELIz9_pExg.png)

<!--EndFragment-->

<!--EndFragment-->

<!--StartFragment-->

## What are Nuxt.js pros?

As GatsbyJS, Nuxt.js is nothing less and maybe more in my opinion, and these are the things I love about Nuxt.js:

* Since it is built on top of Vue.js it provides a single file component for each page and a more clean way of creating pages than React's way.
* Pretty fast hot reload.
* Clean build output.
* Can be both static and served with Nuxt.js itself as a server.
* Provides Webpack Bundle Analyzer by default.

<!--EndFragment-->

## Comparison in Nuxt and Gatsby

I wanted to keep this article short so lets just wrap it.

<!--StartFragment-->

[![React vs Vue.js](https://res.cloudinary.com/practicaldev/image/fetch/s--Qc7zF7nG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://d33wubrfki0l68.cloudfront.net/df1f679c0e6d6f425aedc81f20cf2bea826aaa35/7c780/assets/images/benchmark.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--Qc7zF7nG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://d33wubrfki0l68.cloudfront.net/df1f679c0e6d6f425aedc81f20cf2bea826aaa35/7c780/assets/images/benchmark.png)

*Image from https://naturaily.com/blog/react-vue-similarities-and-differences*

<!--EndFragment-->

Conditional rendering using if statement in Nuxt.js thanks to Vue.

```html
<template>
    <div>
        <span v-if="true">This is it!</span>
        <span v-else>Something is wrong!</span>
    </div>
</template>
```

I noticed the same thing in Gatsby using Reactjs will be something like this

```javascript
import React from "react";

class Index extends React.Component {
    render() {
        let mySpan;
        if(true) {
            mySpan = <span>This is it</span>
        } else {
            mySpan = <span>Something is wrong</span>
        }
        return (
            <div>
                {mySpan}
            </div>
        );
    }
}
```

<!--EndFragment-->

> Nuxt the masterrace!!! for newbies!!! 

**Conclusion:** For me both frameworks are well done with many features and plugins. If you want you can prototype and build a site with gatsby in just hours or minutes even! (starter-theme). If you want to start from scratch and source data, gatsby provide a ton of plugins with which you can source data almost from anywhere (json, sql, database, or even wordpress). Both frameworks supports headless CMS Integration. Nuxt might be lightweight and simple due to it's easy and simple rather than complex file structure.
