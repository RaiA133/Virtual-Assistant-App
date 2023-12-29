import UserLogo from '@/Assets/icon/UserLogo.svg';
import HeadsetLogo from '@/Assets/icon/HeadsetLogo.svg';
import { useEffect, useRef } from "react";

const ChatBoxMessage = () => {
  const scroll = useRef()

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <>

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={HeadsetLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">You were the Chosen One!</div>
      </div>

      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={UserLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">I hate you!</div>
      </div>

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={HeadsetLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">You were the Chosen One!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={HeadsetLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">You were the Chosen One!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={HeadsetLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">You were the Chosen One!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={HeadsetLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">You were the Chosen One!</div>
      </div>

      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={UserLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">I hate you!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={UserLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">I hate you!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={UserLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">I hate you!</div>
      </div>
      <div className="chat chat-end" ref={scroll}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-100">
            <img alt="User Logo" src={UserLogo} className='p-2' />
          </div>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">I hate you!</div>
      </div>

    </>
  );
}

export default ChatBoxMessage;