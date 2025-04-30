const db = require("../models");
const Phones = db.phones;
const Contacts = db.contacts;
const Op = db.Sequelize.Op;
const contactsInstance = new Contacts();

// Calculate stats
exports.calculate = async (req, res) => {

    //const [recordCount, setRecordCount] = useState(0);

    const count1=await Contacts.count();
    const count2=await Phones.count();

    const sql='SELECT *  from Contacts where id=select MAX(id from Contacts);';
   
    
    // db.query(sql, (err, result) => {
    //     if (err) {
    //       console.error("Error fetching record:", err);
    //       res.status(500).send("Error fetching record");
    //     } else {
    //       res.json(result.rows);
    //     }
    // });

    res.json({count1, count2 });

    


};