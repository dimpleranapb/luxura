import mongoose, { Schema } from "mongoose";

const productSchema = new Schema ( {
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        trim: true

    },
    description :{
        type: String,
        required: true,
        trim: true
    },
    size: {
        type:String,
        required: true
    },
    reviews: {
        type: Schema.Type.ObjectId,
        ref: "Review"
    }
    
})

export const Product = mongoose.model( 'Product', productSchema);