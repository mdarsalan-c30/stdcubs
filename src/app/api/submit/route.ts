import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export type SheetForm = {
  name: string;
  email: string;
  phone: string;
  course: string;
  grade: string;
  parent: string;
  date: string;
  time: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, course, grade, parent, date, time } =
    body as SheetForm;

  const creds = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };

  try {
    // prepare google auth
    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:H1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, phone, course, grade, parent, date, time]],
      },
    });

    return NextResponse.json({ message: "Success", response }, { status: 200 });
  } catch (error) {
    console.log(error);

    const errorMessage = (error as Error).message ?? "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
