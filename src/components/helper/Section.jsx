import React from 'react';

export default props => {
    return (
        <section id={props.name} className={props.sectionClass} style={{
            background: props.fullWidthBG,
            padding: props.padding
        }}>

            {
                props.rightHalfColor &&
                <div className={`right-half-color`} style={{
                    background: props.rightHalfColor
                }}></div>
            }

            <div className={`container`}>

                {
                    (props.title || props.description) &&

                    <div className={`section-heading`} style={{
                        paddingBottom: props.titlePaddingBottom
                    }}>
                        {
                            props.title &&
                            <h2>{props.title}</h2>
                        }

                        {
                            props.description &&
                            <p>{props.description}</p>
                        }
                    </div>
                }


                <div className={props.name}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}