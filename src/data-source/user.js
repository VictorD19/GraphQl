const { MongoDataSource } = require("apollo-datasource-mongodb");

class Users extends MongoDataSource {
  getUser(userId) {
    return this.findOneById(userId);
  }
  getAll() {
    return this.model.find();
  }
  create(user) {
    return this.model.create(user);
  }
  delete(id){
    return this.model.deleteOne({id})
  }
  update(id, data){
    
    return this.model.updateOne({id},data)
  }
  findByEmail(email) {
    return this.findByFields({ email });
  }
}

module.exports = Users;