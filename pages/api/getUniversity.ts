import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;
    const { q } = query;
    const universityData = await prisma.university.findFirst({
      where: {
        // @ts-expect-error
        NAME: q.toUpperCase(),
      },
    });
    res.status(200).json({ universityData });
  } catch (err) {
    res.status(400).json({ universityData: null });
  }
};
export default handler;
