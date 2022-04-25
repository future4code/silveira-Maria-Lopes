import { useCookies } from 'react-cookie'

const ChatHeader = () => {

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src=""/>
                </div>

                <h3>UserName</h3>
            </div>
            <i className="log-out-icon" onClick={[]}>⇦</i>
        </div>
    )
}

export default ChatHeader;