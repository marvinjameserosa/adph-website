"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/assets/adph-logo.png";
import {
	IconMapPin,
	IconHeartHandshake,
	IconShirt,
	IconArrowRight,
	IconCalendarEvent,
} from "@tabler/icons-react";

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
			{/* Hero content */}
			<div className="container relative flex flex-col items-center pt-8 pb-10 sm:pt-12 sm:pb-14 md:pt-16 md:pb-20">
				{/* Logo with parallax */}
				<div
					className="relative mb-6 flex items-center justify-center sm:mb-8"
					style={{
						transform: `perspective(600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateX(${moveX}px) translateY(${moveY}px)`,
						transition: "transform 0.1s ease-out",
						pointerEvents: "none",
					}}
				>
					<div className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-primary/10 blur-3xl sm:h-56 sm:w-56 md:h-72 md:w-72" aria-hidden />
					<Image
						src={Logo}
						alt="Arduino Day Philippines logo"
						className="relative h-32 w-32 object-contain sm:h-44 sm:w-44 md:h-56 md:w-56"
						priority
					/>
				</div>

				{/* Date & venue badge */}
				<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur sm:mb-6 sm:gap-2.5">
					<IconCalendarEvent className="h-4 w-4 text-primary" />
					<span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs">
						March 21, 2026
					</span>
					<span className="text-white/25" aria-hidden>|</span>
					<IconMapPin className="h-4 w-4 text-primary" />
					<span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs">
						Asia Pacific College
					</span>
				</div>

				{/* Headline */}
				<h1 className="mb-4 max-w-3xl text-balance text-center text-3xl font-bold leading-[1.1] sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
					Arduino Day{" "}
					<span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
						Philippines
					</span>{" "}
					2026
				</h1>

				{/* Subtitle */}
				<p className="mb-8 max-w-xl text-center text-sm leading-relaxed text-white/60 sm:mb-10 sm:text-base md:max-w-2xl md:text-lg">
					A day of talks, demos, and community-led sessions for builders,
					creators, and tinkerers. Join us and help shape what comes next.
				</p>

				{/* CTA buttons */}
				<div className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:mb-16 sm:gap-4">
					<Link href="#partners">
						<Button className="px-6 py-3 text-sm sm:px-8 sm:py-3.5 lg:px-10 lg:py-4">
							Partner With Us
						</Button>
					</Link>
					<Link href="#merch">
						<Button className="border-secondary bg-secondary/10 px-6 py-3 text-sm text-secondary hover:bg-secondary/20 sm:px-8 sm:py-3.5 lg:px-10 lg:py-4">
							Shop Merch for a Cause
						</Button>
					</Link>
					<Link
						href="#faqs"
						className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white/80 transition-all hover:border-white/30 hover:text-white sm:px-6 sm:py-3.5 sm:text-sm"
					>
						View FAQs
					</Link>
				</div>

				{/* Highlight cards row */}
				<div className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
					{/* Venue card */}
					<Link href="#about" className="group">
						<div className="flex h-full flex-col gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/[0.03] sm:p-5">
							<div className="flex items-center gap-3">
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
									<IconMapPin className="h-[18px] w-[18px] text-primary" />
								</div>
								<p className="text-sm font-semibold sm:text-base">New Venue</p>
							</div>
							<p className="text-xs leading-relaxed text-white/45 sm:text-sm">
								Asia Pacific College, Makati. Location confirmed for 2026.
							</p>
							<div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
								<span>See details</span>
								<IconArrowRight className="h-3.5 w-3.5" />
							</div>
						</div>
					</Link>

					{/* Sponsors & Partners card */}
					<Link href="#partners" className="group">
						<div className="flex h-full flex-col gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-secondary/30 hover:bg-secondary/[0.03] sm:p-5">
							<div className="flex items-center gap-3">
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 transition-colors group-hover:bg-secondary/15">
									<IconHeartHandshake className="h-[18px] w-[18px] text-secondary" />
								</div>
								<p className="text-sm font-semibold sm:text-base">Partner With Us</p>
							</div>
							<p className="text-xs leading-relaxed text-white/45 sm:text-sm">
								Calling sponsors and community partners. Help make this event bigger.
							</p>
							<div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
								<span>Learn more</span>
								<IconArrowRight className="h-3.5 w-3.5" />
							</div>
						</div>
					</Link>

					{/* Merch for a Cause card - highlighted */}
					<Link href="#merch" className="group">
						<div className="relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-secondary/25 bg-gradient-to-br from-secondary/[0.06] to-secondary/[0.02] p-4 backdrop-blur-sm transition-all hover:border-secondary/50 hover:from-secondary/[0.1] hover:to-secondary/[0.04] sm:p-5">
							{/* Glow accent */}
							<div
								className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-secondary/15 blur-2xl transition-all group-hover:bg-secondary/25"
								aria-hidden
							/>
							<div className="relative flex items-center gap-3">
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/15 transition-colors group-hover:bg-secondary/20">
									<IconShirt className="h-[18px] w-[18px] text-secondary" />
								</div>
								<div className="flex items-center gap-2">
									<p className="text-sm font-semibold text-secondary sm:text-base">
										Merch for a Cause
									</p>
									<span className="rounded-full bg-secondary/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-secondary sm:text-[10px]">
										New
									</span>
								</div>
							</div>
							<p className="relative text-xs leading-relaxed text-white/45 sm:text-sm">
								Every purchase funds the event. Grab yours and support the community.
							</p>
							<div className="relative mt-auto flex items-center gap-1.5 text-xs font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
								<span>Shop merch</span>
								<IconArrowRight className="h-3.5 w-3.5" />
							</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};
