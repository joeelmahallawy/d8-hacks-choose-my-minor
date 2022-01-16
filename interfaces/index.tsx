export interface University {
  ID: number;
  LOCATION: string;
  NAME: string;
  PICTUREURL: string;
}
export interface MinorDegree {
  ID: number;
  NAME: string;
  DESCRIPTION: string;
  LINKTOWEBSITE: string;
  RATING: number;
  UNIVERSITYID: number;
}
export interface Review {
  ID: number;
  STUDENT: string;
  STUDENTPROGRAM: string;
  STUDENTPROFILEPIC: string;
  CONTENT: string;
  RATING: number;
  MINORID: number;
  DATEPOSTED: Date;
}

export interface RatingData {
  stars: number;
  specificDetails: string;
  studentProgram: string;
}
