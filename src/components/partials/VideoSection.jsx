import React from 'react'
import {Row} from 'antd'

// Elements
import Video from '../elements/Video'

// Helpers
import Section from '../helper/Section'

// Images
import bg from '../../assets/img/bg/video.jpg'

// Video
import Movie from '../../assets/video/movie.mp4'

export default () => {
    return(
        <Section
            padding={`50px 0`}
            fullWidthBG={`url(${bg})no-repeat center/cover`}
            title={`The Best Holiday Camp Ever`}
            description={` This component should have a video , title and subtext. The background image must also be easily configurable. Use a React Video player instead of an iframe for the video player.`}
            titlePaddingBottom={40}
        >
            <Row type={`flex`} justify={`center`}>
                <Video
                    link={Movie}
                    width={800}
                    height={600}
                />
            </Row>
        </Section>
    )
}