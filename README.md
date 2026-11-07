# Dynamic Color Clock

A dynamic, web-based digital clock built with React, Vite, and npm. The application displays the current date and time in a human-readable format, updating continuously every second. It utilizes `date-fns` for localized data formatting and features an optimized CSS layout that includes responsive styling and a custom color palette.

## Prerequisites

Before running this project locally, ensure you have the following installed on your machine:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (comes bundled with Node.js)

## Getting Started

Follow these steps to set up and run the application locally on your machine.

### 1. Extract or Navigate to the Project Root
Open your terminal application and change directories into the folder where your React application files are stored:
```bash
cd path/to/your/project-folder
```

### 2. Install Dependencies
Install all the required project dependencies listed in the `package.json` file, including `react`, `vite`, and `date-fns`:
```bash
npm install
```

### 3. Run the Local Development Server
Start the Vite development engine locally by executing the run script:
```bash
npm run dev
```

### 4. View the App in Your Browser
Once the server starts running, it will output a local network address in your terminal panel. Open your browser and navigate to:
```text
http://localhost:5173
```

---

## Production Build & Deployment

To compile the application into lightweight, optimized static assets (plain HTML, CSS, and minified JS) ready for hosting or deployment:

```bash
# Build the production files
npm run build

# Preview the locally built production files
npm run preview
```

The resulting optimized distribution bundle will be generated inside the local `/dist` directory.