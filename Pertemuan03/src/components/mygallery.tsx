import { getImageUrl } from "@/utils/utils";

interface ProfileProps {
    name: string;
    imageId: string;
    profession: string;
    awards: string;
    discovery: string;
}

function MyProfile(props: ProfileProps) {
    return (
        <section className="profile">
        <h2>{props.name}</h2>
        <img
            className="avatar"
            src={getImageUrl(props.imageId)}
            alt={props.name}
            width={70}
            height={70}
        />
        <ul>
            <li>
                <b>Profesi: </b>
                {props.profession}
            </li>
            <li>
                <b>Penghargaan: </b>
                {props.awards}
            </li>
            <li>
                <b>Telah Menemukan: </b>
                {props.discovery}
            </li>
        </ul>
        </section>
    );
}

export default function MyGallery() {
    return (
    <div>
        <h1 className="font-semibold from-neutral-100 truncate pr-20 text-center">
        Ilmuwan yang luar biasa
        </h1>
        <hr />
        <div className="columns-2">
        <MyProfile
            name="Maria Skłodowska-Curie"
            imageId="szV5sdG"
            profession="Fisikawan dan kimiawan"
            awards="(Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci)"
            discovery="polonium (unsur kimia)"
        />
        <MyProfile
            name="Katsuko Saruhashi"
            imageId="YfeOqp2"
            profession="Ahli Geokimia"
            awards="(Penghargaan Miyake Geokimia, Penghargaan Tanaka)"
            discovery="sebuah metode untuk mengukur karbon dioksida pada air laut"
        />
        </div>
    </div>
    );
}
