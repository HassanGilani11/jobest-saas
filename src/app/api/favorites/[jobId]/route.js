import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function POST(request, { params }) {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return NextResponse.json(
				{ message: "Please login first!" },
				{ status: 401 }
			);
		}

		const { jobId } = await params;

		if (!jobId) {
			return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
		}

		const favExist = await prisma.favourite.findFirst({
			where: {
				userId: currentUser.id,
				jobId: parseInt(jobId),
			},
		});

		if (favExist) {
			return NextResponse.json(
				{ message: "Already exists!" },
				{ status: 409 }
			);
		}

		const fav = await prisma.favourite.create({
			data: {
				userId: currentUser.id,
				jobId: parseInt(jobId),
			},
		});

		return NextResponse.json(fav, { status: 200 });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ message: "An error occurred." },
			{ status: 500 }
		);
	}
}

export async function DELETE(request, { params }) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{ message: "Unauthorized user." },
				{ status: 401 }
			);
		}
		const { jobId } = await params;
		if (!jobId) {
			return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
		}

		const findFavorite = await prisma.favourite.findFirst({
			where: {
				userId: currentUser.id,
				jobId: parseInt(jobId),
			},
		});
		if (!findFavorite) {
			return NextResponse.json({ message: "Not found!" }, { status: 404 });
		}
		const deletedFavorite = await prisma.favourite.delete({
			where: {
				id: findFavorite.id,
			},
		});

		return NextResponse.json(deletedFavorite, { status: 200 });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ message: "An error occurred." },
			{ status: 500 }
		);
	}
}
