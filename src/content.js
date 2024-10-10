
const connectButton = document.createElement('button');
connectButton.innerText = 'Connect with All';
connectButton.style.position = 'fixed';
connectButton.style.bottom = '20px';
connectButton.style.right = '20px';
connectButton.style.zIndex = '1000';
connectButton.style.padding = '10px 20px';
connectButton.style.backgroundColor = '#0073b1';
connectButton.style.color = '#ffffff';
connectButton.style.border = 'none';
connectButton.style.borderRadius = '5px';
connectButton.style.cursor = 'pointer';

document.body.appendChild(connectButton);

connectButton.addEventListener('click', async () => {
  const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');
  for (let button of connectButtons) {
    button.click();
    
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (3000 - 1000 + 1) + 1000))); 
  }
  alert('Connection requests sent!');
});
