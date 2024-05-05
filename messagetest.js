const webhookUrl = 'https://discord.com/api/webhooks/1236781877860372543/wy9r9uVPT1m4uSi44BnWgUaMA3_H8knFz5fJyuHta6VAz7vuYcfBDsJ9yeVc8eW5NHwV';
const messageContent = 'Hello, Discord!';

// Construct the payload
const payload = {
  content: messageContent
};

// Send the POST request to the webhook URL
fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(response => {
  if (response.ok) {
    console.log('Message sent successfully!');
  } else {
    console.error('Failed to send message:', response.status, response.statusText);
  }
})
