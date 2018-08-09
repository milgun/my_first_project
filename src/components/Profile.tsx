import * as React from 'react';

interface Iprops {
    name: string;
    job: string;
}

export const Profile : React.SFC<Iprops> = ({name, job}) => (
        <div>
        <h1>프로파일</h1>
            <div>
                <b>이름 : </b>
                {name}
            </div>
            <div>
                <b>직업 : </b>
                {job}
            </div>
        </div>
);