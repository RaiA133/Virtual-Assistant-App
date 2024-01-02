import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, useForm } from '@inertiajs/react';
import ChatBoxMessage from './Dashboard/ChatBoxMessage';
import FeedbackModalForm from '@/Components/FeedbackModalForm';
import { useEffect, useState } from 'react';
import HeadsetLogo from '@/Assets/icon/HeadsetLogo.svg';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

export default function Dashboard({ auth, dbMessages }) {
  const user = usePage().props.auth.user; // get data user yang kita login kan
  const [inputText, setInputText] = useState(""); // State untuk menyimpan nilai input teks
  const [typing, setTyping] = useState(null) // state handle loading chat
  const [isMessagesSet, setIsMessagesSet] = useState(false);
  const [senderState, setSenderState] = useState("user");
  const [messages, setMessages] = useState([ // seluruh pesan di chat box
    {
      message: `Hallo ${user.name}, Saya virtual asistenmu`,
      sender: "VAssist"
    }
  ])

  useEffect(() => {
    if (!isMessagesSet) {
      const newMessages = [
        ...messages,
        ...dbMessages.map(msg => ({
          message: msg.message,
          sender: msg.sender,
        })),
      ];
      setMessages(newMessages);
      setIsMessagesSet(true);
    }
    return () => { // Clean-up function
      console.log("Clean-up function executed");
    };
  }, [dbMessages, isMessagesSet]);


  // console.log('messages', messages)

  const { data, setData, post, processing, errors, reset } = useForm({ // for input to database
    user_id: user.id,
    name: user.name,
    sender: senderState,
    message: inputText,
  });
  console.log('asd', data)
  console.log('senderState', senderState)

  const handleSend = async () => {
    const newMessage = {
      message: inputText,
      sender: "user"
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setInputText(""); // clear text di input text ketika kirim pesan
    setTyping(true); // handle true loading VAssist typing 
    await processMessageToChatGPT(newMessages); // trigger ChatGPT to response
    await saveToDb()
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "VAssist") {
        role = "assistant" // chatGPT only knew assistant/user (role)
      } else {
        role = "user"
      }
      return { role, content: messageObject.message } // chatGPT only response with role & content, jadi diubah
    })

    const systemMessage = {
      role: "system",
      content: "Berbicara seperti seorang asisten pribadi"
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages // [message1, message2, ...]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      const responseGPT = { // chatGPT data response
        message: data.choices[0].message.content,
        sender: "VAssist"
      }
      setMessages(
        [...chatMessages, responseGPT]
      )
      setTyping(false)
    })
  }

  async function saveToDb() {
    console.log("Sender State before saving to DB:", senderState); // Add this line
    post(route('message.store'));
  }  

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      {/* <div className="pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">You're logged in! {user.name}</div>
          </div>
        </div>
      </div> */}

      <div className="pt-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5 ">

            <div className='max-h-96 overflow-auto px-5'>
              <ChatBoxMessage
                messages={messages} setMessages={setMessages}
                typing={typing} setTyping={setTyping}
              />
              {typing && ( // loading hendler message
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-gray-100">
                      <img alt="User Logo" src={HeadsetLogo} className='p-2' />
                    </div>
                  </div>
                  <div className="chat-bubble bg-gray-100 text-black">
                    <div className='relative'>
                      <span className="loading absolute bottom-[-23px] left-[-1px] loading-dots loading-xs"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className='flex mt-4 gap-3 mx-5'>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value)
                  setData('message', e.target.value)
                }}
              />
              <button className={`btn btn-neutral ${typing ? "btn-disabled" : ""}`} onClick={handleSend}>
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>

      <FeedbackModalForm />

    </AuthenticatedLayout>
  );
}
