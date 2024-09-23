import ChatBarMessage from './ChatBarMessage'
import ChatBarChatBox from './ChatBarChatBox'

interface ChatBarProps {
    show: boolean
}

const ChatBar = ({ show = true }: ChatBarProps) => {
    return (
        <div className={`shrink-0 fixed transition-width duration-300 w-[17.36vw] max-w-[380px] bg-[#070123] h-[90vh] flex flex-col text-white ${!show && 'translate-x-full'}`}>
            <p
                style={{ fontSize: 'clamp(1px, 0.97vw , 18.68px)' }}
                className='pl-[9.80%] mb-[3.92%] pt-[3.92%]'
            >
                Chat
            </p>
            <div
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    overflowY: 'scroll',
                    overflowX: 'visible',
                }}
                className='px-[4%]'
            >
                {Array.from({ length: 21 }).map((_, index) => (
                    <div className={`w-full aspect-[115/33] ${index != 20 && 'mb-[2.17%]'}`} key={index}>
                        <ChatBarMessage key={index} />
                    </div>
                ))}
            </div>
            <ChatBarChatBox />
        </div >
    )
}

export default ChatBar