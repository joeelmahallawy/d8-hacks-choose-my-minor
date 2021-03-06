import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;

    const universityData = await prisma.university.findFirst({
      where: {
        // @ts-expect-error
        NAME: query.q.toUpperCase(),
      },
    });

    res.status(200).json(universityData);
  } catch (err) {
    res.status(400).json({ universityData: err.message });
  }
};
export default handler;
