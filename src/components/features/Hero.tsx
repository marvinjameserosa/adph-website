"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/assets/adph-logo.png";

export const Hero = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);

		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const tiltX = isClient
		? ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 18
		: 0;
	const tiltY = isClient
		? ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * -18
		: 0;

	const moveX = isClient ? (mousePosition.x - window.innerWidth / 2) * 0.03 : 0;
	const moveY = isClient ? (mousePosition.y - window.innerHeight / 2) * 0.03 : 0;

	return (
		<section className="relative overflow-hidden pt-12 md:pt-16">
			<div className="container relative flex flex-col gap-8 py-12 md:gap-10 md:py-24 lg:py-28">
				<div className="grid gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
					<div className="flex flex-col gap-4 max-w-4xl">
						<div className="inline-flex w-fit items-center gap-3 rounded-full bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur sm:px-4 sm:py-2 sm:text-xs">
							<span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
							<span>Arduino Day Philippines 2026</span>
						</div>
						<h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
							Build, prototype, and share what comes next.
						</h1>
						<p className="max-w-2xl text-sm text-white/70 sm:text-base md:text-lg">
							Date and venue are coming soon. We are shaping a focused program of talks, demos, and community-led sessions. Join the list to get the drop first.
						</p>
						<div className="flex flex-wrap items-center gap-3">
							<Link href="https://arduinodayph.pwapilipinas.org/">
								<Button className="px-5 py-2.5 text-sm sm:px-6 sm:py-3 lg:px-8 lg:py-4">Get updates</Button>
							</Link>
							<Link
								href="#faqs"
								className="rounded-full border border-white/15 px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary sm:px-5 sm:py-3 sm:text-sm"
							>
								View FAQs
							</Link>
						</div>
					</div>

					<div className="relative flex items-center justify-center">
						<div
							className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
							style={{
								transform: `perspective(520px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateX(${moveX}px) translateY(${moveY}px)`,
								transition: "transform 0.08s ease-out",
								pointerEvents: "none",
							}}
						>
							<Image
								src={Logo}
								alt="Arduino Day Philippines logo"
								className="h-48 w-48 object-contain sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
