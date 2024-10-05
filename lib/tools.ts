import cssText from "data-text:~style.css"

export function injectTailwindCSS() {
  const style = document.createElement("style")
  style.textContent = cssText
  document.head.appendChild(style)
}

export function removeStyleTags(htmlString) {
  const styleTagRegex = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi;
  return htmlString.replace(styleTagRegex, '');
}

