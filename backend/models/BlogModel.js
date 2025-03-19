import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    contentType: { type: String, enum: ['blog', 'social_media', 'marketing'], required: true },
    seoScore: { type: Number, min: 0, max: 100 },
    readabilityScore: { type: Number, min: 0, max: 100 }, 
    language: { type: String, default: 'en' }, 
    createdAt: { type: Date, default: Date.now },
});

const BlogModel = mongoose.model('Blog', BlogSchema);

export default BlogModel;