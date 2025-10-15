import { Schema, SchemaType, model, models } from "mongoose";

const FoodSchema = new Schema(
  {
    FoodName: { type: String, requireed: true },
    price: { type: Number, requireed: true },
    // categiry:{type:String ,ref:FoodCategory, required:true }
    ingredients: { type: String, requireed: true },
    image: { type: String, requireed: true },
  },
  { timestamps: true }
);
const Food = models.FoodCategory || model("Food", FoodSchema);
