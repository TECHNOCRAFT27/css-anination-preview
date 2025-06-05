
## 🎨 CSS Animations - 3 Scenes

This is a beginner-friendly web project that showcases animated scenes using **HTML + CSS**. The animations demonstrate:

* 📦 Horizontal sliding animation of a box
* 🌈 Code syntax highlighting via Prism.js
* 🧪 Live HTML/CSS editor with real-time preview

---

### 🖥️ Live Preview

> 🔗 [Click here to view hosted site](https://technocraft27.github.io/css-anination-preview/)
> *(Replace this link with your actual GitHub Pages URL if different)*

---

### 📁 Project Structure

```
css-anination-preview/
│
├── index.html          # Main HTML page
├── style.css           # All CSS styles & animations
├── script.js           # Script for code editor preview
└── README.md           # Project documentation (this file)
```

---

### 🚀 Features

* ✅ Responsive design with CSS Flexbox
* 🎞️ Smooth horizontal animation using `@keyframes`
* 💡 Code syntax highlighting with Prism.js
* ✍️ Built-in code editor with preview output (like CodePen)


### 🛠️ How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/TECHNOCRAFT27/css-anination-preview.git
   cd css-anination-preview
   ```

2. **Open in browser**

   * Just open `index.html` in any browser like Chrome, Firefox, etc.

---

### 📦 Libraries Used

* [Prism.js](https://prismjs.com/) – For syntax highlighting
* [Google Fonts](https://fonts.google.com/) *(optional)*
* Vanilla HTML, CSS, and JavaScript

---

### 🧠 How It Works

#### ➤ Animation Example:

```css
@keyframes slideX {
  from { transform: translateX(0); }
  to { transform: translateX(600px); }
}
```

#### ➤ JavaScript Live Editor:

```javascript
document.getElementById('runBtn').addEventListener('click', () => {
  const html = document.getElementById('htmlCode').value;
  const css = `<style>${document.getElementById('cssCode').value}</style>`;
  document.getElementById('preview').srcdoc = css + html;
});
```

---

### ✍️ Author

Made with ❤️ by [Technocraft27](https://github.com/TECHNOCRAFT27)

---

### 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

