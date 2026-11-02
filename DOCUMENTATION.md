

# Personal CV & Portfolio — Technical Documentation

## 1. Project Overview

This repository contains a bilingual personal CV and portfolio website.

The website presents professional information, technical skills, education, work experience, and selected software projects through a responsive interactive interface.

It is built with standard HTML, CSS, and JavaScript, without requiring a frontend framework or build system.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Layout, styling, themes, and responsive design |
| JavaScript | Dynamic content and user interactions |
| Local Storage | Persistent language and theme preferences |
| Canvas API | Animated background visualization |
| Intersection Observer | Scroll-triggered reveal animations |
| Vercel | Website deployment |

## 3. Project Structure

```text
new_cv/
├── assets/
│   ├── footyiq.png
│   ├── vericlean.png
│   ├── shards.png
│   ├── sentient.png
│   └── ...
├── index.html
├── style.css
├── script.js
├── Bátai László CV.pdf
└── ...
```

The repository also contains backup or previous project files.

### `index.html`

Defines the website's structure, including:

- Navigation.
- Hero section.
- Project portfolio.
- Technical skills.
- Education and work timeline.
- Contact section.
- Footer.

### `style.css`

Controls the visual presentation:

- Responsive layout.
- Typography.
- Color themes.
- Project cards.
- Navigation and buttons.
- Animations and transitions.
- Print styling.

### `script.js`

Contains the website's interactive functionality and dynamic content.

### `assets/`

Stores project screenshots and other visual resources.

### PDF CV

The PDF document is available directly through the website's download and open actions.

## 4. Main Features

### Bilingual Interface

The website supports English and Hungarian.

Language switching updates the interface text dynamically using the translation dictionaries defined in `script.js`.

The selected language is stored in browser local storage.

### Theme Switching

The website supports dark and light themes.

The selected theme is applied through the `data-theme` attribute on the root HTML element and persisted using local storage.

### Dynamic Project Portfolio

Project cards are generated from a JavaScript data structure.

Each project contains:

- Project title.
- Screenshot.
- Categories.
- Technology tags.
- Short description.
- Selected implementation details.

The current portfolio data includes projects such as:

- FootyAI.
- VeriClean.
- Shards.
- Sentient Design Studio.

### Project Filtering

Visitors can filter projects by category:

- All.
- AI and data.
- UI.
- Systems.

The project grid updates dynamically without reloading the page.

### Skills Section

Technical skills are grouped into categories:

- Application logic.
- Interfaces.
- Data and automation.
- Developer workflow.

### Education and Work Timeline

The timeline displays education and professional experience in separate groups.

### Interactive Elements

Additional interactions include:

- Scroll progress indicator.
- Active navigation highlighting.
- Reveal animations.
- Project card tilt effects.
- Animated background particle field.
- Copy email interaction.
- Toast notifications.
- Print functionality.

### PDF Access

Visitors can download or open the PDF CV directly from the website.

## 5. JavaScript Architecture

The JavaScript implementation is organized around several data structures and functions.

### Data Structures

- `cvData` — contains English and Hungarian interface translations.
- `projects` — contains portfolio project information.
- `skills` — contains grouped technical skills.
- `educationTimeline` — contains education history.
- `workTimeline` — contains work experience.
- `state` — stores the currently selected language, theme, and project filter.

### Main Functions

| Function | Responsibility |
|---|---|
| `applyLanguage()` | Updates translated interface content. |
| `applyTheme()` | Applies and saves the selected theme. |
| `renderProjects()` | Generates project cards. |
| `renderSkills()` | Generates skill groups. |
| `renderTimeline()` | Generates education and work timelines. |
| `bindControls()` | Registers interface event handlers. |
| `bindScrollFeedback()` | Updates scroll progress and active navigation. |
| `observeReveals()` | Controls reveal animations. |
| `initSignalField()` | Initializes the animated canvas background. |
| `init()` | Initializes the website. |

## 6. Running Locally

### Requirements

- A modern web browser.
- Python or another local HTTP server (optional).

Clone the repository:

```bash
git clone https://github.com/Laca1234/new_cv.git
cd new_cv
```

The website can be opened directly by launching `index.html`.

Alternatively, start a local server:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## 7. Customization

The website can be updated without a build process.

| What to change | File |
|---|---|
| Main page structure | `index.html` |
| Visual appearance | `style.css` |
| Translations | `script.js` |
| Portfolio projects | `script.js` |
| Skills and timeline data | `script.js` |
| Images and screenshots | `assets/` |
| CV document | `Bátai László CV.pdf` |

## 8. Deployment

The website is deployed through Vercel.

The repository can be connected to a Vercel project for deployment. Since the application uses static HTML, CSS, and JavaScript, no framework-specific build command is required.

## 9. Project Scope

The project serves as a personal professional presentation website, combining a traditional CV with a dynamic portfolio of software development projects.

