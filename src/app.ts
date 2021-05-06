import express from 'express'
import { getConnection, getManager, getRepository } from 'typeorm';
import User from './entities/users';

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message : 'Express working with typescript' })
})

app.post('/users', async (req, res) => {
  const { email, name } = req.body;

  const user = new User();
  user.email = email;
  user.name = name;

  await getRepository(User).save(user);

  res.status(201).json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
});

app.get('/users', async (_req, res) => {
  const userRepo = getRepository(User);
  const users = await userRepo.find({ take: 10 });
  res.json({
    users: users.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
    })),
  });
});

export default app