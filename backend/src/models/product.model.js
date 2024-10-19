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
    image: {
        type: Array,
        required: true
    },
    description :{
        type: String,
        required: true,
        trim: true
    },
    size: {
        type:Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true,
    },
    bestSeller: {
        type: Boolean,
        default: false
    },
    reviews: {
        type: Schema.Type.ObjectId,
        ref: "Review"
    }
    
})

const Product = mongoose.model( 'Product', productSchema);

export default Product;