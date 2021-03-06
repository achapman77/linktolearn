## Summary
Link to Learn Website  

## [Live Demo](https://gatsby-netlify-cms-starter-template-plus.netlify.app/)

## Tech Stack 
  * React
  * Gatsby
  * GraphQL
  * Netlify CMS
  * Netlify Hosted


## Feature Overview:

  * Dynamic Site Content via Netlify CMS
  * Dynamic/Searchable blogs
  * Interactive FAQ
  * Contact Form: Floating Labels, Auto Phone Number Formating, Formik Validation 
  * Styled-Component Site Theming: color pallette, mixins, media queries 
  * Navigation: Sticky Header w/ Color Change on scroll, Active Nav Btns on Scroll/New Page
  * SEO/Social Share Enhancement
  * [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel) - for Image & Video Galleries
  * [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee) - for Testimonials, Partner Logos


## Initial Setup
  [https://deanmalone.net/post/how-to-fork-your-own-repo-on-github/] Create New Repo w/ Upstream remote as https://github.com/achapman77/gatsby-starter-template-plus.git
  git remote -v to check remotes (origin=new repo & upstream=https://github.com/achapman77/gatsby-starter-template-plus.git)
  npm install
  [Content Admin](http://localhost:8000/admin/)
> [GraphQL Data](http://localhost:8000/___graphql)

> ### Netlify CMS Setup
>  * Create new git repo
>  * Rename repo, site, logo in static->admin->config.yml
>  * Follow steps 3+ here: https://www.gatsbyjs.com/tutorial/blog-netlify-cms-tutorial/
>  * Follow [Gatsby With NetlifyCMS Tutorial](https://www.youtube.com/watch?v=IWmVSm2KevY)
>  


> ### Application Customization
>  * Create array of [Maskable Icons](https://maskable.app/editor)
>  * Edit gatsby-config.js
>      * --> siteMetadata
>      * --> gatsby-plugin-manifest
>      * --> gatsby-plugin-google-analytics
>  * Remove all .md/.mdx files from content folder
>  * Replace logo_main.png / logo_alternative.png with optimized logos
>  * Remove images from /assets & /content/uploads
  


## Useful Resources:

### Netlify CMS Useful Resources
  * [Netlify CMS Demo](https://cms-demo.netlify.com/#/collections/settings/entries/authors)
  * [Netlify CMS Demo Config.yml](https://github.com/netlify/netlify-cms/blob/master/dev-test/config.yml)
  * [Netlify CMS Widgets](]https://www.netlifycms.org/docs/widgets/)
  * [Modular Content Widgets](https://www.youtube.com/watch?v=R4rLx6wTqMw)
  * [Using Gatsby Image with Netlify CMS](https://www.frontendstumbles.com/using-gatsby-image-with-netlify-cms/)

Getting Started --> 
[TUTORIAL: Build a Responsive Website using React, Gatsby, and GraphQL](https://www.youtube.com/watch?v=smHhNzM5Uo4&t=270s)
by Brian Design

SEO & Meta Images from blogs  
https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/


SEO & Meta Image for site wide  
https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet


Sticky Navbar w/ Color Change on Scroll  
https://www.youtube.com/watch?v=JMsNslI8KoY&t=166s

Page Scroll and Page Navigation Combined in Nav Menu
https://chaseohlson.com/gatsby-link-anchor-navigation


Styled-Components Theming &  Media Queries  
https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h


Styled-Components ThemeProvider Custom Mixins  
https://stackoverflow.com/questions/50229154/reuse-a-mixin-with-styled-components-across-different-files


Styled-Components ThemeProvider Custom Media Query Function  
https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053  
https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/


CSS Clamp for Responsive Design  
https://blog.bitsrc.io/css-clamp-the-responsive-combination-weve-all-been-waiting-for-f1ce1981ea6e


Clamp Calculator  
https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case


Gatsby/Formik/Netlify Forms
[Formik Contact Form + Netlify](https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/)
[Complete Guide to Netlify Forms](https://www.stackbit.com/blog/complete-guide-netlify-forms/)



