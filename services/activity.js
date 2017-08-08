const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ActivitySchema = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    create_date: Date
});

module.exports = mongoose.model('activity', ActivitySchema, 'activity');