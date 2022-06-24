import axios from "axios"
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { getAddress } from "./getAddress"

type Address = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: number,
    complemento: string
}

const addAddress = async (
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    complemento: string
) => {
    await connection
        .insert({
            logradouro: logradouro,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            cep: cep,
            complemento: complemento
        })
        .into("address");
};

export const newAddress = async (req: Request, res: Response) => {
    try {
        await addAddress(
            req.body.logradouro,
            req.body.bairro,
            req.body.cidade,
            req.body.estado,
            req.body.cep,
            req.body.complemento
        );

        res.status(200).send({
            message: "Address registered successfully!"
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
};