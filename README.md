# Premier Building Services — Website Prototype

A static HTML/CSS/JavaScript prototype for Premier Building Services.

## Open it locally

Double-click `index.html` or open it in a browser.

No domain, hosting account, server, or paid software is required to preview the site.

## Edit future partnerships

Open `site-config.js`.

When a partnership/accolade is ready to announce, add it to `featuredPartners`.

Example:

```js
featuredPartners: [
  {
    name: "Hardee's",
    label: "Commercial Service Partner",
    description: "Approved public-facing description of the relationship."
  },
  {
    name: "Carter Bank",
    label: "Commercial Service Partner",
    description: "Approved public-facing description of the relationship."
  }
]
```

Do not publicly announce a contract or partnership until the business is ready to do so.

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files in this folder.
3. In GitHub, open Settings → Pages.
4. Select "Deploy from a branch."
5. Select the main branch and `/ (root)`.
6. Save.
7. GitHub will provide a temporary `github.io` address.

## Custom domain later

After the business owns its desired domain, configure the domain's DNS records and add the domain under GitHub Pages settings.

A `CNAME.example` file is included as a reminder. Rename it to `CNAME` and put the chosen domain inside it when the domain is ready.

## Booking form

The booking form is intentionally a prototype. It currently saves the submitted request in the visitor's browser using localStorage; it does not email the business.

Before launch, connect it to a real form/booking provider or a custom backend.

## Future improvements

- Add actual project photographs.
- Add business phone/email/address.
- Add a real booking/form endpoint.
- Add Google Business Profile/map information.
- Add SEO metadata and Open Graph image.
- Add approved Hardee's/Carter Bank partnership information.
- Add testimonials when the business has permission to publish them.
