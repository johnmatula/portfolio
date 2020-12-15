# portfolio
John’s personal portfolio, as a simple, no-fuss, static site. Built with Eleventy.

## Project organization
This project separates the model, the view, and view components into separate directories. There is also a supporting directory that contains boilerplate SCSS and static assets that are picked up by Eleventy to serve during development.

```
src
 ├─ content
 ├─ components
 ├─ supporting
 └─ templates
    └─ shell
```

Within `templates` is `shell`, the baseline layout that includes boilerplate HTML, nav, and the blank content area.

## Things I need to clean up
I was excited to get the site up ASAP, so there are some clean-up things left to do:
* Use semantic color variables for Contact pane
* Clean up Photoswipe UI logic
* Add a couple of additional work examples (less involved than the case studies)
