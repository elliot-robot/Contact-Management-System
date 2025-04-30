const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const contact = {
        id:req.body.id,
        contactname: req.body.contactname || false
        };
        Contacts.create(contact)
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

// Get all contacts
exports.findAll = (req, res) => {
    Contacts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one contact by id
exports.findOne = (req, res) => {
  
};

// Update one contact by id
exports.update = (req, res) => {
    const id = req.params.contactId;
    
    Contacts.update(req.body, {
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

// Delete one contact by id
exports.delete = (req, res) => {
    const id = req.params.contactId;

    Contacts.destroy({
        where: {id: id}
    })  
    .then(num => {
        if(num == 1){
            res.send({
                message:" Task was deleted successfully "
            });
        }
        else{
            res.send({
                message: 'Cannot delete task'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message:'Could not delete task with 1 id='+id
        });
    })
};
