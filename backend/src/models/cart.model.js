import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensure at least one item is added
  },
});

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  items: [cartItemSchema], // Array of cart items
  totalQuantity: {
    type: Number,
    default: 0, // Default total quantity
  },
  totalAmount: {
    type: Number,
    default: 0, // Default total amount
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set creation date to now
  },
});

// Method to calculate total quantity and amount
cartSchema.methods.calculateTotals = function () {
  this.totalQuantity = this.items.reduce((total, item) => total + item.quantity, 0);
  this.totalAmount = this.items.reduce((total, item) => total + item.quantity * item.product.price, 0);
};

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
