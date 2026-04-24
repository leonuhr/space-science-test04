const actionBtn = document.getElementById('action-btn');
const counterText = document.getElementById('counter-text');
const disableJsBtn = document.getElementById('disable-js-btn');

let count = 0;
let jsEnabled = true;

// The interaction logic
function handleCardClick() {
  if (!jsEnabled) return;
  
  count++;
  
  // Change text
  if (count === 1) {
    actionBtn.textContent = 'Clicked!';
    counterText.style.display = 'block';
  }
  
  // Update counter
  counterText.textContent = `Clicked ${count} time${count !== 1 ? 's' : ''}`;
}

// The toggle logic
function toggleJavascript() {
  jsEnabled = !jsEnabled;
  
  if (jsEnabled) {
    disableJsBtn.textContent = 'Disable JavaScript behavior';
    disableJsBtn.classList.remove('disabled-state');
    actionBtn.style.opacity = '1';
    actionBtn.style.cursor = 'pointer';
  } else {
    disableJsBtn.textContent = 'Enable JavaScript behavior';
    disableJsBtn.classList.add('disabled-state');
    
    // Reset state visually to show JS is off
    actionBtn.textContent = 'Learn More';
    counterText.style.display = 'none';
    count = 0;
    
    // Make button look disabled
    actionBtn.style.opacity = '0.5';
    actionBtn.style.cursor = 'not-allowed';
  }
}

// Attach event listeners
actionBtn.addEventListener('click', handleCardClick);
disableJsBtn.addEventListener('click', toggleJavascript);
