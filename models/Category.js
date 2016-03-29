var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    title: String
});

var Category = mongoose.model('categories', categorySchema);

Category.create = function (newCategory, callback) {
    newCategory.save(callback);
};

Category.getAll = function (callback) {
    Category.find({}, callback);
};

Category.getById = function (id, callback) {
    Category.findById(id, callback);
};

module.exports = Category;