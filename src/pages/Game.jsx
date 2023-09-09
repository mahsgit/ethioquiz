// import "./cart.css";
import { useEffect, useState,useMemo } from 'react';
// import '../App.css';
import './quiz.css';
import Login from '../components/quiz/Login';
import Question from '../components/quiz/Question';
import Timer from '../components/quiz/Timer';

const Game = () => {
  const [user,setUser]=useState(null);
  const[timeOut,setTimeOut]=useState(false);
  const[questionNumber,setQuestionNumber]=useState(1);
  const [displaylevel,setDisplayLevel]=useState("1");
  const [completed, setCompleted] = useState(false);

 const data=[
{
  id:1,
  question:"what is the capital city of ethiopia",
  answers:[
    { choice :"Harare",
      correct:false,
    },
    { choice :"Addis Ababa",
      correct:true,
    },
    { choice :"sudan",
      correct:false,
    },
    { choice :"none",
      correct:false,
    },
  ],
},
{
  id:2,
  question:"Which is the highest point in Ethiopia",
  answers:[
    { choice :"Mount Apo",
      correct:false,
    },
    { choice :"Mount Tahan ",
      correct:false,
    },
    { choice :"Mount Ras Dejen",
      correct:true,
    },
    { choice :"Mount yerer",
      correct:false,
    },
  ],
},
{
  id:3,
  question:"What was the first major kingdom in Ethiopia?",
  answers:[
    { choice :"Axum",
      correct:false,
    },
    { choice :"D'mt",
      correct:true,
    },
    { choice :"The Kingdom of Ethiopia",
      correct:false,
    },
    { choice :"The Federal Democratic Republic of Ethiopia",
      correct:false,
    },
  ],
},
{
  id:4,
  question:"Which of the following is an Ethiopian national park particularly known for the large number of animals that are endemic to the area?",
  answers:[
    { choice :"Bale Mountains National Park",
      correct:true,
    },
    { choice :"Mountain Zebra National Park",
      correct:true,
    },
    { choice :"Golden Gate Highlands National Park",
      correct:false,
    },
    { choice :"Table Mountain National Park ",
      correct:false,
    },
  ],
},
{
  id:5,
  question:"How are Ethiopian Jews Known",
  answers:[
    { choice :"Jews",
      correct:false,
    },
    { choice :"Ashkenzi",
      correct:false,
    },
    { choice :"Falasha",
      correct:true,
    },
    { choice :"Baghdadi",
      correct:false,
    },
  ],
},
{
  id:6,
  question:"How many languages are in Ethiopia",
  answers:[
    { choice :"83",
      correct:true,
    },
    { choice :"72",
      correct:false,
    },
    { choice :"12",
      correct:false,
    },
    { choice :"25",
      correct:false,
    },
  ],
},

 ];
 const levelUp=useMemo(()=>[

  {id:1,
   level:" Level 1"
  },
  {id:2,
    level:"Level 2"
   },
   {id:3,
    level:"Level 3"
   },
    {id:4,
    level:"Level 4"
   },
   {id:5,
    level:"Level 5"
   },
   {id:6,
    level:"Level 6"
   },

 ].reverse(),
 []
 );
 useEffect(()=>{
  questionNumber>1&& setDisplayLevel(levelUp.find((l)=>l.id===questionNumber-1).level);

 },[questionNumber,levelUp]);










  return (
    
    <div className="app">
      {!user ? (<Login setUser={setUser} /> ) 
           : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">game over on : {displaylevel}</h1>
            ) :
             (
              <>

                <div className="top">
                  <div className="timer">
                  
                    <Timer
                      setTimeOut={setTimeOut}

                      questionNumber={questionNumber}/>
                  </div>
                </div>
                <div className="bottom">
                  <Question
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}


                  />
                </div>
              </>
            )}
          </div>

        
          <div className="pyramid">
            <ul className="level">
              {levelUp.map((l) => (
                <li
                  className={
                    questionNumber === l.id
                      ? "levelItem active"
                      : "levelItem"
                  }
                >
                  <span className="LevelListItemNumber">{l.id}</span>
                  <span className="LevelListItemAmount">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>




        </>
      )}
    </div>
  );
}

export default Game
