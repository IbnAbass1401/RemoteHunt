# remoteHunt

A job listings web app for finding and managing remote jobs. Browse listings, read the full details of a job, and add, edit or delete jobs through a form.

## Features

- **Browse jobs:** the home page shows a short list of the latest jobs, and a full Jobs page lists them all
- **Job details:** a single job page with description, salary, location and company info
- **Add a job:** a form that saves a new listing and redirects to the Jobs page
- **Edit a job:** update an existing listing from its page
- **Delete a job:** remove a listing, with a confirmation step
- **Show more / show less:** long job descriptions expand and collapse in the listing card
- **Feedback:** loading spinner while data loads, and success toasts after add, edit and delete
- **Navigation:** shared layout with a navbar that highlights the active page
- **404 page** for unknown routes
- **Responsive** design for phones and desktops

## Tech stack

| Area | Tools |
| --- | --- |
| Frontend | React, Vite, React Router |
| Styling | Tailwind CSS |
| Notifications | React Toastify |
| Backend (mock API) | json-server |

## Concepts practised

- Component structure and reusable components
- `useState` and `useEffect` for state and data fetching
- Nested routes with a shared `MainLayout`, `Outlet` and `NavLink`
- Data loaders in React Router for the single job and edit pages
- CRUD with `fetch` (GET, POST, PUT, DELETE) against a REST API
- Controlled forms
- Pagination with json-server (`_page` and `_per_page`)

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Run locally

```bash
# 1. Clone the repo
git clone https://github.com/IbnAbass1401/remoteHunt.git
cd remoteHunt

# 2. Install dependencies
npm install

# 3. Start the mock API (terminal 1), runs on http://localhost:8000
npm run server

# 4. Start the app (terminal 2), runs on http://localhost:5173
npm run dev
```

If a port is already in use, stop the old process and start again.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run server` | Start json-server on port 8000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/jobs` | All jobs |
| `/jobs/:id` | Job details |
| `/add-job` | Add a job |
| `/edit-job/:id` | Edit a job |
| `*` | 404 |

## Author

**Abass A.**