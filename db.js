import { Sequelize } from "sequelize";
import { userModel } from "./model/user.js";


export const connection = async () => {
    const sequelize = new Sequelize("sql", "postgres", "Sougga@1212", {
        host : "localhost",
        dialect : "postgres",
    });

    let user = null;

    try {
        await sequelize.authenticate();
        console.log("connection to db successful");
        user = userModel(sequelize);
        sequelize.sync();
        console.log("table created");

    }

    catch(error) {

        console.error("unable to connect to db :", error);



    }
};