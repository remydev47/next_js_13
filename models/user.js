import { Schema, model, models } from "mongoose";

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: [true, 'Email Already Exists'],
        required: [true, 'Email must be required']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
       // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

//the "models" object is provided by the mongoose library and stores all the registered models models


const User = models.User || model("User", UserSchema);

export default User;