import prisma from "../../lib/prisma";
import { RatingData, Review } from "../../interfaces";

const handler = async (req, res) => {
  try {
    const reviewData: Review = await JSON.parse(req.body);
    // const { MINORID, ...rest } = reviewData;
    await prisma.review
      .create({
        data: {
          CONTENT: reviewData.CONTENT,
          RATING: reviewData.RATING,
          DATEPOSTED: String(reviewData.DATEPOSTED),
          STUDENT: reviewData.STUDENT,
          STUDENTPROFILEPIC: reviewData.STUDENTPROFILEPIC,
          STUDENTPROGRAM: reviewData.STUDENTPROGRAM,
          MINORID: reviewData.MINORID,
        },
      })
      .then((val) => {
        res.json({ val });
      });
  } catch (err) {
    res.json({ err: err.message });
  }
};

export default handler;
