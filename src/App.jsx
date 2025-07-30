import { useState } from "react";
import { supabase } from "../supabaseClient"; 


function App() {
const [session, setSession] = useState(supabase.auth.session());

  return (
    <div className="w-full flex h-screen justify-center items-center p-4">
      <div className="border-[1px] border-gray-700 max-w-6xl w-full min-h-[600px] rounded-lg">
        {/* Header */}
        <div className="flex justify-between h-20 border-b-[1px] border-gray-700">
          <div className="p-4">
            <p className="text-gray-300">
              Signed in as {session?.user?.user_metadata?.email}
            </p>
            <p className="text-gray-300 italic text-sm">
              {usersOnline.length} users online
            </p>
          </div>
          <button onClick={signOut} className="m-2 sm:mr-4">
            Sign out
          </button>
        </div>
        {/* main chat */}
        <div
          ref={chatContainerRef}
          className="p-4 flex flex-col overflow-y-auto h-[500px]"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`my-2 flex w-full items-start ${msg?.user_name === session?.user?.email
                  ? "justify-end"
                  : "justify-start"
                }`}
            >
              {/* received message - avatar on left */}
              {msg?.user_name !== session?.user?.email && (
                <img
                  src={msg?.avatar}
                  alt="/"
                  className="w-10 h-10 rounded-full mr-2"
                />
              )}

              <div className="flex flex-col w-full">
                <div
                  className={`p-1 max-w-[70%] rounded-xl ${msg?.user_name === session?.user?.email
                      ? "bg-gray-700 text-white ml-auto"
                      : "bg-gray-500 text-white mr-auto"
                    }`}
                >
                  <p>{msg.message}</p>
                </div>
                {/* timestamp */}
                <div
                  className={`text-xs opactiy-75 pt-1 ${msg?.user_name === session?.user?.email
                      ? "text-right mr-2"
                      : "text-left ml-2"
                    }`}
                >
                  {formatTime(msg?.timestamp)}
                </div>
              </div>

              {msg?.user_name === session?.user?.email && (
                <img
                  src={msg?.avatar}
                  alt="/"
                  className="w-10 h-10 rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>
        {/* message input */}
        <form
          onSubmit={sendMessage}
          className="flex flex-col sm:flex-row p-4 border-t-[1px] border-gray-700"
        >
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            type="text"
            placeholder="Type a message..."
            className="p-2 w-full bg-[#00000040] rounded-lg"
          />
          <button className="mt-4 sm:mt-0 sm:ml-8 text-white max-h-12">
            Send
          </button>
          <span ref={scroll}></span>
        </form>
      </div>
    </div>
  );
}
}

export default App;