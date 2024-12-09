const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

//CRUD operaties
const UsersController = {
  getAllUsers: async (req, res) => {
    try {
      //findMany() == SELECT * FROM Users
      //SELECT id, firstName, lastName, email FROM Users JOIN
      const users = await prisma.user.findMany({
        //INCLUDE EN SELECT NIET SAMEN GEBRUIKEN
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          Profile: {
            select: {
              id: true,
              bio: true,
            },
          },
        },
        orderBy: {
          email: "asc",
        },
      });
      res.json(users);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: +id,
          // === id: Number.parseInt(id)
        },
      });
      if (user) {
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },
  createUser: async (req, res) => {
    //eigenlijk is dit pas na validatie - zie volgende week
    const user = req.body;
    try {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      const newUser = await prisma.user.create({
        data: {
          ...user,
          password: hashedPassword,
        },
      });
      //res.sendStatus(201);
      res.status(201).json(newUser);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  updateUser: async (req, res) => {
    //Na validatie
    const { id } = req.params;
    const user = req.body;
    try {
      const updatedUser = await prisma.user.update({
        data: user,
        where: {
          id: +id,
        },
      });
      res.json(updatedUser);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.user.delete({
        where: {
          id: +id,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = UsersController;

//als er na een prisma. de tabellen niet staan, moet je 'npx prisma generate' doen
