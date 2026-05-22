window.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= 'a' && key <= 'z') {
        speak(key);
    }
});

function speak(text) {
    window.speechSynthesis.cancel(); // 連続入力対策
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1; // 少し早めにすると軽快です
    window.speechSynthesis.speak(utterance);
}
