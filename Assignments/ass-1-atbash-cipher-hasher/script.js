const atbashCipher = (text) => {
  let result = '';

  for (i = 0; i < text.length; i++) {
    const char = text[i];

    if (char >= 'A' && char <= 'Z') {
      const code = 'Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0));
      result += String.fromCharCode(code);
    } else if (char >= 'a' && char <= 'z') {
      const code = 'z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0));
      result += String.fromCharCode(code);
    } else {
      result += char;
    }
  }

  return result;
}

const encrypt = () => {
  const input = document.getElementById('inputText').value;
  const output = atbashCipher(input);
  document.getElementById('outputText').innerText = `🔁 Encrypted Output:\n${output}`;
}
