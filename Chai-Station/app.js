// Tab Switching Logic
const navLinks = document.querySelectorAll('.nav-links li');
const tabContents = document.querySelectorAll('.tab-content');
const tabTitle = document.getElementById('tab-title');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const tab = link.getAttribute('data-tab');
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Update active content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
        
        // Update header
        tabTitle.textContent = link.querySelector('.text').textContent;
    });
});

// --- Vault & Persistence Logic ---
const snippetList = document.getElementById('snippet-list');
const saveBtn = document.getElementById('save-btn');

let snippets = JSON.parse(localStorage.getItem('chai-snippets') || '[]');

function saveSnippets() {
    localStorage.setItem('chai-snippets', JSON.stringify(snippets));
    renderSnippets();
}

function renderSnippets() {
    snippetList.innerHTML = snippets.map((s, i) => `
        <div class="snippet-card glass">
            <h3>${s.title}</h3>
            <p>${s.code.substring(0, 50)}...</p>
            <div class="card-actions">
                <button onclick="loadSnippet(${i})" class="btn primary small">Load</button>
                <button onclick="deleteSnippet(${i})" class="btn secondary small">×</button>
            </div>
        </div>
    `).join('');
}

window.loadSnippet = (index) => {
    editor.value = snippets[index].code;
    updatePreview();
    document.querySelector('[data-tab="sandbox"]').click();
};

window.deleteSnippet = (index) => {
    if (confirm("Delete this snippet?")) {
        snippets.splice(index, 1);
        saveSnippets();
    }
};

saveBtn.addEventListener('click', () => {
    const title = prompt("Enter snippet title:", "New Snippet");
    if (title) {
        snippets.push({ title, code: editor.value });
        saveSnippets();
    }
});

renderSnippets();

// Updated Live Preview Logic
const editor = document.getElementById('code-editor');
const preview = document.getElementById('live-preview');
const runBtn = document.getElementById('run-btn');

function updatePreview() {
    const code = editor.value;
    const documentContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; transition: all 0.3s ease; }
                    * { box-sizing: border-box; }
                </style>
            </head>
            <body>
                ${code}
            </body>
        </html>
    `;
    
    // Using blob to avoid sandbox issues with large strings
    const blob = new Blob([documentContent], { type: 'text/html' });
    if (preview.src) URL.revokeObjectURL(preview.src);
    preview.src = URL.createObjectURL(blob);
}

runBtn.addEventListener('click', updatePreview);

// Default Sandbox Code
editor.value = `<h2>Hello World</h2>
<p>Start coding in your unique workspace!</p>
<button onclick="alert('Ready to build?')">Click Me</button>

<style>
  body { background: #f0f4f8; padding: 20px; color: #334155; }
  h2 { color: #6366f1; }
  button { padding: 10px 20px; border: none; border-radius: 8px; background: #6366f1; color: white; cursor: pointer; }
</style>`;
updatePreview();

// Focus Timer Logic
let timerSeconds = 25 * 60;
let timerId = null;
const timerDisplay = document.querySelector('.timer-display');
const startBtn = document.getElementById('start-timer');

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateTimer() {
    if (timerSeconds > 0) {
        timerSeconds--;
        timerDisplay.textContent = formatTime(timerSeconds);
    } else {
        clearInterval(timerId);
        startBtn.textContent = 'Start Focus';
        alert("Focus session complete! Time for tea ☕");
    }
}

startBtn.addEventListener('click', () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = 'Start Focus';
    } else {
        timerId = setInterval(updateTimer, 1000);
        startBtn.textContent = 'Pause Focus';
    }
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    timerSeconds = 25 * 60;
    timerDisplay.textContent = formatTime(timerSeconds);
    startBtn.textContent = 'Start Focus';
});
