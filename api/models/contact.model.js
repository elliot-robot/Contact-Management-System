module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        contactname:{
            type: Sequelize.STRING,
        }

        // DEFINE YOUR MODEL HERE
    });
  
    return Contact;
};