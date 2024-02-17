const Item = require('../db/models/itemModel');


module.exports.get_items = (req,res) => {
    Item.find().sort({date:-1}).then(items => res.json(items));
}

// module.exports.post_item = (req,res) => {
//     const newItem = new Item(req.body);
//     newItem.save().then(item => res.json(item));
// }

module.exports.update_item = (req,res) => {
    Item.findByIdAndUpdate({_id: req.params.id},req.body).then(function(item){
        Item.findOne({_id: req.params.id}).then(function(item){
            res.json(item);
        });
    });
}

module.exports.delete_item = (req,res) => {
    Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
        res.json({success: true});
    });
}

module.exports.post_item = async (req, res) => {
    try {
        const newItem = new Item({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.file
        });
        const item = await newItem.save()
        res.status(201).json(item);
        console.log("req.body: " + req.body)
    } catch (error) {
        res.status(500).json({Error: 'An error occurred.'} + error.message)
        console.log
    }
}
