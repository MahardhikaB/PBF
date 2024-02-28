import Image from "next/image";

export default function Profile() {
    return (
    <Image
    src="https://imgur.com/8nLFCVP.png"
    alt="Katherine Johnson"
    width={100}
    height={100}
    style={{
        maxWidth: "100%",
        height: "auto",
        margin: "13px",
    }}
    />
);
}
