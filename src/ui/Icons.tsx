import { ComponentProps } from "react";
import {
	BsAsterisk,
	BsBag,
	BsCart2,
	BsCheck,
	BsChevronDown,
	BsChevronLeft,
	BsChevronRight,
	BsChevronUp,
	BsEnvelopeArrowDown,
	BsHouse,
	BsInfoCircle,
	BsLink45Deg,
	BsList,
	BsMoonStars,
	BsPatchCheckFill,
	BsPatchExclamationFill,
	BsPeople,
	BsPlusCircleDotted,
	BsReceipt,
	BsShop,
	BsSunFill,
	BsTrash,
	BsUpload,
	BsWebcam,
	BsX,
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
	leftArrow: BsChevronLeft,
	rightArrow: BsChevronRight,
	chevronUp: BsChevronUp,
	chevronDown: BsChevronDown,
	checked: BsCheck,
	list: BsList,
};
