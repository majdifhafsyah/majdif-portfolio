# Majdi Personal Portfolio

Personal portfolio website for M. Majdi Firman Hafsyah.

## Latest Updates

- Project section is centered when there is only one project.
- Project cards remain horizontally scrollable when more projects are added.
- Certificate section is centered and wraps cleanly.
- Certificates display a maximum of three cards per row on desktop; additional certificates move to the next row.
- Certificate hover effect keeps the selected certificate clear while other certificates become softly blurred.
- Layout remains responsive for desktop, tablet, and smartphone.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Edit Content

Most personal content can be edited in:

```text
data/profile.ts
```

Add more projects in the `projects` array. They will automatically line up side by side and can be scrolled horizontally.

Add more certificates in the `certificates` array. The certificate section will automatically center the cards and wrap after three cards on desktop.
