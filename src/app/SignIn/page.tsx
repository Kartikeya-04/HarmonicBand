'use client';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import '../components/App.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function Page() {
  useEffect(() => {
    const webchatScript = document.createElement('script');
    webchatScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    webchatScript.defer = true;
  
    document.body.appendChild(webchatScript);

    const configScript = document.createElement('script');
    configScript.async = true;

    configScript.src =
      'https://mediafiles.botpress.cloud/0f4d808f-f0ed-4ee3-a448-9d4b9539426f/webchat/config.js';
    configScript.defer = true;

    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(configScript);
    };
  }, []);
  const router=useRouter()
  const [first, setFirst] = useState({
    UserId: '',
    UserName: '',
    Password: '',
    Email: '',
  });
  const [visible, setVisible] = useState(false);
  const [myfeed, setmyfeed] = useState('')

  const Submission = async () => {
    try {

     
      var resp = await axios.post('/pages/regi', first);
      console.log(resp.data);

      if (resp.data.Error == 'Error in saving the Data') {
        toast.warning('Please Enter the data', {
          position: 'top-center',
        });
        return;
      }

      if (resp.data.User == 'User Already Exists !!!') {
        toast.error('User Already Exists ! Please Enter another ID !!!', {
          position: 'top-right',
        });
        return;
      }
      setVisible(true);
toast.success("User's Data Is Saved",{
  position:'top-center',
})
      // setFirst({UserId:'',UserName:'',Password:'',Email:''})
    } catch (error) {
      console.log(error);
    }
  };


  const feed_submission=async()=>{
    try {

      if(session?.user?.email){
        var resp = await axios.post('/pages/regi',{UserName:session.user.name,Email:session.user.email,Feedback:myfeed});
        console.log("response received on frontend by auth",resp.data)
      setmyfeed('')
      toast.success("Feedback is submitted ! Thank You 🎵",{
        position:'top-center',
      })
       return;
        }
      console.log('user id is',first.UserId);
      console.log('is',myfeed);
      
      const  feeds=await axios.post('/pages/regi',{Email:first.Email,Feedback:myfeed})
      console.log('my feed',feeds);
      setmyfeed('')
      toast.success("Feedback is submitted ! Thank You 🎵",{
        position:'top-center',
      })
    } catch (error) {
      console.log('error in feedback ',error);
      
    }
  }

  const { data: session } = useSession();
  console.log(session);

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst({ ...first, UserId: e.target.value });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst({ ...first, UserName: e.target.value });
  };

  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst({ ...first, Password: e.target.value });
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst({ ...first, Email: e.target.value });
  };

  const handleSignIn = async () => {
    await signIn();
  };

  const handleSignOut = async () => {
    if (session) {
      await signOut();
    }
    setVisible(false);
  };

  return (
    <div className='h-screen overflow-scroll'>
      {session || visible ? (
        // <div>
        //   <Navbar/>
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 entered relative">
               <div className='absolute left-0 top-1 m-2'>
     
     
     <button
  className="hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 text-white"
  onClick={()=>router.replace('/')}
>
  BACK
</button>

     
      </div>
          <div className="m-4 text-4xl font-bold">
            <h1>
              Signed In as{' '}
              <span className="text-blue-700 font-extrabold">
                {session?.user?.email ? session.user.name : first.UserName}
              </span>
            </h1>
          </div>
          <br />
          {/* <div className='font-extrabold text-2xl'>Now You Can Access The Songs Page To Make Your Own Lyrics !!!!</div> */}

          <div>THANK YOU FOR JOINING US 💛 !!!!</div>
          <div>FEEDBACK IS GIVEN BELOW </div>
          <div>
            
            <textarea rows={8} cols={55} className='textInput bg-blue-300' 
            onChange={(e:any) => { setmyfeed(e.target.value) }}


            />
            </div>
            <div>
            {/* <button >Submit Your Feedback</button> */}
            <button onClick={feed_submission}>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Submit FeedBack</span>
</button>


            </div>

          <div className='w-1/4 m-8'>
            {' '}
            <button className="signOut w-full text-black" onClick={handleSignOut}>
              Sign out
            </button>{' '}
          </div>

        </div>
      
      ) : (
 

        <div className="signin w-screen h-auto flex flex-col justify-center items-center gap-3 relative">
           <div className='absolute left-0 top-1 m-2'>
     
     
     <button
  className="hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 text-white"
  onClick={()=>router.replace('/')}
>
  BACK
</button>

     
      </div>
          <div className="m-4 text-7xl font-bold signinHeader">
            {' '}
            <h1>SIGN IN</h1>{' '}
          </div>
          <div>
            <label>
              <h3>User ID </h3>
            </label>
          </div>
          <div>
            <input type="number" onChange={handleNumber} required />
          </div>
          <div>
            <label>
              <h3> UserName </h3>
            </label>
          </div>
          <div>
            <input type="text" onChange={handleChangeName} required />
          </div>
          <div>
            <label>
              <h3> Password </h3>
            </label>
          </div>
          <div>
            <input type="password" onChange={handleChangePass} required />
          </div>
          <div>
            <label>
              <h3> Email </h3>
            </label>
          </div>
          <div>
            <input type="email" onChange={handleChangeEmail} required />
          </div>
          <div>
            <button
              onClick={Submission}
              className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 shadow-custom m-4 text-black"
            >
              SUBMIT
            </button>
          </div>
          <br />
          <div>
         
            <button className="bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" onClick={handleSignIn} >
              <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Sign in Using Third Party !
            </button>
          </div>
          <br />
        </div>
  
      )}
    </div>
  );
}

export default Page;
