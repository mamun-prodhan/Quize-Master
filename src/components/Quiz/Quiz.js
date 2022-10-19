import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'

// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ data, index }) => {
    // console.log(data);
    // console.log(index);
    const options = data.options;
    const quizIndex = index;
    const correctAnswer = data.correctAnswer;
    

    const quizHandler = (event) => {
        if (event === correctAnswer) {
            toast.success('WoW !!! Right Answer', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Wrong Answer !!!!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const eyeHandler = () =>{
        toast.success(`${correctAnswer}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }




    return (
        <div className='m-5 p-4 shadow p-3 mb-5 bg-body rounded'>
            <div className='mb-3 '>
                <h4>Quiz {index + 1}: {data.question}</h4>
                <button onClick={()=>eyeHandler()} type="button" className="btn btn-outline-success">
                    <FontAwesomeIcon className='fs-4' icon={faEye}></FontAwesomeIcon>
                </button>
            </div>
            {
                options.map((option, index) => <Options
                    key={index}
                    index={index}
                    quizIndex={quizIndex}
                    option={option}
                    quizHandler={quizHandler}
                ></Options>)
            }
            <ToastContainer />
        </div>
    );
};

export default Quiz;