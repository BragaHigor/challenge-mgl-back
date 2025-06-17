import { Schema, model, Document } from "mongoose";

interface Social {
   icon: string;
   path: string;
}
interface Author {
   img_avatar: string;
   name: string;
   social: Social[];
}

export interface Article extends Document {
   id: string;
   type: string;
   img_sm: string;
   img_lg: string;
   date: string;
   hour: string;
   title: string;
   description: string;
   author: Author[];
   recommended: boolean;
}

const SocialSchema = new Schema<Social>(
   { icon: String, path: String },
   { _id: false }
);
const AuthorSchema = new Schema<Author>(
   { img_avatar: String, name: String, social: [SocialSchema] },
   { _id: false }
);

const ArticleSchema = new Schema<Article>(
   {
      id: { type: String, required: true, unique: true },
      type: { type: String, required: true },
      img_sm: { type: String, required: true },
      img_lg: { type: String, required: true },
      date: { type: String, required: true },
      hour: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      author: { type: [AuthorSchema], required: true },
      recommended: { type: Boolean, default: false },
   },
   {
      versionKey: false,
      toJSON: {
         virtuals: true,
         transform(doc, ret) {
            delete ret._id;
         },
      },
   }
);

export default model<Article>("Article", ArticleSchema);
