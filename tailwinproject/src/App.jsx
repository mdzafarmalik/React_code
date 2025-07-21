import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <>
        <h1 className="bg-green-900 text-3xl text-blue-400 rounded-3xl p-4">
          Bestfriend list
        </h1>
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-amber-100">
          <img
            class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FQ6ppkNYDUypzIJ9j437KTHxeSUV8LWfUg&s"
            alt=""
          />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">INSHA HAQIQUE</p>
              <p class="font-medium text-gray-500">Docter</p>
              <p class="font-medium text-green-500">
                "Ye meri dost hai — NEET crack karke doctor banne ka irada
                rakhti hai... matlab patients ka ilaaj karegi, lekin chocolate
                khud se share karne ka koi ilaaj nahi milega! 😜 Thodi kanjoos
                hai, matlab agar ambulance bhi mangwani ho toh bolegi 'auto le
                lo yaar, sasta padega' 😆 Lekin dil ki badi hi achi hai — bas
                logo ko priority queue me rakhti hai jaise hospital ki OPD ho 😎
                Doctor banegi toh stethoscope se kam, sarcasm se zyada ilaaj
                karegi 😂 Future MBBS — Matlabi friend ko Bhi Sambhalti! Proud
                of this future doc!(insha haqique)" 🩺💉
              </p>
            </div>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
              Message
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-amber-200">
          <img
            class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="https://www.vhv.rs/dpng/d/583-5831214_cartoon-avatar-png-download-image-gaming-logo-avatar.png"
            alt=""
          />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">MD AYAN SAQUIB</p>
              <p class="font-medium text-gray-500">Cyber Security Engineer</p>
              <p class="font-medium text-black">
                "Ye mera dost hai — muh se bole toh bad banta hai, par andar se
                confidence ka low battery alert hamesha chalu rehta hai 😆
                Ladkiyon ke chakkar mein aise ghoomta hai jaise har ladki iske
                liye hi bani ho — reality: 'bhai, unka Wi-Fi tujhse connect hi
                nahi hota! jo connect hota bhi hai woh no internet access hai'
                😜 Phekta bhi itna hai jaise Ranveer Singh ka cousin ho — par ye
                bhool jata hai ki hum uske papa hain 😎 Sabse badi baat:
                attitude toh Everest pe hai, par asli aukaat toh ghar ka Wi-Fi
                bhi kabhi pehchaan nahi paata! 😂 Aise bole jaise NASA ka
                rejected scientist ho, aur ladkiyaan uske liye hi bani ho — bhai
                tu toh itna phekta hai ki oxygen cylinder bhi sharma jaye! 😆
                “Har baat mein aise hawa bharta hai jaise uski life pe Netflix
                series ban rahi ho — The Legend of Single Boy 😂” Lekin dosti
                mein number one —"
              </p>
            </div>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
              Message
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-amber-50">
          <img
            class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPfGVOBZ8R__giSzhy7XgKLjxL3jORAcm6Q&s"
            alt=""
          />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">MD ZAKIR HUSSAIN</p>
              <p class="font-medium text-gray-500">Web developer</p>
              <p class="font-medium text-red-500">
                **"Yeh mera dost hai... sarafat ka chola pehne nikla hai
                harfanmaula 😆 Dekh ke lage jaise kisi ne iski smile hi chheen
                li ho... Par bechara kare toh kya kare — RD rona se time mile
                toh hi toh smile kare 😂 Jaise iske liye hi ye line bani ho —
                "Babu Sona, RD Rona" 💀💔 Ironman ki movies dekh kar khud ko
                gyaan ka genius samajhta hai 😎 Par bhai, na tu Tony Stark hai,
                na Thanos aayega bolne "Gyaan ka shraap tumhe hi mila ho" 😅 Yeh
                sab ladki ka chakkar hai Babu Bhaiya! 😆 Chehre do hai, par koi
                jaan nahi sakta — sab jaanti hai duniya, tu hi nahi maanta 😏
                Abhi bhi waqt hai... sudhar jao 😂✌️"**
              </p>
            </div>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
              Message
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-amber-300">
          <img
            class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GMsJHh53JwXgj4C-IgJC2HEY48UM_NWgQg&s"
            alt=""
          />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">MD ASAD</p>
              <p class="font-medium text-gray-500">........</p>
              <p class="font-medium text-blue-500">
                **"😇 Kamina ka baap par chehra itna masoom — kaha ja raha ho
                beta? Itne masoom hokar bhi 🤨 chhichhorapan kyun karte ho? Yeh
                banda itna accha sochta hai ki samajh bhi 😱 dar gaya hai. Isko
                har madam 👩‍🏫 par crush ho jata hai — shayad isse bacche 👶
                pasand hain. Har ladki ka yah pehla aur aakhri crush hoti hai 💘
                — yeh main nahi kehta, yeh khud hi kehta hai 😎. g rahein, toh
                shaadi-shuda logon 👨‍👩‍👧‍👦 ko bhi bacche khilane ke liye ek 'premi'
                💁‍♂️ mil jayega. Aur samaj ki koi bhi ladki 💃 single nahi rahegi
                💍. Kya behtareen soch hai iski! 🤯👏".
              </p>
            </div>
            <button className="text-purple-600 border hover:border-2 border-amber-300">
              Message
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-red-400">
          <img
            class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GMsJHh53JwXgj4C-IgJC2HEY48UM_NWgQg&s"
            alt=""
          />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">
                MOHD. ABU TALIB KHAN
              </p>
              <p class="font-medium text-gray-500">........</p>
              <p class="font-medium text-green-500">ye bhi baccha hai
                hum sab baap ho ya chacha ye hi abhi baccha .
              </p>
            </div>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
              Message
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
