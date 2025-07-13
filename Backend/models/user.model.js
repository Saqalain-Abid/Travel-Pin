const { Schema, SchemaTypes, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: SchemaTypes.String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: SchemaTypes.String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address'] // Regex validation
    },
    password: {
        type: SchemaTypes.String,
        required: true,
        minlength: 6,
        select: false // Prevents password from being returned in queries
    },
    role: {
        type: SchemaTypes.String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    emailVerified: {
        type: SchemaTypes.Boolean,
        default: false
    },

    verificationToken: {
        type: SchemaTypes.String,
        default: null
    },

    resetPasswordToken: {
        type: SchemaTypes.String,
        default: null
    },

    resetPasswordExpires: {
        type: SchemaTypes.Date,
        default: null
    },

    loginAttempts: {
        type: SchemaTypes.Number,
        default: 0
    },

    isLocked: {
        type: SchemaTypes.Boolean,
        default: false
    },

    lastLogin: {
        type: SchemaTypes.Date
    },

    createdAt: {
        type: SchemaTypes.Date,
        default: Date.now
    }
})

const UserModel = model('User', userSchema);
module.exports = UserModel;