/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as TransactionService from "../services/Transations";
import {
  BaseTransaction,
  Transaction,
} from "../entities/Transaction.interface";

/**
 * Router Definition
 */
export const transactionsRouter = express.Router();

/**
 * Controller Definitions
 */

//Get all transaction
transactionsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const transactions: Transaction[] = await TransactionService.findAll();

    res.status(200).send(transactions);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET a single transaction by id
transactionsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const transaction: Transaction = await TransactionService.find(id);

    if (transaction) {
      return res.status(200).send(transaction);
    }

    res.status(404).send("Transaction not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Create a transaction
transactionsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const transaction: BaseTransaction = req.body;

    const newTransaction = await TransactionService.create(transaction);

    res.status(201).json(newTransaction);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Updates an existing transaction by id
transactionsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const transactionUpdate: Transaction = req.body;

    const existingTransaction: Transaction = await TransactionService.find(id);

    if (existingTransaction) {
      const updatedTransaction = await TransactionService.update(
        id,
        transactionUpdate
      );
      return res.status(200).json(updatedTransaction);
    } else {
      throw new Error(
        `Transaction with id: ${id} doesn't exist and therefore will not be updated`
      );
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Delete a transaction by id
transactionsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await TransactionService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
