const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Proxy endpoint to start the timer
app.post('/starttimer', async (req, res) => {
  try {
    const { itemId } = req.body;

    // Forward the request to Azure Function
    const response = await axios.post('https://pipedrive-timetracker.azurewebsites.net/starttimerfunction?code=HdnWXnTBHF9d42Y6XmnFrUm8fM51yczeyLjo6-OwslPlAzFuu9hjDA%3D%3D', {
        
        itemId: itemId
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error starting timer:', error);
    res.status(500).json({ error: 'Failed to start timer' });
  }
});

// Proxy endpoint to stop the timer
app.post('/stoptimer', async (req, res) => {
  try {
    const { itemId } = req.body;

    // Forward the request to Azure Function
    const response = await axios.post('https://pipedrive-timetracker.azurewebsites.net/stoptimerfunction?code=qSl53wJ4QiX-gxe71pPfx14it69IpPwKMNsdjhD2KNxBAzFu2sN6Hw%3D%3D', {
      itemId: itemId
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error stopping timer:', error);
    res.status(500).json({ error: 'Failed to stop timer' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
