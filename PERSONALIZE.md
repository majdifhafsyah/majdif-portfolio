# Personalization Guide

## 1. Add new project

Open `data/profile.ts`, then add a new object inside `projects`:

```ts
{
  title: "Project Name",
  subtitle: "Short project type",
  description: "Explain what the project does.",
  tags: ["Laravel", "MySQL", "REST API"],
  link: "https://github.com/your-username/project-repo"
}
```

## 2. Add new skill

Add a new text item inside `skills`:

```ts
"PHP",
"MySQL",
"JavaScript"
```

## 3. Add new certificate

Add a new object inside `certificates`:

```ts
{
  title: "Certificate Name",
  issuer: "Issuer Name",
  date: "Month Year",
  description: "Short explanation of what you learned.",
  credentialUrl: "https://credential-link.com",
  credentialId: "Credential ID",
  image: "/images/certificate-file.png"
}
```

Then put the certificate image in `public/images/`.
