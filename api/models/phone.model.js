module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        phonetype: {
            type : Sequelize.STRING,  // VARCHAR(256)
        },
        phonenumber:{
            type: Sequelize.STRING,
        }
        // DEFINE YOUR MODEL HERE
    });
  
    return Phone;
};