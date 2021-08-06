const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greeting = [
  "I am good you little piece of love",
  "Doing goog Brian",
  "leave me alone",
];

const weather = ["The weather is good", "you need a walk"];
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function () {
  console.log("voice is activated, speek to microphone");
};
recognition.onresult = function (e) {
  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;

  content.textContent = transcript;

  readOutLoud(transcript);
};
// add listener to btn
btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = " i don't know what you said";

  if (message.includes("how are you")) {
    const finalText = greeting[Math.floor(Math.random() * greeting.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
