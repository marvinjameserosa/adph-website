import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="mt-12 border-t border-white/10 sm:mt-16 md:mt-20">
			<div className="container">
				<div className="flex flex-col gap-8 border-b border-gray-800 py-6 md:flex-row md:justify-between md:gap-12">
				<div className="mb-0">
					<div className="flex gap-3 items-center text-nowrap mb-4 sm:gap-4">
						<span>
							<Image
								src="/assets/logo.png"
								alt="arduino day philippines logo"
								width={50}
								height={50}
								className="block w-auto h-10 object-cover"
							/>
						</span>
						<p className="font-semibold">Arduino Day Philippines</p>
					</div>
					<p className="max-w-[40ch] text-sm text-gray-400 sm:text-base">
						Empowering ideas, building innovations, and bringing projects to
						life!
					</p>
					<div className="flex gap-4 mt-4 mb-4">
						<a
							href="https://www.facebook.com/arduinodayph"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
						>
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="18.3707"
									cy="18.3609"
									r="18.3707"
									fill="#D9D9D9"
									className="hover:fill-primary duration-300"
								/>
								<path
									d="M19.3746 19.808V26.1415H16.4653V19.808H14.0482V17.2399H16.4653V16.3055C16.4653 12.8367 17.9144 11.0127 20.9804 11.0127C21.9204 11.0127 22.1553 11.1638 22.6701 11.2868V13.827C22.0938 13.7263 21.9315 13.6703 21.3329 13.6703C20.6223 13.6703 20.2419 13.8717 19.895 14.269C19.5481 14.6662 19.3746 15.3544 19.3746 16.3391V17.2455H22.6701L21.7861 19.8136H19.3746V19.808Z"
									fill="#131118"
								/>
							</svg>
						</a>
						<a
							href="https://www.instagram.com/arduinodayph"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="18.3707"
									cy="18.3609"
									r="18.3707"
									fill="#D9D9D9"
									className="hover:fill-primary duration-300"
								/>
								<path
									d="M22.5 11H14.5C12.567 11 11 12.567 11 14.5V22.5C11 24.433 12.567 26 14.5 26H22.5C24.433 26 26 24.433 26 22.5V14.5C26 12.567 24.433 11 22.5 11ZM24.25 22.5C24.25 23.467 23.467 24.25 22.5 24.25H14.5C13.533 24.25 12.75 23.467 12.75 22.5V14.5C12.75 13.533 13.533 12.75 14.5 12.75H22.5C23.467 12.75 24.25 13.533 24.25 14.5V22.5Z"
									fill="#131118"
								/>
								<path
									d="M18.5 14.75C16.429 14.75 14.75 16.429 14.75 18.5C14.75 20.571 16.429 22.25 18.5 22.25C20.571 22.25 22.25 20.571 22.25 18.5C22.25 16.429 20.571 14.75 18.5 14.75ZM18.5 20.5C17.395 20.5 16.5 19.605 16.5 18.5C16.5 17.395 17.395 16.5 18.5 16.5C19.605 16.5 20.5 17.395 20.5 18.5C20.5 19.605 19.605 20.5 18.5 20.5Z"
									fill="#131118"
								/>
								<circle cx="22.5" cy="14.5" r="0.75" fill="#131118" />
							</svg>
						</a>
						<a
							href="https://www.tiktok.com/@arduinodayph"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TikTok"
						>
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="18.3707"
									cy="18.3609"
									r="18.3707"
									fill="#D9D9D9"
									className="hover:fill-primary duration-300"
								/>
								<path
									d="M21.5237 11.5892L21.1587 11.0137H18.9499V16.197L18.9424 21.26C18.9461 21.2976 18.9499 21.339 18.9499 21.3766C18.9499 22.6443 17.9188 23.6787 16.647 23.6787C15.3751 23.6787 14.344 22.648 14.344 21.3766C14.344 20.109 15.3751 19.0746 16.647 19.0746C16.9104 19.0746 17.1662 19.1235 17.4033 19.2062V16.6785C17.1587 16.6371 16.9066 16.6146 16.647 16.6146C14.0242 16.6183 11.8868 18.7549 11.8868 21.3804C11.8868 24.0059 14.0242 26.1425 16.6507 26.1425C19.2773 26.1425 21.4146 24.0059 21.4146 21.3804V15.3582C22.3666 16.3099 23.5971 17.239 24.9593 17.5361V14.952C23.4805 14.2975 22.0092 12.3641 21.5237 11.5892Z"
									fill="#131118"
								/>
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/company/arduinodayph"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="18.3707"
									cy="18.3609"
									r="18.3707"
									fill="#D9D9D9"
									className="hover:fill-primary duration-300"
								/>
								<path
									d="M14.2224 15.9883H11.0611V26.0693H14.2224V15.9883Z"
									fill="#131118"
								/>
								<path
									d="M22.7739 15.77C22.6574 15.7555 22.5335 15.7482 22.4097 15.7409C20.6397 15.6681 19.6418 16.717 19.2922 17.1686C19.1975 17.2924 19.1538 17.3652 19.1538 17.3652V16.0177H16.1309V26.0987H19.1538H19.2922C19.2922 25.0717 19.2922 24.0519 19.2922 23.0249C19.2922 22.4713 19.2922 21.9177 19.2922 21.3641C19.2922 20.6795 19.2412 19.9511 19.5835 19.3246C19.8749 18.8002 20.3993 18.538 20.9893 18.538C22.7375 18.538 22.7739 20.1186 22.7739 20.2643C22.7739 20.2715 22.7739 20.2788 22.7739 20.2788V26.1424H25.9352V19.565C25.9352 17.3143 24.7916 15.9886 22.7739 15.77Z"
									fill="#131118"
								/>
								<path
									d="M12.6418 14.6838C13.6556 14.6838 14.4774 13.862 14.4774 12.8483C14.4774 11.8345 13.6556 11.0127 12.6418 11.0127C11.6281 11.0127 10.8063 11.8345 10.8063 12.8483C10.8063 13.862 11.6281 14.6838 12.6418 14.6838Z"
									fill="#131118"
								/>
							</svg>
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="18.5"
									cy="18.5"
									r="18.3707"
									fill="#D9D9D9"
									className="hover:fill-primary duration-300"
								/>
								<path
									d="M18.5 13.38C20.1575 13.38 20.3525 13.3875 21.0087 13.4175C21.6162 13.445 21.9437 13.5475 22.1637 13.6325C22.4537 13.745 22.6637 13.88 22.8837 14.1C23.1037 14.32 23.2387 14.53 23.3512 14.82C23.4362 15.04 23.5387 15.3675 23.5662 15.975C23.5962 16.6313 23.6037 16.8263 23.6037 18.4838C23.6037 20.1413 23.5962 20.3363 23.5662 20.9925C23.5387 21.6 23.4362 21.9275 23.3512 22.1475C23.2387 22.4375 23.1037 22.6475 22.8837 22.8675C22.6637 23.0875 22.4537 23.2225 22.1637 23.335C21.9437 23.42 21.6162 23.5225 21.0087 23.55C20.3525 23.58 20.1575 23.5875 18.5 23.5875C16.8425 23.5875 16.6475 23.58 15.9913 23.55C15.3838 23.5225 15.0563 23.42 14.8363 23.335C14.5463 23.2225 14.3363 23.0875 14.1163 22.8675C13.8963 22.6475 13.7613 22.4375 13.6488 22.1475C13.5638 21.9275 13.4613 21.6 13.4338 20.9925C13.4038 20.3363 13.3963 20.1413 13.3963 18.4838C13.3963 16.8263 13.4038 16.6313 13.4338 15.975C13.4613 15.3675 13.5638 15.04 13.6488 14.82C13.7613 14.53 13.8963 14.32 14.1163 14.1C14.3363 13.88 14.5463 13.745 14.8363 13.6325C15.0563 13.5475 15.3838 13.445 15.9913 13.4175C16.6475 13.3875 16.8425 13.38 18.5 13.38ZM18.5 11.9375C16.815 11.9375 16.605 11.945 15.9413 11.975C15.2788 12.005 14.8225 12.1125 14.4225 12.27C14.0088 12.4325 13.6575 12.6488 13.3088 12.9988C12.9588 13.3475 12.7425 13.6988 12.58 14.1113C12.4225 14.5125 12.315 14.9675 12.285 15.63C12.255 16.295 12.2475 16.505 12.2475 18.19C12.2475 19.875 12.255 20.085 12.285 20.7488C12.315 21.4113 12.4225 21.8675 12.58 22.2675C12.7425 22.6813 12.9588 23.0325 13.3088 23.3813C13.6575 23.7313 14.0088 23.9475 14.4213 24.11C14.8225 24.2675 15.2775 24.375 15.94 24.405C16.6038 24.435 16.8138 24.4425 18.4988 24.4425C20.1838 24.4425 20.3938 24.435 21.0575 24.405C21.72 24.375 22.1763 24.2675 22.5763 24.11C22.9888 23.9475 23.34 23.7313 23.6888 23.3813C24.0388 23.0325 24.255 22.6813 24.4175 22.2688C24.575 21.8675 24.6825 21.4125 24.7125 20.75C24.7425 20.0863 24.75 19.8763 24.75 18.1913C24.75 16.5063 24.7425 16.2963 24.7125 15.6325C24.6825 14.97 24.575 14.5138 24.4175 14.1138C24.26 13.6988 24.0438 13.3475 23.6938 12.9988C23.345 12.6488 22.9938 12.4325 22.5813 12.27C22.18 12.1125 21.725 12.005 21.0625 11.975C20.3975 11.945 20.1875 11.9375 18.5025 11.9375H18.5Z"
									fill="#131118"
								/>
								<path
									d="M18.5 15.2725C16.7225 15.2725 15.2825 16.7125 15.2825 18.49C15.2825 20.2675 16.7225 21.7075 18.5 21.7075C20.2775 21.7075 21.7175 20.2675 21.7175 18.49C21.7175 16.7125 20.2775 15.2725 18.5 15.2725ZM18.5 20.27C17.5175 20.27 16.72 19.4725 16.72 18.49C16.72 17.5075 17.5175 16.71 18.5 16.71C19.4825 16.71 20.28 17.5075 20.28 18.49C20.28 19.4725 19.4825 20.27 18.5 20.27Z"
									fill="#131118"
								/>
								<path
									d="M21.8738 15.1125C21.8738 15.6425 21.4438 16.0725 20.9138 16.0725C20.3838 16.0725 19.9538 15.6425 19.9538 15.1125C19.9538 14.5825 20.3838 14.1525 20.9138 14.1525C21.4438 14.1525 21.8738 14.5825 21.8738 15.1125Z"
									fill="#131118"
								/>
							</svg>
						</a>
						<a
							href="mailto:contact@arduinodayphilippines.com"
						>
							<svg
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="18.5"
									cy="18.5"
									r="18.3707"
									fill="#D9D9D9"
									className="hover:fill-primary duration-300"
								/>
								<path
									d="M25.5 13.5H11.5C10.95 13.5 10.505 13.95 10.505 14.5L10.5 22.5C10.5 23.05 10.95 23.5 11.5 23.5H25.5C26.05 23.5 26.5 23.05 26.5 22.5V14.5C26.5 13.95 26.05 13.5 25.5 13.5ZM25.5 15.5L18.5 19.75L11.5 15.5V14.5L18.5 18.75L25.5 14.5V15.5Z"
									fill="#131118"
								/>
							</svg>
						</a>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8 sm:gap-10 md:gap-20">
					<div>
						<p className="font-semibold mb-2">Navigate</p>
						<ul className="text-gray-400 space-y-1">
							<li>
								<a href="#about" className="hover:text-primary duration-300">
									About
								</a>
							</li>
							<li>
								<a href="#speakers" className="hover:text-primary duration-300">
									Speakers
								</a>
							</li>
							<li>
								<a href="#agenda" className="hover:text-primary duration-300">
									Agenda
								</a>
							</li>
							<li>
								<a href="#faq" className="hover:text-primary duration-300">
									FAQs
								</a>
							</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold mb-2">Get Involved</p>
						<ul className="text-gray-400 space-y-1">
							<li>
								<a href="mailto:arduinodayph@gmail.com" className="hover:text-primary duration-300">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#partners" className="hover:text-primary duration-300">
									Partners
								</a>
							</li>
						</ul>
					</div>
				</div>
				</div>
				<div className="flex justify-center items-center text-xs text-center py-6 text-gray-400 sm:text-sm sm:py-8 md:text-base">
					<p>© 2026 Arduino Day Philippines. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
