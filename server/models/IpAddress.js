import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const ipaddressSchema = new Schema({
    hostname:{
        type: String,
        required: true,
        minlength: [8, 'Hostname must be 8 characters or more']
    },
    ipv4:{
        type: String,
        required: true,
        minlength: [9, 'A valid ipv4 address must be between 9 and 21 characters'],
        maxlength: [21, 'A valid ipv4 address must be between 9 and 21 characters']
    },
    ipv6:{
        type: String,
        required: true,
        minlength: [9, 'A valid ipv6 address must be between 9 and 45 characters'],
        maxlength: [45, 'A valid ipv6 address must be between 9 and 45 characters']
    },
    container:{
        type: Boolean,
        required: true
    },
    docker:{
        type: Boolean,
        required: true
    },
    vm:{
        type: Boolean,
        required: true
    },
    operating_system:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    createdAt: {type: Date, default: Date.now}
});

const IpAddress = mongoose.model('IpAddress', ipaddressSchema);

export default IpAddress;