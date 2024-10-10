import React from 'react';
import FloatingButton from './FloatingButton';

function App() {
    const handleConnectAll = async () => {
       
        const connectButtons = document.querySelectorAll('button[aria-label^="Connect"]');

        if (connectButtons.length === 0) {
            alert("No connectable profiles found.");
            return;
        }

        for (let button of connectButtons) {
            button.click(); 
            console.log("Sent connection request to:", button);

           
            await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (3000 - 1000 + 1) + 1000)));
        }

        alert(`Sent ${connectButtons.length} connection requests!`);
    };

    return (
        <div className="App">
            <FloatingButton onClick={handleConnectAll} />
        </div>
    );
}

export default App;
