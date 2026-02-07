"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/assets/adph-logo.png";
import { IconMapPin, IconCalendarEvent } from "@tabler/icons-react";

export const Hero = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isClient, setIsClient] = useState(false);

	const handleMouseMove = useCallback((event: MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	}, []);

	useEffect(() => {
		setIsClient(true);
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	const tiltX = isClient
		? ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 12
		: 0;
	const tiltY = isClient
		? ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * -12
		: 0;
	const moveX = isClient
		? (mousePosition.x - window.innerWidth / 2) * 0.02
		: 0;
	const moveY = isClient
		? (mousePosition.y - window.innerHeight / 2) * 0.02
		: 0;

	return (
		<section className="relative overflow-hidden">
			<div className="container relative pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28">
				<div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					{/* Logo with parallax - left side on desktop, centered on mobile */}
					<div className="flex items-center justify-center">
						<div
							className="relative"
							style={{
								transform: `perspective(600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateX(${moveX}px) translateY(${moveY}px)`,
								transition: "transform 0.1s ease-out",
								pointerEvents: "none",
							}}
						>
							<div
								className="absolute inset-0 m-auto h-52 w-52 rounded-full blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"
								style={{ background: "radial-gradient(circle, rgba(0,178,178,0.18) 0%, rgba(238,116,2,0.06) 70%, transparent 85%)" }}
								aria-hidden
							/>
							<Image
								src={Logo}
								alt="Arduino Day Philippines logo"
								className="relative h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
								priority
							/>
						</div>
					</div>

					{/* Content - right side on desktop */}
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
						{/* Date & venue badge */}
						<div className="mb-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm sm:mb-6 sm:gap-2.5 sm:px-5">
							<div className="flex items-center gap-1.5">
								<IconCalendarEvent className="h-4 w-4 text-primary" />
								<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs">
									March 21, 2026
								</span>
							</div>
							<span className="text-white/20" aria-hidden>|</span>
							<div className="flex items-center gap-1.5">
								<IconMapPin className="h-4 w-4 text-primary" />
								<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs">
									Asia Pacific College
								</span>
							</div>
						</div>

						{/* Headline */}
						<h1 className="mb-5 max-w-2xl text-balance text-3xl font-bold leading-[1.1] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
							Arduino Day{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{ backgroundImage: "linear-gradient(135deg, #00b2b2 0%, #008080 40%, #EE7402 100%)" }}
							>
								Philippines
							</span>{" "}
							2026
						</h1>

						{/* Subtitle */}
						<p className="mb-8 max-w-lg text-sm leading-relaxed text-white/55 sm:mb-10 sm:text-base md:text-lg">
							A day of talks, demos, and community-led sessions for builders,
							creators, and tinkerers. Join us and help shape what comes next.
						</p>

						{/* CTA buttons */}
						<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
							<Link href="#partners">
								<Button className="px-6 py-3 text-sm sm:px-8 sm:py-3.5 lg:px-10 lg:py-4">
									Partner With Us
								</Button>
							</Link>
							<Link href="#merch">
								<Button className="px-6 py-3 text-sm sm:px-8 sm:py-3.5 lg:px-10 lg:py-4">
									Merch for a Cause
								</Button>
							</Link>
							<Link
								href="#faqs"
								className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white/60 transition-all hover:border-white/25 hover:text-white/90 sm:px-6 sm:py-3.5 sm:text-sm"
							>
								View FAQs
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
