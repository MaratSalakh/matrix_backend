import { Request, Response } from "express";

export let servers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const getAll = (req: Request, res: Response) => {
  res.status(200).json(servers);
};
