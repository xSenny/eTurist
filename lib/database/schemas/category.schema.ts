import {model, models, Schema} from "mongoose";
export interface ICategory extends Document{
    name: string;
    creator?: Schema.Types.ObjectId;
}
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
})

const Category = models.Category || model("Category", CategorySchema);
export default Category;