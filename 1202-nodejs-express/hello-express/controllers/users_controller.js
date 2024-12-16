const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

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
          profile: {
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
      console.log(error);
      res.sendStatus(500);
    }
  },
  getUserById: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        //bad request: clientsided fout
        return res.status(400).json(errors.array());
      }
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(erros.array());
    }
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
  login: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(erros.array());
    }
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.sendStatus(401);
      }

      const result = bcrypt.compare(password, user.password);
      if (result) {
        //Token aanmaken
        const payload = {
          sub: user.id,
          role: "STUDENT",
          iat: Date.now(),
        };

        //cmd
        //node
        //require("crypto").randomBytes(64).toString("hex");
        //token in .env steken en hier oproepen
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        res.cookie("web3", token, {
          httpOnly: true,
          //secure: true, //cookie kan enkel verstuurd worden bij https bij deze instelling
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        }); //dit is geen eindtoestand dus geen probleem, je kan dit eventueel ook chainen met de hetgene eronder
        res.json(user);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },
  verify: async (req, res) => {
    const userId = req.userId;
    //via userId de user opvragen via getUserById(userId), en dan user (volledig object) terugsturen
    res.json({ id: userId })
  }
};

module.exports = UsersController;

//als er na een prisma. de tabellen niet staan, moet je 'npx prisma generate' doen

//200 - OK
//201 - Created (bij POST)
//204 - No Content
//400 - Bad Request
//401 - Unauthorized -> niet ingelogd
//403 - Forbidden -> ingelogd maar niet de juiste permissies
//404 - Not Found
//500 - Internal Server Error
