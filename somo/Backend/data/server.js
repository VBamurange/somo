// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// File paths
const loginFilePath = './data/login.json';
const surveyFilePath = './data/survey.json';

// Route for handling login
app.post('/login', async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Read existing login data from the JSON file
    const loginData = await readJsonFile(loginFilePath);

    // Add the new user to the login data
    const newUser = { username, email, password, firstName, lastName };
    loginData.push(newUser);

    // Write the updated login data back to the JSON file
    await writeJsonFile(loginFilePath, loginData);

    res.json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for handling survey data
app.get('/survey', async (req, res) => {
  try {
    // Read survey data from the JSON file
    const surveyData = await readJsonFile(surveyFilePath);
    res.json({ success: true, data: surveyData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Helper function to read JSON file
async function readJsonFile(filePath) {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

// Helper function to write to JSON file
async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
