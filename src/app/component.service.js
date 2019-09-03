export class ComponentService {
  constructor() {
    this.button = document.getElementById("generateBtn");
    this.textDiv = document.getElementById("generatedText");
  }

  setResult(message) {
    this.textDiv.innerText = message;
  }

  onClick(setMsg) {
    this.button.addEventListener("click", setMsg);
  }
}
