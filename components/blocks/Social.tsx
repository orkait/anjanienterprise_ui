import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const style = {
    social_item: "flex justify-center items-center m-1 p-2 rounded-md cursor-pointer w-full",
};

type socialType = {
    facebook?: string;
    twitter?: string;
    instagram?: string;
}

const Social = ({ socials }: { socials: socialType }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className={style.social_item}>
                <Link
                    href={`https://twitter.com/${socials?.twitter || ''}`}
                    passHref={true}
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faTwitter as IconProp}
                        size="2x"
                    />
                </Link>
            </div>
            <div className={style.social_item}>
                <Link
                    href={`https://www.facebook.com/${socials?.facebook || ''}`}
                    passHref={true}
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faFacebook as IconProp}
                        size="2x"
                    />
                </Link>
            </div>
            <div className={style.social_item}>
                <Link
                    href={`https://www.instagram.com/${socials?.instagram || ''}`}
                    passHref={true}
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faInstagram as IconProp}
                        size="2x"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Social;
