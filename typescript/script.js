const tsToggleBtn = document.getElementById('ts-toggle-btn');
const tsCode = document.getElementById('ts-code');
const compiledCode = document.getElementById('compiled-code');
const actionBtn = document.getElementById('action-btn');
const tsLog = document.getElementById('ts-log');

let showTs = true;

tsToggleBtn.addEventListener('click', () => {
  showTs = !showTs;
  
  if (showTs) {
    tsToggleBtn.textContent = 'Show Compiled JS';
    tsCode.style.display = 'block';
    compiledCode.style.display = 'none';
  } else {
    tsToggleBtn.textContent = 'Show TypeScript';
    tsCode.style.display = 'none';
    compiledCode.style.display = 'block';
  }
});

let count = 0;

actionBtn.addEventListener('click', () => {
  count++;
  tsLog.style.display = 'block';
  tsLog.textContent = `> Count is strictly a number: ${count}`;
  
  // Highlight effect
  tsLog.style.backgroundColor = 'rgba(49, 120, 198, 0.3)';
  setTimeout(() => {
    tsLog.style.backgroundColor = 'transparent';
  }, 300);
});
