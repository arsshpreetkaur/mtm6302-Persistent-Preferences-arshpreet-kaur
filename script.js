// Selecionando elementos do DOM
const themeSelect = document.getElementById('themeSelect');
const colorSelect = document.getElementById('colorSelect');
const fontSelect = document.getElementById('fontSelect');
const colorDisplay = document.getElementById('colorDisplay');
const colorName = document.getElementById('colorName');

// Event listener para mudança de cor selecionada
colorSelect.addEventListener('change', () => {
    const selectedColor = colorSelect.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.style.width = '100px';
    colorDisplay.style.height = '100px';
    colorDisplay.style.borderRadius = '50%';
    colorName.textContent = `${colorSelect.options[colorSelect.selectedIndex].text}`;
    colorName.style.fontFamily = fontSelect.value;
    savePreferences();
});

// Event listener para mudança de estilo de fonte selecionado
fontSelect.addEventListener('change', () => {
    colorName.style.fontFamily = fontSelect.value;
    savePreferences();
});

// Event listener para mudança de tema selecionado
themeSelect.addEventListener('change', () => {
    applyTheme();
    savePreferences();
});

// Carregar preferências salvas do armazenamento local
loadPreferences();

// Função para carregar preferências salvas do armazenamento local
function loadPreferences() {
    const savedTheme = localStorage.getItem('selectedTheme');
    const savedColor = localStorage.getItem('selectedColor');
    const savedFont = localStorage.getItem('selectedFont');

    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme();
    }

    if (savedColor) {
        colorSelect.value = savedColor;
        applyColor();
    }

    if (savedFont) {
        fontSelect.value = savedFont;
        applyFont();
    }
}

// Função para salvar preferências no armazenamento local
function savePreferences() {
    localStorage.setItem('selectedTheme', themeSelect.value);
    localStorage.setItem('selectedColor', colorSelect.value);
    localStorage.setItem('selectedFont', fontSelect.value);
}

// Aplicar cor selecionada
function applyColor() {
    const selectedColor = colorSelect.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.style.width = '100px';
    colorDisplay.style.height = '100px';
    colorDisplay.style.borderRadius = '50%';
}

// Aplicar estilo de fonte selecionado
function applyFont() {
    colorName.style.fontFamily = fontSelect.value;
}

// Aplicar tema selecionado
function applyTheme() {
    const selectedTheme = themeSelect.value;
    document.body.className = ''; // Limpar todas as classes
    document.body.classList.add(selectedTheme);
}

// Salvar preferências ao alterar os controles
colorSelect.addEventListener('change', () => {
    applyColor();
    savePreferences();
});

fontSelect.addEventListener('change', () => {
    applyFont();
    savePreferences();
});

themeSelect.addEventListener('change', () => {
    applyTheme();
    savePreferences();
});
