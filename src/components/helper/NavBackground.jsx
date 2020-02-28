import React from 'react';
import handleViewport from 'react-in-viewport';

const Content = props => {
    const { forwardedRef } = props;
    return (
        <div className="viewport-block" ref={forwardedRef}>
            {props.children}
        </div>
    );
};

const ViewportBlock = handleViewport(Content);

export default props => (
    <div>
        <ViewportBlock onEnterViewport={() => props.changeNavBG(props.navBG)}>
            {props.children}
        </ViewportBlock>
    </div>
)