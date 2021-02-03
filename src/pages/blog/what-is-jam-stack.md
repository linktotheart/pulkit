---
title: 'What is Jam Stack? '
subtitle: 'Rise of the Jamstack. Why choose jamstack? '
date: 2021-02-03T04:50:52.319Z
thumb_image: /images/jdbkabdandlad.png
image: /images/absdiabsdk aksdnoasndasd.jpg
template: post
---
### What is Jamstack?

<!--StartFragment-->

Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity.

<!--EndFragment-->

<!--StartFragment-->

Mathias Biilmann, CEO of Netlify, coined [JAMstack](https://jamstack.org/) and describes it as “a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.” The three elements of JAMstack include –

<!--StartFragment-->

1. **JavaScript**– Entire execution on client-site for dynamic functionality
2. **APIs**– Reusable APIS for backend interaction accessed using HTTPS
3. **Markup**– Templates prebuilt with static site generators at deploy time

<!--EndFragment-->

<!--EndFragment-->

![jamstack](/images/dfsdfsdfsdf.jpg "Jamstack! ")

# Why Jamstack?

<!--StartFragment-->

A Jamstack architecture can bring all sorts of benefits to the sites and to project workflows. Some of the key benefits are:

<!--EndFragment-->

<!--StartFragment-->

## Security

The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack.

![Jam stack faster than traditional methods](/images/netefleifghu.jpg "Images source : Netlify")

Serving pages and assets as pre-generated files allows read-only hosting reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.

<!--EndFragment-->

<!--StartFragment-->

## Scale

Popular architectures deal with heavy traffic loads by adding logic to cache popular views and resources. The Jamstack provides this by default. When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when.

With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and incredible load capacity.

<!--EndFragment-->

<!--StartFragment-->

## Performance

Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build.

With all the pages are already available on  a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.

<!--EndFragment-->

![architecture](/images/architecture.svg "Why choose jamstack?")

## Static sites builders

There are many static site builder tools for every framework possible, and others like Hugo and Jekyll. My go to pick is [GatsbyJS](https://www.gatsbyjs.com) and [NuxtJS](https://nuxtjs.org/).

Also read : [Gatsby vs Nuxt](https://pulkits.netlify.app/blog/gatsbyjs-vs-nuxtjs-which-is-better-what-should-you-choose-for-your-next-project/) 

[](https://pulkits.netlify.app/blog/gatsbyjs-vs-nuxtjs-which-is-better-what-should-you-choose-for-your-next-project/)

# Conclusion

We learned about jamstack, and how jamstack sites are faster and more secure than traditional web building methods which requires additional web servers and databases. In traditional web methods like JAVA Spring or Laravel, database is hit each time a page is refreshed to fetch content. But in jamstack we only hit a database request at the time of build and all pages are generated statically which are faster and more secure, cause there's no database layer connected to the static HTML files, hence no fear of SQL-Injection or such things.
