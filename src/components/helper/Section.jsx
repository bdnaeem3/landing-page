import React from 'react';

export default props => {
    return (
        <section id={props.name} className={props.sectionClass} style={{
            background: props.fullWidthBG,
            padding: props.padding
        }}>
            <div className={`container`}>
                <div className={props.name}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}