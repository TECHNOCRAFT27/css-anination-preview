

# 📘 Project Documentation: CSS Animations – 3 Scenes

---

## 📌 Project Overview

This project demonstrates how to create smooth and visually appealing CSS animations using HTML, CSS, and JavaScript. It includes:

* A horizontally animated box (`Scene 1`)
* A built-in code viewer using **Prism.js**
* A live **code editor + previewer** for interactive learning

It’s designed to be **educational**, **minimal**, and **responsive**, making it perfect for both **learning** and **teaching** CSS animations.

---

## 🧱 Folder Structure

```
📁 css-animations-3-scenes/
├── index.html        → Main HTML page
├── style.css         → Styling and animations
├── script.js         → Live preview logic for code editor
└── README.md         → Project README for GitHub
```

---

## 🔧 Technologies Used

| Technology | Purpose                          |
| ---------- | -------------------------------- |
| HTML5      | Structure of the web page        |
| CSS3       | Animations, layout, design       |
| JavaScript | Code editor live preview         |
| Prism.js   | Syntax highlighting in code view |

---

## ✨ Features

* 🔁 **CSS Keyframe Animation**
  Smooth sliding of elements using `@keyframes` animation.

* 🧠 **Code Viewer**
  Syntax-highlighted examples of HTML and CSS with Prism.js.

* 💻 **Live Code Editor + Preview**
  Users can edit HTML & CSS and instantly see the output.

* 📱 **Responsive Design**
  The layout adapts well to different screen sizes.

---

## 🖼️ Scene 1: Horizontal Slide Animation

**Box moves left to right using `transform: translateX`.**

```css
@keyframes slideX {
  from { transform: translateX(0); }
  to { transform: translateX(600px); }
}
```

* Applied using:
  `.scene_01 .box { animation: slideX 2s infinite alternate; }`

---

## 🧪 Try-It-Yourself Editor

Users can:

* Write or modify HTML & CSS in `<textarea>` fields
* Click **Run**
* See the output live inside an `<iframe>`

**Script logic:**

```js
document.getElementById('runBtn').addEventListener('click', () => {
  const html = document.getElementById('htmlCode').value;
  const css = `<style>${document.getElementById('cssCode').value}</style>`;
  const iframe = document.getElementById('preview');
  iframe.srcdoc = css + html;
});
```

---

## 🧑‍🎓 What You'll Learn

* Basic and intermediate CSS animations (`@keyframes`, `transition`, `transform`)
* How to use Prism.js for syntax highlighting
* How to inject live HTML/CSS into an iframe with JavaScript
* UI layout using Flexbox and gradients

---

## ✅ How to Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/css-animations-3-scenes.git
   cd css-animations-3-scenes
   ```

2. Open `index.html` in any modern browser.

---

## 📝 Future Enhancements

* Add Scene 2 and 3 (vertical and 3D rotation)
* Add dark/light theme toggle
* Support JavaScript in editor
* Save code to local storage

---

## 📜 License

MIT License © \[Your Name]

---


