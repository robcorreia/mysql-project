import { Request, Response } from "express";
import { Op } from "sequelize";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
  let searchName: string = "ro";

  let users = await User.findAll({
    where: {
      age: {
        [Op.gte]: 18,
      },
    },
    order: [
      ["age", "ASC"],
      ["name", "ASC"],
    ],
    // where: {
    //   name: {
    //     [Op.like]: `%${searchName}%`, // filtra tudo que tem a em qualquer lugar
    //   },
    // },
    // where: {
    //   name: {
    //     [Op.like]: "pa%", // filtra tudo que começa com pa
    //   },
    // },
    // where: {
    //   age: {
    //     [Op.between]: [20, 50],
    //   },
    // },
    // where: {
    //   age: {
    //     [Op.gt]: 40, // > 40
    //     [Op.gte]: 40, // >= 40
    //     [Op.lt]: 40, // <= 40
    //     [Op.lte]: 40, // <= 40
    //   },
    // },
    // where: {
    //   age: [21, 30, 90],
    // },
    // where: {
    //   [Op.or]: [{ age: 21 }, { age: 27 }]
    // },
    // where: {
    //   [Op.or]: [{ age: 21 }, { name: "Paulo" }],
    // }, filtro com "ou"
    // where: { age: 21, name: "Paulo" }, //filtro pelo nome e idade
    // attributes: ["name", "age"], // o que eu quero
    // attributes: { exclude: ["id"] }, // o que eu nao quero
  });

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
