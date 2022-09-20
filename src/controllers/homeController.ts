import { Request, Response } from "express";
import { Op } from "sequelize";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
  const [usuario, created] = await User.findOrCreate({
    where: { name: "Bonieky" },
    defaults: { age: 80 },
  });

  console.log("USUARIO", usuario);
  console.log("CRIADO", created);

  // let usuario = await User.findByPk(2);

  // let usuario = await User.findOne({
  //   where: {
  //     id: 1,
  //   },
  // });

  // if (usuario) {
  //   console.log(`O usuario ${usuario.name} possui ${usuario.age} anos.`);
  // } else {
  //   console.log("Usuário não encontrado");
  // }

  console.log(usuario);

  let users = await User.findAll();

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    users,
  });
};

export const novoUsuario = async (req: Request, res: Response) => {
  let { name, age } = req.body;

  if (name) {
    const newUser = User.build({ name });

    if (age) {
      newUser.age = parseInt(age);
    }

    await newUser.save();
  }

  res.redirect("/");
};
