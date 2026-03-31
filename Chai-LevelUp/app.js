// --- Skill Tree Data ---
const skillNodes = [
    { id: 'start', label: 'ROOT', x: 400, y: 50, xp: 0, unlocked: true, type: 'core' },
    // HTML Branch
    { id: 'html1', label: 'HTML BASICS', x: 250, y: 150, xp: 50, parent: 'start', type: 'html' },
    { id: 'html2', label: 'SEMANTIC WEB', x: 150, y: 250, xp: 100, parent: 'html1', type: 'html' },
    { id: 'html3', label: 'FORMS & TABLES', x: 200, y: 350, xp: 150, parent: 'html2', type: 'html' },
    // CSS Branch
    { id: 'css1', label: 'CSS FOUNDATION', x: 550, y: 150, xp: 50, parent: 'start', type: 'css' },
    { id: 'css2', label: 'FLEXBOX & GRID', x: 650, y: 250, xp: 100, parent: 'css1', type: 'css' },
    { id: 'css3', label: 'ANIMATIONS', x: 600, y: 350, xp: 150, parent: 'css2', type: 'css' },
    // JS Branch
    { id: 'js1', label: 'JS BASICS', x: 400, y: 200, xp: 100, parent: 'start', type: 'js' },
    { id: 'js2', label: 'FUNCTIONS', x: 400, y: 320, xp: 150, parent: 'js1', type: 'js' },
    { id: 'js3', label: 'CLOSURES', x: 400, y: 440, xp: 200, parent: 'js2', type: 'js' },
];

// --- State Management ---
let state = JSON.parse(localStorage.getItem('levelup-state')) || {
    unlockedNodes: ['start'],
    xp: 0,
    level: 1,
    streak: 0,
    habits: { code: false, read: false, review: false }
};

let selectedNode = null;

// --- DOM References ---
const nodesGroup = document.getElementById('nodes-group');
const linesGroup = document.getElementById('connections-group');
const xpFill = document.getElementById('xp-fill');
const xpText = document.getElementById('xp-text');
const levelText = document.getElementById('current-level');
const unlockBtn = document.getElementById('unlock-btn');
const nodeCard = document.getElementById('node-details');

// --- Initialization ---
function init() {
    renderTree();
    updatePanel();
    updateXPBar();
    loadHabits();
}

function renderTree() {
    nodesGroup.innerHTML = '';
    linesGroup.innerHTML = '';

    skillNodes.forEach(node => {
        // Draw connection to parent
        if (node.parent) {
            const parent = skillNodes.find(n => n.id === node.parent);
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", parent.x);
            line.setAttribute("y1", parent.y);
            line.setAttribute("x2", node.x);
            line.setAttribute("y2", node.y);
            line.setAttribute("stroke", state.unlockedNodes.includes(node.id) ? "#00e5ff" : "#151530");
            line.setAttribute("stroke-width", "3");
            line.setAttribute("class", "connector");
            linesGroup.appendChild(line);
        }

        // Draw node
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("class", `node ${state.unlockedNodes.includes(node.id) ? 'unlocked' : 'locked'} ${selectedNode?.id === node.id ? 'selected' : ''}`);
        g.onclick = () => selectNode(node);

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", 25);
        circle.setAttribute("fill", state.unlockedNodes.includes(node.id) ? "#00e5ff" : "#121225");
        circle.setAttribute("stroke", state.unlockedNodes.includes(node.id) ? "#00e5ff" : "#303050");
        circle.setAttribute("stroke-width", "2");

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y + 45); // Below circle
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#90a0d0");
        text.setAttribute("font-size", "10");
        text.setAttribute("font-family", "JetBrains Mono");
        text.textContent = node.label;

        g.appendChild(circle);
        g.appendChild(text);
        nodesGroup.appendChild(g);
    });
}

function selectNode(node) {
    selectedNode = node;
    renderTree();
    updatePanel();
}

function updatePanel() {
    if (!selectedNode) return;

    const isUnlocked = state.unlockedNodes.includes(selectedNode.id);
    const parentUnlocked = !selectedNode.parent || state.unlockedNodes.includes(selectedNode.parent);

    nodeCard.querySelector('h3').textContent = selectedNode.label;
    nodeCard.querySelector('p').textContent = isUnlocked 
        ? "Requirement met. Milestone achieved!" 
        : `Path: ${selectedNode.parent || 'ROOT'}. Unlock this milestone to advance.`;
    
    nodeCard.querySelector('.xp-reward').textContent = `+${selectedNode.xp} XP`;
    
    unlockBtn.disabled = isUnlocked || !parentUnlocked;
    unlockBtn.textContent = isUnlocked ? "Unlocked" : (parentUnlocked ? "Unlock Now" : "Path Locked");
}

unlockBtn.onclick = () => {
    if (selectedNode && !state.unlockedNodes.includes(selectedNode.id)) {
        state.unlockedNodes.push(selectedNode.id);
        state.xp += selectedNode.xp;
        
        // Level up logic
        while (state.xp >= state.level * 100) {
            state.xp -= (state.level * 100);
            state.level++;
            alert(`🎉 LEVEL UP! You are now Level ${state.level}!`);
        }

        saveState();
        init();
    }
};

function updateXPBar() {
    const nextLevelXP = state.level * 100;
    const percent = (state.xp / nextLevelXP) * 100;
    xpFill.style.width = `${percent}%`;
    xpText.textContent = `${state.xp} / ${nextLevelXP} XP`;
    levelText.textContent = state.level;
}

// --- Habit Logic ---
function loadHabits() {
    Object.keys(state.habits).forEach(habit => {
        const cb = document.querySelector(`[data-habit="${habit}"]`);
        if (cb) cb.checked = state.habits[habit];
    });
}

document.querySelectorAll('[data-habit]').forEach(cb => {
    cb.onchange = (e) => {
        state.habits[e.target.dataset.habit] = e.target.checked;
        if (e.target.checked) {
            state.xp += 10;
            saveState();
            updateXPBar();
        }
    };
});

function saveState() {
    localStorage.setItem('levelup-state', JSON.stringify(state));
}

// --- Background stars ---
function createStars() {
    const stars = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '1px';
        star.style.height = '1px';
        star.style.background = '#fff';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        stars.appendChild(star);
    }
}

createStars();
init();
