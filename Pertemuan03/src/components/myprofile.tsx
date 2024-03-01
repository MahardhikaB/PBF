import { getImageUrlV2 } from '@/utils/utils';

interface PersonProps {
    name: string;
    imageId: string;
}

interface AvatarProps {
    person: PersonProps;
    size: number;
}

function MyAvatar({ person, size }: AvatarProps) {
    return (
        <img
            className="avatar"
            src={getImageUrlV2(person, size < 90 ? 's' : 'b')}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function MyProfile() {
    return (
        <div>
            
            <div className="columns-2">
                <MyAvatar
                    size={40}
                    person={{ 
                        name: 'Gregorio Y. Zara', 
                        imageId: '7vQD0fP'
                    }}
                />
                <MyAvatar
                    size={100}
                    person={{ 
                        name: 'Gregorio Y. Zara', 
                        imageId: '7vQD0fP'
                    }}
                />
            </div>
        </div>
    );
}