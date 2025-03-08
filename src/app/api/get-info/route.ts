import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in environment variables.");
}

export async function POST(req: Request) {
  try {
    const { destination } = await req.json();

    if (!destination) {
      return NextResponse.json({ error: "Destination is required" }, { status: 400 });
    }

    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(API_KEY?? "");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Define prompt
    const prompt = `Provide travel information about ${destination}. Include top attractions, best time to visit, cultural experiences, and famous foods.`;

    // Fetch response from Gemini API
    const result = await model.generateContent(prompt);
    const response =  result.response;
    console.log(response)
    const text =  response.text();

    return NextResponse.json({ info: text }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
