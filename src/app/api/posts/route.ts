import { NextResponse } from "next/server"

export const GET = async (request: Request, { params } : any ) => {
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    return NextResponse.json({ posts: data }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json("Something went wrong", { status: 500 })
  }
}