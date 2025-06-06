const replacements = [
  { pattern: /\bIA\b/gi, replacement: "cocaína" },
  { pattern: /\bAI\b/gi, replacement: "cocaína" },
  { pattern: /inteligencia artificial/gi, replacement: "cocaína" },
  { pattern: /artificial intelligence/gi, replacement: "cocaína" },
];

function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    let text = node.nodeValue;
    replacements.forEach(({ pattern, replacement }) => {
      text = text.replace(pattern, replacement);
    });
    node.nodeValue = text;
  } else {
    node.childNodes.forEach(replaceText);
  }
}

replaceText(document.body);
