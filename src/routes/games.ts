import { Router } from "express";
import { GamesModel, IGames } from "../models/games";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const games: IGames[] = await GamesModel.find().exec();
    return res.json(games);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const game: IGames = req.body;

    const gameExists = await GamesModel.findOne({
      appid: game.appid,
    }).exec();

    if (gameExists) {
      return res
        .status(409)
        .json({ error: "There is already another game with this appid" });
    }

    const newGame = await GamesModel.create(game);
    return res.status(201).json(newGame);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
