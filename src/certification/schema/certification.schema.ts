import { Schema } from 'mongoose';

export const certificationSchema = new Schema({
   createdAt: Date,
    optainedAt:   String,
    description:   String,
    provider:   String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
});