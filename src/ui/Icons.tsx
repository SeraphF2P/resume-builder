import { ComponentProps, SVGProps } from "react";
import {
	BsMoonStars,
	BsSunFill,
	BsInfoCircle,
	BsUpload,
	BsTrash,
	BsArrow90DegDown,
	BsArrow90DegUp,
	BsPlusCircleDotted,
	BsHouse,
	BsShop,
	BsReceipt,
	BsWebcam,
	BsEnvelopeArrowDown,
	BsX,
	BsPeople,
	BsBag,
	BsPatchCheckFill,
	BsPatchExclamationFill,
	BsCart2,
	BsLink45Deg,
	BsPlus,
	BsChevronUp,
	BsChevronDown,
	BsAsterisk,
	BsArrowLeft,
	BsArrowRight,
	BsCheck,
	BsList,
} from "react-icons/bs";
const TextWithAsterisk = (props: ComponentProps<"div">) => {
	return (
		<div className=" relative    ">
			{props.children}
			<BsAsterisk className=" size-3 absolute -right-3 -top-0 fill-alert " />
		</div>
	);
};
export const Icon = {
	moon: BsMoonStars,
	sun: BsSunFill,
	info: BsInfoCircle,
	upload: BsUpload,
	trash: BsTrash,
	X: BsX,
	plusCircleDotted: BsPlusCircleDotted,
	home: BsHouse,
	shop: BsShop,
	receipt: BsReceipt,
	website: BsWebcam,
	envelopeArrowDown: BsEnvelopeArrowDown,
	people: BsPeople,
	bag: BsBag,
	verified: BsPatchCheckFill,
	unverifed: BsPatchExclamationFill,
	cart: BsCart2,
	link: BsLink45Deg,
	textWithAsterisk: TextWithAsterisk,
	leftArrow: BsArrowLeft,
	rightArrow: BsArrowRight,
	chevronUp: BsChevronUp,
	chevronDown: BsChevronDown,
	checked: BsCheck,
	list: BsList,
};
