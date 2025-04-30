const db = require("../models");
const Phones = db.phones;
const Contacts = db.contacts;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    const phone = {
        id:req.body.id,
        phonetype: req.body.phonetype || false,
        phonenumber: req.body.phonenumber,
        contactId: req.body.contactId
        };
        Phones.create(phone)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Some error occurred"
        });
        });
};



    ///
// exports.findAll = async (req, res) => {
//         try {
//           // Perform a join between Table1 and Table2 based on the foreign key relationship
//           const data = await Phones.findAll({
//             include: [{
//               model: Contacts,
//                    }],
//           });
      
//           res.json({ data });
//         }
//         catch (error) {
//             console.error('Error fetching data:', error);
//             res.status(500).json({ error: 'Internal server error' });
//           }
//     };
exports.findAll = async (req, res) => {
    try {
        const contactId  = req.params.contactId;
         
    
        // Fetch data from Table1 and its associated Table2 records using a JOIN
        const data = await Contacts.findAll({
          where: { id: contactId },
          include: [{ model: Phones }]
        });
        // z=data.phones;
        // res.send({z});

        res.json(data[0].phones)
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };

   
    ///

// Get all phones 


// exports.findAll = (req, res) => {
//     const id=req.params.phoneId;
//     const contactid=req.params.contactId;

//     Phones.findAll({where:{
//         Contacts.contactid=Phones.contactId;
//     }})
//         .then(data=> {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred"
//             });
//         });
// };

// Get one phone by id
exports.findOne = (req, res) => {
  
};

// Update one phone by id
exports.update = (req, res) => {
    const id = req.params.contactId;
    const phoneId=req.params.phoneId;
    Phones.update(req.body, {
    where: { id: id }
    })
    .then(num => {
    if (num == 1) {
    res.send({
    message: "Task was updated successfully."
    });
    } else {
    res.send({
    message: `Cannot update Task`
    });
    }
    })
    .catch(err => {
    res.status(500).send({
    message: "Error updating Task with id=" + id
    });
    });
};

// Delete one phone by id
// exports.delete = (req, res) => {
//     const id = req.params.phoneId;
//     const contactId=req.params.contactId;

//     Phones.destroy({
//         where: {id: id, }
//     })  
//     .then(num => {
//         if(num == 1){
//             res.send({
//                 message:" Task was deleted successfully "
//             });
//         }
//         else{
//             res.send({
//                 message: 'Cannot delete task'
//             });
//         }
//     })
//     .catch(err => {
//         res.status(500).send({
//             message:'Could not delete task with 1 id='+id
//         });
//     })
// };

///

exports.delete = async (req, res) => {
    

    try {
        const contactId  = req.params.contactId;
        const id = req.params.phoneId;



        // Find the user and associated addresses
        const user = await Contacts.findOne({ where: { id: contactId }, include: Phones });
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        const table1Record = await Phones.findByPk(id);

        await table1Record.destroy({contactId:contactId});

        // Delete associated addresses
        //await Phones.destroy({ where: { contactId } });
    
        // Delete the user
        //await Contacts.destroy({ where: { id: contactId } });
    
        res.json({ message: 'User and associated addresses deleted successfully' });
      } catch (error) {
        console.error('Error deleting user and addresses:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };
    




///