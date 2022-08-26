import { model, Schema, Document } from "mongoose";

interface IGames extends Document {
  appid: number;
  name: string;
  isLocalMultiplayer: boolean;
  isMultiplayer: boolean;
  isOnlineMultiplayer: boolean;
  isSupportGamepad: boolean;
  isVirtualReality: boolean;
}

const GamesSchema = new Schema({
  appid: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
  isLocalMultiplayer: {
    type: Boolean,
  },
  isMultiplayer: {
    type: Boolean,
  },
  isOnlineMultiplayer: {
    type: Boolean,
  },
  isSupportgamepad: {
    type: Boolean,
  },
  isVirtualReality: {
    type: Boolean,
  },
});

const GamesModel = model<IGames>("Games", GamesSchema);

export { GamesModel, IGames };
