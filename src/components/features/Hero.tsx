"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
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
			<div className="container relative pt-6 pb-10 sm:pt-10 sm:pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
				<div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
					{/* Content - left on desktop, stacks first on mobile */}
					<div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
						{/* Date & venue */}
						<div className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:mb-6 md:mb-8 lg:justify-start">
							<div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
								<IconCalendarEvent className="h-3.5 w-3.5 text-secondary/80 sm:h-4 sm:w-4" />
								<span className="text-xs font-semibold tracking-wide text-white sm:text-sm md:text-base">
									March 21, 2026
								</span>
							</div>
							<div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
								<IconMapPin className="h-3.5 w-3.5 text-secondary/80 sm:h-4 sm:w-4" />
								<span className="text-xs font-medium text-white/60 sm:text-sm md:text-base">
									Asia Pacific College, Makati
								</span>
							</div>
						</div>

						{/* Headline */}
						<h1 className="mb-4 max-w-2xl text-3xl font-bold leading-[1.1] sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
							<span className="whitespace-nowrap"><span className="text-primary">Arduino</span>{" "}<span className="text-secondary">Day</span></span>{" "}
							<span className="whitespace-nowrap"><span className="text-[#21935B]">Philippines</span>{" "}2026</span>
						</h1>

						{/* Subtitle */}
						<p className="mb-6 max-w-md text-xs leading-relaxed text-white/50 sm:mb-8 sm:max-w-lg sm:text-sm md:mb-10 md:text-base lg:text-lg">
							A day of talks, demos, and community-led sessions for builders,
							creators, and tinkerers. Join us and help shape what comes next.
						</p>

						{/* CTA buttons */}
						<div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start">
							<Link
								href="#partners"
								className="inline-flex w-full items-center justify-center rounded-full bg-primary/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary sm:w-auto sm:px-8 sm:py-3 sm:text-sm lg:px-10 lg:py-4"
							>
								Partner With Us
							</Link>
							<Link
								href="#merch"
								className="inline-flex w-full items-center justify-center rounded-full border border-white/[0.08] px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/80 transition-all hover:border-white/20 hover:text-white sm:w-auto sm:px-8 sm:py-3 sm:text-sm lg:px-10 lg:py-4"
							>
								Support Us with Merch
							</Link>
						</div>
					</div>

					{/* Logo with parallax - right on desktop, stacks on top on mobile */}
					<div className="order-1 flex items-center justify-center lg:order-2 lg:-ml-8">
						<div
							className="relative"
							style={{
								transform: `perspective(600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateX(${moveX}px) translateY(${moveY}px)`,
								transition: "transform 0.1s ease-out",
								pointerEvents: "none",
							}}
						>
							<div
								className="absolute inset-0 m-auto h-36 w-36 rounded-full blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80"
								style={{ background: "radial-gradient(circle, rgba(0,128,128,0.08) 0%, rgba(238,116,2,0.03) 70%, transparent 85%)" }}
								aria-hidden
							/>
							<Image
								src={Logo}
								alt="Arduino Day Philippines logo"
								className="relative h-32 w-32 object-contain sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
