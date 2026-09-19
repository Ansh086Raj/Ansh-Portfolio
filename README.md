# Ansh Raj — Portfolio Website

A simple, dark-themed personal portfolio site built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## 📁 Structure

```
ansh-portfolio/
├── index.html      # All page content (About, Skills, Projects, Contact)
├── style.css        # All styling
├── script.js         # Mobile nav, scroll highlighting, contact form
├── assets/
│   └── profile.jpg   # <- add your photo here (see below)
└── README.md
```

## 🖼️ Add your photo

Put your photo in the `assets` folder and name it exactly `profile.jpg`
(or edit the `src` in `index.html` under the About section if you use
a different name/format).

## ▶️ Run locally in VS Code

1. Open the `ansh-portfolio` folder in VS Code.
2. Install the **Live Server** extension (Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.

   Or, without any extension, just double-click `index.html` to open it
   directly in your browser.

## ⬆️ Push to GitHub

```bash
cd ansh-portfolio
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 🌐 Host for free with GitHub Pages

1. Push the code to GitHub (steps above).
2. Go to your repo → **Settings** → **Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
4. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

## ✉️ Making the contact form actually send emails

Right now the form only simulates sending (no backend). To make it real,
pick one:

- **Formspree** (easiest): create a free form at formspree.io, then set
  the form's `action` attribute to your Formspree endpoint and remove the
  `preventDefault()` logic in `script.js`.
- **EmailJS**: send emails straight from JavaScript using their SDK.
- **Your own backend**: replace the `setTimeout` block in `script.js`
  with a `fetch()` call to your API.

## ✏️ Editing content

All text (name, projects, skills, contact info) lives directly in
`index.html` — just search for the text you want to change and edit it.
Colors and fonts are controlled by CSS variables at the top of `style.css`
under `:root`.
