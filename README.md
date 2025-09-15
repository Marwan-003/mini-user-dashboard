# mini-user-dashboard

# 📋 User Management App

A small React + TypeScript application built with Vite, Redux Toolkit, Material UI, Bootstrap, Tailwind CSS, and SCSS.  
This app demonstrates how to fetch users from an API, add new users via a form, and remove users with confirmation.

## 🚀 Installation & Setup

1. Clone the repository:
  ```bash
  git clone https://github.com/Marwan-003/mini-user-dashboard.git
  cd mini-user-dashboard
  ```

3. Install dependencies:
  ```bash
  npm install
  ```
   
  
5. Run the development server:
  ```bash
  npm run dev
  ```
7. Build for production:
  ```bash
   npm run build
  ```

## 📌 Usage

👥 Users
- Users are fetched from JSONPlaceholder API.
- If no users are available, a message will be displayed in the table.

➕ Add User
- Click the "Add User" button.
- A dialog will open asking for:
  - Name
  - Email
  - City
  - Phone
- Press Submit → User will be added to the store and shown in the table.
- Press Cancel → Dialog closes without saving.

❌ Remove User
- Each user row has a Delete button.

## 📂 Project Structure

```plaintext
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
├── store.ts                # Redux store configuration
├── components/             # Reusable UI components
│   ├── AddUserBtn.tsx      # Add user button + dialog
│   └── UserTable.tsx       # Table displaying users
├── features/               # Redux slices & hooks
│   ├── hooks.ts            # useAppDispatch & useAppSelector
│   └── users/
│       └── userSlice.ts    # User slice (fetch/add/remove users)
├── layout/                 # Page layout components
│   ├── Home.tsx            # Home layout
│   └── Home.module.scss    # Home styles
├── pages/                  # Page routes
│   ├── About.tsx           # About page
│   └── Users.tsx           # Users management page
├── style/                  # Global styling
│   ├── main.scss           # Global SCSS
│   ├── tailwind.css        # Tailwind entry
│   └── utilities/
│       └── _variables.scss # SCSS variables
```


## 🛠️ Tech Stack

- React + TypeScript
- Vite (build tool)
- Redux Toolkit (state management)
- Material UI (UI components)
- Tailwind CSS (utility-first CSS)
- SCSS (modular styling)
- Bootstrap (Styles)

## ✅ Features

- Fetch users from API
- Add new users via form dialog
- Responsive design using MUI + Tailwind
- Clean project structure with Redux Toolkit
