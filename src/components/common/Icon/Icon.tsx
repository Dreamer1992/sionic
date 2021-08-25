import React, {FC} from 'react';

interface OwnPropsType {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    url?: string;
}

const Icon: FC<OwnPropsType> = ({Icon, url}) => {
    return (
        <div>
            {url ? (
                <a href={url} target="_blank" rel="noreferrer">
                    <Icon/>
                </a>
            ) : (
                <Icon/>
            )}

        </div>
    )
}

export default Icon;