const { MessageType } = require('@whiskeysockets/baileys');

// Function to send buttons to a chat
sock.ev.on('messages.upsert', async (m) => {
  const message = m.messages[0];

  if (message.message?.conversation === 'hi') {
    // Send the button message when the user types "hi"
    await sendButtonMessage(sock, message.key.remoteJid);
  }

  // Handle button responses (if needed)
  if (message.type === 'buttonsResponseMessage') {
    const selectedButton = message.selectedButtonId;
    if (selectedButton === 'id1') {
      await sock.sendMessage(message.key.remoteJid, { text: 'You selected Option 1' });
    } else if (selectedButton === 'id2') {
      await sock.sendMessage(message.key.remoteJid, { text: 'You selected Option 2' });
    }
  }
});
