# 🥡 Wok & Wakis – Frontend (Next.js)

This is the frontend of the Wok & Wakis restaurant app, built with **Next.js 14**, **TypeScript**, and **Context API** for state management. The application provides an intuitive food ordering experience with categorized items, dynamic selections, and responsive design.

## 🚀 Features

- 🍔 Food menu with dynamic filtering by categories
- 📦 Cart system using React Context API
- 🧾 Custom UI components (Checkbox, Radio, Select, Modals, etc.)
- 🔄 Global state and API integration with Context API and  custom hooks
- 💬 Toast notifications (Notifier) with Context API to handle the status of the notifier 
- 🎨 Fully responsive UI
- ✅ Unit tests using Jest & React Testing Library

---

## ⚠️ Note
- Since the API uses an **in-memory database**, food items will not persist across sessions or deployments.

- This means food items may **not appear** when you open the app unless data has been added during the current session.

- To populate the food items, visit the **Swagger UI** and send a request to the **Bulk Food Creation** endpoint using either the provided sample data or your own.

🔗 **Swagger Link**: https://wok-and-wakis-apis.vercel.app/api-docs/#/


## 📦 Installation

```bash
git clone https://github.com/hurlaniyhi/wok_and_wakis.git
cd wok-and-wakis-frontend
npm install
```

## 🧪 Run Dev Server

```bash
npm run dev
```


## 🧪 Run Tests

```bash
npm test
```


## 🧰 Project Structure

<pre lang="text"><code> ```text
├── __tests__          # Unit and integration tests
├── assets             # Static assets (images, icons)
├── components         # Reusable UI components
├── hooks              # Custom React hooks
├── lib                # Utility libraries (e.g., API service, constants)
├── pages              # Next.js pages and routes
├── providers          # React context providers
├── styles             # Global and modular SCSS styles
├── types              # TypeScript type definitions
├── utils              # Helper functions
</code></pre>

## 🧑‍💻 Technologies

- Next.js

- React

- TypeScript

- Context API

- Jest

- Testing Library

- Styled Components

- SCSS

- Tailwind

- React Icons


## Design Pattern

Several design patterns was used to keep the code modular, reusable and maintainable. 
The patterns include **Container-presenter pattern (smart dumb)**, **custom hooks**, **state management** etc


## Error Handling

Error was handled through combination of prevention, detection and user friendly response strategies which includes;

- **Preventive coding:** Wrote defensive coding using Proptypes/typescript
- **Error boundaries:** For runtime errors, react-error-boundary was used to catch error and display fallback component
- **API error handling:** API calls are wrapped in try/catch blocks and provide user friendly error message


## ⚙️ Environment Variables

Create a .env.local file with the variable like below:

FOOD_API_BASE_URL=https://your-api-baseurl.com


## 📦 Deployment

The app is deployed on **Vercel**

## ⚠️ App Deployed Url

https://wok-and-wakis.vercel.app/