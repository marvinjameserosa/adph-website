import { IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";
import Heading from "../ui/heading";
import Link from "next/link";

const CtaBanner = () => {
	return (
		<div className="relative flex flex-col items-center justify-center gap-6 px-4 py-10 sm:gap-8">
			<div className="flex flex-col items-center justify-center gap-0">
				<div className="flex gap-3 items-center justify-center sm:gap-4">
					<IconMapPin className="w-6 h-6 shrink-0 text-secondary sm:w-8 sm:h-10" />
					<h4 className="uppercase text-center text-xl sm:text-2xl md:text-[clamp(18px,2.5vw,51.99px)]">
						Asia Pacific College
					</h4>
				</div>
				<Heading
					text="March 21, 2026"
					className="text-[clamp(40px,12vw,320px)] sm:text-[clamp(56px,14vw,320px)] md:text-[clamp(72px,18vw,320px)] tracking-normal uppercase"
					glowAll
				/>
				<h2 className="text-lg px-2 italic text-center bg-clip-text text-transparent bg-gradient-cta sm:text-xl md:text-[clamp(26px,3.2vw,64px)] max-w-full">
					We are finalizing the schedule. Check back shortly or tap below to get notified when registration opens.
				</h2>
			</div>
			<Link href="https://arduinodayph.pwapilipinas.org/">
				<Button className="py-2.5 px-5 sm:py-3 sm:px-6 lg:py-6 lg:px-12 bg-none">
					<p className="text-xs font-medium sm:text-sm lg:font-bold lg:text-xl uppercase">
						Get Notified
					</p>
				</Button>
			</Link>
		</div>
	);
};

export default CtaBanner;
