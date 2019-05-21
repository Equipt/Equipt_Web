import React, { useState } from "react";

// Pusher Setup
window.Pusher.logToConsole = true;

const pusher = new window.Pusher(process.env.REACT_APP_PUSHER_KEY, {
    cluster: 'us3',
    forceTLS: true
});

const channel = pusher.subscribe(process.env.REACT_APP_PUSHER_CHANNEL);

const PusherContext = React.createContext({ channel });

export const PusherProvider = PusherContext.Provider;

export const PusherConsumer = props => (
    <PusherContext.Consumer>
    { channel => {
        
        const [ messages, setMessages ] = useState([]); 

        channel.bind(props.listenToEvent, message => setMessages([ ...messages, message ]));

        const children = React.Children.map(props.children, (child, index) =>
            React.cloneElement(child, { pusher: { messages } } ));

        return children;
    }}
    </PusherContext.Consumer>
)

