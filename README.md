<div align="center">

  <!-- Project Logo / Banner -->
  <h1 align="center">🚀 DevStack</h1>

  <p align="center">
    <strong>
An interactive web app to explore, select, and build your custom developer tech stack with real-time UI feedback.
</strong>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/github/stars/your-username/your-repo-name?style=for-the-badge&color=emerald" alt="stars" />
    <img src="https://img.shields.io/github/forks/your-username/your-repo-name?style=for-the-badge&color=emerald" alt="forks" />
    <img src="https://img.shields.io/github/license/your-username/your-repo-name?style=for-the-badge&color=blue" alt="license" />
  </p>

</div>

---

## 📝 About The Project

Dev Stack Builder is a responsive, modern web application designed to help developers seamlessly discover and assemble their ideal software stack. Built with React, Vite, Tailwind CSS, and TypeScript, it allows users to explore various technologies across frontend, backend, database, and tooling categories. With real-time state management and instant toast notifications, users can interactively select, manage, and visualize their stack with an intuitive mobile-friendly interface.

---

## 🛠️ Tech Stack

This project is built using the following modern tools and technologies:

- **Frontend:** React, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **UI & Icons:** Lucide React, React Toastify
- **State & Logic:** React Hooks (useState)

---

## ✨ Key Features

* **⚡ Responsive & Modern UI:** Designed with a mobile-first approach using Tailwind CSS, ensuring a seamless experience across desktop, tablet, and mobile devices.
* **🛠️ Dynamic Stack Selection:** Easily select, track, and manage your preferred tech stack in real time with interactive toggle actions.
* **🔔 Instant Toast Notifications:** Integrated `react-toastify` for real-time visual feedback whenever technologies are added or removed.

---

## 🚀 Questions and Answer about "React"

React Questions and Answers
1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is used in React because it lets us write HTML-like code inside JavaScript. It makes the code more easy to read and helps us create the UI of the website.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only, so the child component cannot directly change them.
State is data that is managed inside a component. State can be changed when something happens, like clicking a button or adding an item.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to store and update data in a React component. When the state changes, React updates the UI.
In this project, I used useState to store things like the stack/items and update them when I add or remove an item.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component. For example, loading data, calling an API, or doing something after the component renders.
I used useEffect to load the JSON data when the component was loaded. It was needed because the data has to be loaded after the component starts, and then the state can be updated with that data.

5. Why does every item in a .map() list need a unique key prop?

Every item in a .map() list needs a unique key so React can identify each item separately. It helps React know which item was changed, added, or removed.
If we don't give a proper key, React can show warnings and it may not update the list properly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something in the UI only when a certain condition is true.
For example, in this project, I used it to show an empty stack message when there is no item in the stack.
{stack.length === 0 && <p>The stack is empty</p>}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from a parent to a child by using props.
For example:
<Child name="John" />
For sending something back from child to parent, the parent can pass a function as a prop. Then the child calls that function when an action happens.
For example:
<Child onAdd={handleAdd} />



