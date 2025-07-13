const {Schema, model} = require('mongoose');
const registrationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    registrationDate: {
        type: Schema.Types.Date,
        default: Date.now
    },
    status: {
        type: Schema.Types.String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    paymentStatus: {
        type: Schema.Types.String,
        enum: ['paid', 'unpaid'],
        default: 'unpaid'
    }
});

const Registractoin = model('Registration', registrationSchema);