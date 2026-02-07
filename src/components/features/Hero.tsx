"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/assets/adph-logo.png";
import { IconMapPin, IconHeartHandshake, IconShirt } from "@tabler/icons-react";

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
					<div className="flex flex-col gap-5 max-w-4xl">
						<div className="inline-flex w-fit items-center gap-3 rounded-full bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur sm:px-4 sm:py-2 sm:text-xs">
							<span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
							<span>March 21, 2026</span>
						</div>
						<h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
							Arduino Day Philippines 2026
						</h1>
						<p className="max-w-2xl text-sm text-white/70 sm:text-base md:text-lg">
							A focused day of talks, demos, and community-led sessions for builders, creators, and tinkerers. Join us and help shape what comes next.
						</p>

						{/* Highlight cards */}
						<div className="flex flex-col gap-3 sm:gap-4">
							{/* Venue highlight */}
							<Link href="#about" className="group">
								<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40 hover:bg-primary/[0.04] sm:gap-4 sm:px-5 sm:py-4">
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-10 sm:w-10">
										<IconMapPin className="h-5 w-5" />
									</div>
									<div>
										<p className="text-sm font-semibold sm:text-base">Asia Pacific College, Makati</p>
										<p className="mt-0.5 text-xs text-white/50 sm:text-sm">New venue confirmed. See location details below.</p>
									</div>
								</div>
							</Link>

							{/* Sponsors & Partners call */}
							<Link href="#partners" className="group">
								<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-secondary/40 hover:bg-secondary/[0.04] sm:gap-4 sm:px-5 sm:py-4">
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary sm:h-10 sm:w-10">
										<IconHeartHandshake className="h-5 w-5" />
									</div>
									<div>
										<p className="text-sm font-semibold sm:text-base">Call for Sponsors & Community Partners</p>
										<p className="mt-0.5 text-xs text-white/50 sm:text-sm">Help us make this event bigger. Reach out to partner with us.</p>
									</div>
								</div>
							</Link>

							{/* Merch for a Cause - highlighted */}
							<Link href="#merch" className="group">
								<div className="relative flex items-start gap-3 overflow-hidden rounded-xl border border-secondary/30 bg-secondary/[0.06] px-4 py-3 transition-colors hover:border-secondary/60 hover:bg-secondary/[0.1] sm:gap-4 sm:px-5 sm:py-4">
									<div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" aria-hidden />
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary sm:h-10 sm:w-10">
										<IconShirt className="h-5 w-5" />
									</div>
									<div className="relative">
										<div className="flex flex-wrap items-center gap-2">
											<p className="text-sm font-semibold text-secondary sm:text-base">Merch for a Cause</p>
											<span className="inline-block rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary sm:text-xs">New</span>
										</div>
										<p className="mt-0.5 text-xs text-white/50 sm:text-sm">Every purchase helps fund the event. Grab yours and support the community.</p>
									</div>
								</div>
							</Link>
						</div>

						<div className="flex flex-wrap items-center gap-3 pt-1">
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
