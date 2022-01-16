import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;

    const minorData = await prisma.minor.findFirst({
      where: {
        // @ts-expect-error
        NAME: query.q.split("-").join(" "),
      },
    });
    res.status(200).json(minorData);
  } catch (err) {
    res.status(400).json({ minorData: null });
  }
};
export default handler;
