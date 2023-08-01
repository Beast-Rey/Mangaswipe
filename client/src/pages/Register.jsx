import {Link} from 'react-router-dom'
import testimage1 from '../assets/images/anime.jpg';
import {Helmet} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../axios/MangaFinder'
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(email === '' || name === '' || password === '' || lastName === '') {
      toast.error('input cannot be empty!!')
      return
    }
    try {
      const response = await axios.post(`/user/create`, {
        email, password, lastName, name
      })
      
      if(response) {
        toast.success('Registerd Succesfully!!')
        navigate('/')
      }
    } catch (error) {
      toast.error("failed to register!!")
    }
  }
  return (
    <>
    <Helmet>
        <title>Manga Swipe - Register Page</title>
        <link rel="canonical" href="/register" />
        <meta name="description" content="website for reading latest manga" />
    </Helmet>
    <section className="page__section mb-[100px]">
      <div className="page__div">
        <div className="w-[300px] my-8">
          <h1 className="mangaHead border-[#EFC416]">
            <span className="text-2xl font-bold">Hello !</span> My Fellow Otaku
          </h1>
          <p>
            Heared you like Reading Manga. Dive in to the world of all Manga and
            Manhwa!
          </p>
        </div>
        <form className="form__style">
          <input type="text" placeholder="Name" className="form__input"  value={name} onChange={(e) => setName(e.target.value)}/>

          <input type="text" placeholder="LastName" className="form__input"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>

          <input type="text" placeholder="Email" className="form__input"  value={email} onChange={(e) => setEmail(e.target.value)}/>

          <input type="password" placeholder="Password" className="form__input"  value={password} onChange={(e) => setPassword(e.target.value)}/>


          <div className="mt-4 space-y-3 space-x-2">
            <button className="form__btn1" type='submit' onClick={handleSubmit}>
              Sign Up
            </button>
            <Link to="/login">
              <button className="form__btn2">
                Sign in ?
              </button>
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex w-[500px] bg-[#EFC416]">
        <img src={testimage1} alt="Register-page" className="opacity-[0.5] rounded-r-2xl"/>
      </div>
    </section>
    </>
  );
};

export default Register;
