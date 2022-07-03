import { Schema, Model, model } from "mongoose";

export const ROLS = ["user", "moderator", "admin"]

const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
}); 

export default model("Role", roleSchema);
