// import { NextApiRequest, NextApiResponse } from "next";
// import * as cheerio from "cheerio";
// import axios from "axios";
import { PrismaClient } from ".prisma/client";
import Reviews from "../../fakeData.json";
import prisma from "../../lib/prisma";
import MinorDegrees from "../../ryerson.json";
// const scraper = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     // const getDataFromPage = async (url) => {
//     const arr = [];
//     // MinorDegrees.forEach(async (degree) => {
//     const data = await axios.get(
//       "https://www.ryerson.ca/calendar/2021-2022/minors/acting_dance_minor"
//     );
//     // const $ = await cheerio.load(data.data);
//     // const listItems = $("h1");
//     // listItems.each((id, el) => {
//     //   arr.push($(el).text());
//     // });
//     // arr = [...listItems];
//     // listItems.each((idx, el) => {
//     //   const country = { name: "" };

//     //   country.name = $(el).text();

//     //   arr.push(country);
//     // });
//     // });
//     res.json({ elements: data });

//     //   listItems.each(function (i, el) {
//     //     arr.push($(el).text());
//     //   });
//     //   return arr;
//     // };
//     //
//     //
//     //
//     // const getRyersonMinors = async () => {
//     // const RYERSON_BASE_URL = `https://www.ryerson.ca/calendar/2021-2022/minors/`;
//     // const data = await axios.get(RYERSON_BASE_URL);
//     // const $ = await cheerio.load(data.data, {
//     //   //
//     // });

//     // const listItems = $("td");
//     // const elements = [];

//     // listItems.each(function (idx, el) {
//     //   if (idx != 0  ) {
//     //     const newElement = {
//     //       minorName: "",
//     //       linkToWebsite: "",
//     //     };
//     //     newElement.minorName = $(el).children("a").text();
//     //     const linkToWebsite = $(el).children("a").attr("href");
//     //     const lastSlashIndex = linkToWebsite.lastIndexOf("/");
//     //     const lastPeriodIndex = linkToWebsite.lastIndexOf(".");
//     //     const minorDegree = linkToWebsite.slice(
//     //       lastSlashIndex + 1,
//     //       lastPeriodIndex
//     //     );
//     //     newElement.linkToWebsite = `${RYERSON_BASE_URL}${minorDegree}`;
//     //     elements.push(newElement);
//     //   }
//     // });

//     // res.json(JSON.stringify(elements));
//     // };
//     // const getMcMasterMinors = async () => {
//     // const MCMASTER_BASE_URL = `https://academiccalendars.romcmaster.ca/content.php?catoid=41&navoid=8648`;
//     // const data = await axios.get(MCMASTER_BASE_URL);
//     // const $ = await cheerio.load(data.data);

//     // const listItems = $("a");
//     // const elements = [];

//     // listItems.each(function (idx, el) {
//     //   if (idx != 0) {
//     //     const newElement = {
//     //       minorName: "",
//     //       linkToWebsite: "",
//     //     };
//     //     newElement.minorName = $(el).children("a").text();
//     //     const linkToWebsite = $(el).children("a").attr("href");
//     //     // const lastSlashIndex = linkToWebsite.lastIndexOf("/");
//     //     // const lastPeriodIndex = linkToWebsite.lastIndexOf(".");
//     //     // const minorDegree = linkToWebsite.slice(
//     //     //   lastSlashIndex + 1,
//     //     //   lastPeriodIndex
//     //     // );
//     //     newElement.linkToWebsite = linkToWebsite;
//     //     // newElement.linkToWebsite = `${RYERSON_BASE_URL}${minorDegree}`;
//     //     elements.push(newElement);
//     //   }
//     // });

//     res.json({ hello: "world" });
//     // };
//   } catch (err) {
//     res.json({ err: err.message });
//   }
// };
// export default scraper;

const handler = async (req, res) => {
  try {
    await prisma.review.createMany({
      data: [
        ...Reviews.map((review, i) => {
          return {
            RATING: Number(review.RATING),
            STUDENT: review.STUDENT,
            STUDENTPROGRAM: review.STUDENTPROGRAM,
            CONTENT: review.CONTENT,
            MINORID: Math.ceil(Math.random() * 60),
            DATEPOSTED: String(review.DATEPOSTED),
            STUDENTPROFILEPIC: review.STUDENTPROFILEPIC,
          };
        }),
      ],
    });
    //
    // await prisma.minor.createMany({
    //   data: [
    //     ...MinorDegrees.map((degree) => {
    //       return {
    //         RATING: 0,
    //         LINKTOWEBSITE: degree.LINKTOWEBSITE,
    //         NAME: degree.NAME,
    //         DESCRIPTION: degree.DESCRIPTION,
    //         UNIVERSITYID: 1,
    //       };
    //     }),
    //   ],
    // });
    res.json({ error: null });
  } catch (err) {
    res.json({ error: err.message });
  }
};
export default handler;
