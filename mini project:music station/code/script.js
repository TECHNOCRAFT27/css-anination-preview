// Run code editor preview
document.getElementById('runBtn').addEventListener('click', () => {
  const html = document.getElementById('htmlCode').value;
  const css = `<style>${document.getElementById('cssCode').value}</style>`;
  const iframe = document.getElementById('preview');
  iframe.srcdoc = css + html;
});
