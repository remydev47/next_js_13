import { Schema, model, models } from "mongoose";

const UserSchema = newSchema ({
    email: {
        type: String,
        unique: [true, 'Email Already Exists'],
        required: [true, 'Email must be requred']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

//the "models" object is provided by the mongoose library and stores all the registered models models


const User = models.User || models("user", UserSchema);

export default User;