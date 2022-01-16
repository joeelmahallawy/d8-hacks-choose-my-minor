import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;
    const reviews = await prisma.review.findMany({
      where: {
        MINORID: Number(query.q),
      },
    });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
export default handler;
