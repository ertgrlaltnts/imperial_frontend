import Link from 'next/link';
import React from 'react';

const Tags = ({data}) => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Etiketler</h3>
                <div className="sidebar__widget-content">
                    <div className="tagcloud">
                        {data.map((item, i) =>  <div className='tag_item' key={i}>{item}</div>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tags;