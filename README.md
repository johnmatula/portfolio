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
