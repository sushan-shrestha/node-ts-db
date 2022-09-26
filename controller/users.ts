import { Request, Response, NextFunction } from "express";
import db from "../models";

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchAll(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const users = await db.User.findAll();

  return res.status(200).send(users);
}

export async function create(req: Request, res: Response, next: NextFunction) {
  const user = db.User.create(req.body);
  return res.status(200).send(user);
}

export async function findById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = await db.User.findByPk(req.params.id);
  return res.status(200).send(user);
}
