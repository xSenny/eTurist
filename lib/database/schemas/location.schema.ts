import {model, models, Schema, Document, Types} from "mongoose";

export interface ILocation extends Document {
    name: string;
    address: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
    website: string;
    updated_at: Date;
    creator: Schema.Types.ObjectId;
    imageUrl: string;
    description: string;
    category: Schema.Types.ObjectId;
}

const LocationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
})

const Location = models.Location || model("Location", LocationSchema);
export default Location;