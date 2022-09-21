import { User } from "./src/models/User";
import { Op } from "sequelize";

let users = User.findAll({
  // const [usuario, created] = await User.findOrCreate({
  //   where: { name: "Bonieky" },
  //   defaults: { age: 80 },
  // });
  // console.log("USUARIO", usuario);
  // console.log("CRIADO", created);
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
  // console.log(usuario);
  // await User.destroy({
  //   where: {
  //     age: {
  //       [Op.lte]: 18,
  //     },
  //   },
  // });
  // let results = await User.findAll({
  //   where: {
  //     id: 7,
  //   },
  // });
  // if (results.length > 0) {
  //   let usuario = results[0];
  //   usuario.name = "Testador alterado";
  //   usuario.age = 70;
  //   await usuario.save();
  // }
  // 1. Dados a resem alterados
  // 2. Condição para encontrar o(os) item(ns)
  // await User.update(
  //   { name: "Sr Bonieky", age: 91 },
  //   {
  //     where: {
  //       id: 4,
  //     },
  //   }
  // );
  //atualizar todos menores de 18 para 18 anos
  //   await User.update(
  //     { age: 18 },
  //     {
  //       where: {
  //         age: {
  //           [Op.lt]: 18,
  //         },
  //       },
  //     }
  //   );
  // where: {
  //   age: {
  //     [Op.gte]: 1,
  //   },
  // },
  // offset: 0,
  // limit: 2,
  // where: {
  //   age: {
  //     [Op.gte]: 18,
  //   },
  // },
  // order: [
  //   ["age", "ASC"],
  //   ["name", "ASC"],
  // ],
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
