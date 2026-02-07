/* eslint-disable */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const AboutUs = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
	const [model, setModel] = useState<THREE.Group | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const getInitialSize = () => {
			let width = Math.min(window.innerWidth * 0.9, 600);
			if (window.innerWidth < 640) width = window.innerWidth * 0.85;
			const height = window.innerWidth < 768 ? Math.round(width * 0.6) : Math.round(width * 0.75);
			return { width, height };
		};

		const scene = new THREE.Scene();
		const { width, height } = getInitialSize();
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		camera.position.set(0, 0.25, 3);
		cameraRef.current = camera;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(width, height);
		containerRef.current.appendChild(renderer.domElement);
		rendererRef.current = renderer;

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.enableZoom = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.8;

		const light = new THREE.AmbientLight(0xffffff, 1);
		scene.add(light);

		const loader = new GLTFLoader();
		loader.load(
			"/models/arduino.glb",
			(gltf) => {
				const loadedModel = gltf.scene;
				const scaleFactor = 0.05;
				loadedModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

				const box = new THREE.Box3().setFromObject(loadedModel);
				const center = box.getCenter(new THREE.Vector3());
				loadedModel.position.sub(center);
				loadedModel.position.y += 0.15;

				const size = box.getSize(new THREE.Vector3());
				const maxDim = Math.max(size.x, size.y, size.z);
				const fov = (camera.fov * Math.PI) / 180;
				let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
				cameraZ *= 1.6;
				camera.position.set(0, 0.2, cameraZ);
				camera.near = cameraZ / 100;
				camera.far = cameraZ * 100;
				camera.updateProjectionMatrix();
				controls.target.set(0, 0, 0);
				controls.update();

				scene.add(loadedModel);
				setModel(loadedModel);
			},
			undefined,
			(error) => console.error("Error loading GLTF:", error)
		);

		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();

		return () => {
			controls.dispose();
			renderer.dispose();
			scene.clear();
			if (containerRef.current && renderer.domElement) {
				containerRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			let width = Math.min(window.innerWidth * 0.9, 600);
			if (window.innerWidth < 640) width = window.innerWidth * 0.85;
			const height = window.innerWidth < 768 ? Math.round(width * 0.6) : Math.round(width * 0.75);

			if (rendererRef.current) {
				rendererRef.current.setSize(width, height);
			}
			if (cameraRef.current) {
				cameraRef.current.aspect = width / height;
				cameraRef.current.updateProjectionMatrix();
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="container relative flex flex-col items-center justify-center gap-4 py-6 md:gap-6 md:py-10">
			<div className="flex flex-col items-center gap-4 text-center max-w-3xl">
				<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70 backdrop-blur">
					<span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
					<span>About the day</span>
				</div>
				<h2 className="text-3xl font-semibold leading-tight md:text-4xl">
					What is <span className="text-secondary">Arduino Day Philippines?</span>
				</h2>
				<div className="flex flex-col gap-3 text-base text-white/80 md:text-lg">
					<p>
						Arduino Day is a worldwide celebration of Arduino{"'"}s birthday, bringing people together to share their builds, ideas, and open-source learnings.
					</p>
					<p>
						Alongside the official stream, local communities host talks, demos, and showcases so anyone can discover, tinker, and contribute.
					</p>
				</div>
			</div>

			{/* Artsy photo gallery */}
			<div className="mt-4 w-full max-w-4xl">
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-5 sm:grid-rows-[200px_200px] sm:gap-4">
					{/* Large feature image - spans 3 cols and 2 rows */}
					<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-auto sm:col-span-3 sm:row-span-2">
						<Image
							src="/images/about-1.jpg"
							alt="Community members collaborating with Arduino boards at a maker event"
							fill
							className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							sizes="(max-width: 640px) 100vw, 60vw"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#008080]/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
						<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-primary/30" />
						<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
							<span className="font-morganite text-2xl uppercase tracking-wider text-white/80 drop-shadow-lg sm:text-3xl">Community</span>
						</div>
					</div>

					{/* Top-right image */}
					<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-auto sm:col-span-2">
						<Image
							src="/images/about-2.jpg"
							alt="Close-up of Arduino boards, wires, and components on a workshop table"
							fill
							className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							sizes="(max-width: 640px) 100vw, 40vw"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#EE7402]/30 opacity-70 transition-opacity duration-500 group-hover:opacity-20" />
						<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-secondary/30" />
						<div className="absolute bottom-0 left-0 right-0 p-4">
							<span className="font-morganite text-2xl uppercase tracking-wider text-white/80 drop-shadow-lg">Build</span>
						</div>
					</div>

					{/* Bottom-right image */}
					<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-auto sm:col-span-2">
						<Image
							src="/images/about-3.jpg"
							alt="Speaker presenting at a tech community event with an engaged audience"
							fill
							className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							sizes="(max-width: 640px) 100vw, 40vw"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#008080]/25 via-transparent to-[#EE7402]/15 opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
						<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-white/20" />
						<div className="absolute bottom-0 left-0 right-0 p-4">
							<span className="font-morganite text-2xl uppercase tracking-wider text-white/80 drop-shadow-lg">Learn</span>
						</div>
					</div>
				</div>
			</div>

			{/* 3D Model - reduced size */}
			<div className="relative flex w-full justify-center">
				<div className="relative flex w-full max-w-2xl items-center justify-center overflow-hidden rounded-3xl px-2 py-2 md:py-3">
					<div ref={containerRef} className="relative" />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
