const actionBtn = document.getElementById('action-btn');
const counterText = document.getElementById('counter-text');
const disableJsBtn = document.getElementById('disable-js-btn');

// Code blocks to highlight
const hlText = document.getElementById('highlight-text');
const hlCounter = document.getElementById('highlight-counter');

let count = 0;
let jsEnabled = true;

function handleCardClick() {
  if (!jsEnabled) return;
  
  count++;
  
  if (count === 1) {
    actionBtn.textContent = 'Clicked!';
    counterText.style.display = 'block';
  }
  
  counterText.textContent = `Clicked ${count} time${count !== 1 ? 's' : ''}`;

  // Interactive Code Highlighting
  hlText.style.backgroundColor = 'rgba(247, 223, 30, 0.3)';
  hlCounter.style.backgroundColor = 'rgba(247, 223, 30, 0.3)';
  
  setTimeout(() => {
    hlText.style.backgroundColor = 'transparent';
    hlCounter.style.backgroundColor = 'transparent';
  }, 300);
}

function toggleJavascript() {
  jsEnabled = !jsEnabled;
  
  if (jsEnabled) {
    disableJsBtn.textContent = 'Disable JS';
    disableJsBtn.style.backgroundColor = 'transparent';
    actionBtn.style.opacity = '1';
    actionBtn.style.cursor = 'pointer';
  } else {
    disableJsBtn.textContent = 'Enable JS';
    disableJsBtn.style.backgroundColor = '#ef4444';
    
    actionBtn.textContent = 'Learn More';
    counterText.style.display = 'none';
    count = 0;
    
    actionBtn.style.opacity = '0.5';
    actionBtn.style.cursor = 'not-allowed';
  }
}

actionBtn.addEventListener('click', handleCardClick);
disableJsBtn.addEventListener('click', toggleJavascript);
