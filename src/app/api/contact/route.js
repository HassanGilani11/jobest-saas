import { NextResponse } from "next/server";
import contactEmail from "@/emails/contact-email";

export async function POST(request) {
	const body = await request.json();
	console.log(body);
	const { name, email, subject, message } = body;

	if (!name || !email || !subject || !message) {
		return NextResponse.json(
			{
				message: "All fields are required!",
			},
			{ status: 400 }
		);
	}

	contactEmail(name, email, subject, message);

	return NextResponse.json(
		{
			message: "Thanks for your email, we will contact you soon.",
		},
		{ status: 200 }
	);
}
