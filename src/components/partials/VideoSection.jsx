import React from 'react'
import {Row} from 'antd'
import ReactPlayer from 'react-player'
import Media from "react-media"

// Helpers
import Section from '../helper/Section'


export default props => {

    return(
        <Section
            name={props.name}
            padding={props.padding}
            fullWidthBG={props.fullWidthBG}
            title={props.title}
            description={props.description}
            titlePaddingBottom={props.titlePaddingBottom}
        >
            <Row type={`flex`} justify={`center`}>
                <Media query={{minWidth: 768}}>
                    {
                        matches => (
                            matches ?
                                <ReactPlayer controls url={props.videoURL} width={800} height={600} />
                                :
                                <ReactPlayer controls url={props.videoURL} width={400} height={325} />
                        )

                    }
                </Media>

            </Row>
        </Section>
    )
}