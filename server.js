const express = require('express');
const sequelize = require('./database');
const User = require('./models/user');
const Address = require('./models/address');

const app = express();
app.use(express.json());

// Sync models and create tables
sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
});

// API route for registering user and address
app.post('/register', async (req, res) => {
  const { name, addressLine, city, state, zip } = req.body;

  try {
    // Create User
    const user = await User.create({ name });

    // Create Address and associate with User
    const address = await Address.create({
      addressLine,
      city,
      state,
      zip,
      UserId: user.id
    });

    res.status(201).json({ user, address });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});