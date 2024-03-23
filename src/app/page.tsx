"use client"

import {useState, useEffect, useRef, MutableRefObject} from "react"
import "./style.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link"
import Image from "next/image";
import {db} from './firebase';
import { collection, addDoc } from "firebase/firestore";
import 'react-notifications/lib/notifications.css';
// @ts-ignore
import {NotificationContainer, NotificationManager} from "react-notifications";


const Nav = () =>{
    // useEffect(() => {
    //     if (typeof window) {
    //         // Client-side-only code
    //     window.addEventListener("scroll",
    //         () => {
    //
    //             let links = document.getElementsByTagName("a")
    //             if (window.scrollY >= 150) {
    //                 Array.from(document.getElementsByClassName("nav") as HTMLCollectionOf<HTMLElement>)[0].style.backgroundColor = "white";
    //                 Array.from(document.getElementsByClassName("nav")as HTMLCollectionOf<HTMLElement>)[0].style.position = "sticky";
    //                 Array.from(document.getElementsByClassName("nav")as HTMLCollectionOf<HTMLElement>)[0].style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    //
    //                 for (let i = 0; i < links.length; i++) {
    //                     links[i].style.color = "#2b2350";
    //                 }
    //             } else {
    //
    //                 Array.from(document.getElementsByClassName("nav")as HTMLCollectionOf<HTMLElement>)[0].style.position = "absolute";
    //                 Array.from(document.getElementsByClassName("nav")as HTMLCollectionOf<HTMLElement>)[0].style.backgroundColor = "transparent";
    //                 Array.from(document.getElementsByClassName("nav")as HTMLCollectionOf<HTMLElement>)[0].style.boxShadow = "none";
    //                 for (let i = 0; i < links.length; i++) {
    //                     links[i].style.color = "white";
    //                 }
    //             }
    //         });}
    //
    // }, []);

    const slider : MutableRefObject<HTMLDivElement | null> =  useRef(null);
    slider.current?.classList.remove("active");
    return(
        <>
            <nav className="nav">
                <div className="title"><label className="logo">Rately</label></div>
                <div className="nav-links">
                    <ul>
                        <li><Link href="#about">About</Link> </li>
                        <li><Link href="#features">Features</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="toggle">
                    <span onClick={() => slider.current?.classList.add("active")}>
                        <RxHamburgerMenu/>
                    </span>

                </div>
            </nav>

            <div className="slider" ref={slider}>
                <div className="header">
                   <span onClick={() => slider.current?.classList.remove("active")}>
                        <IoMdClose/>
                    </span>
                </div>
                <div className="slider-links">
                    <ul>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#features">Features</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const Hero = () => {

    const [users, setUsers] = useState("")
    const addUser = async () => {


        try {
            const docRef = await addDoc(collection(db, "Users"), {
                email: users,

            });
            console.log("success");
            NotificationManager.success('Success', 'Registered');
            setUsers("")

        } catch (e) {
            console.error("Error adding user: ", e);
        }
    }

    return (
        <section className="hero-section">
            <div className="hero">

                <div className="content">
                    <h1>Elevate your brand with trusted reviews</h1>
                    <p>Harness the power of customer feedback to propel your business forward</p>
                    <div className="input-container">
                        <input value={users} onChange={(e) => setUsers(e.target.value)} placeholder="Your E-mail" type="text"/>
                        <div className="btn" onClick={() => addUser()}>Register</div>
                    </div>
                </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#8727a1" fill-opacity="1"
                      d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,186.7C560,192,640,160,720,138.7C800,117,880,107,960,133.3C1040,160,1120,224,1200,224C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
        </section>
    )
}

const About = () => {
    return (
        <section id="about">
            <div className="about">
                <div className="header">
                    <p>about</p>
                    <h1>About Us</h1>
                </div>
                <div className="body">
                    <p>At Rately, we understand the pivotal role that customer feedback plays in shaping the success of businesses. Founded with a vision to empower companies to harness the power of authentic reviews, we are committed to helping businesses of all sizes build trust, credibility, and loyalty among their customers.</p>
                    <p>Driven by a passion for innovation and excellence, our team combines expertise in technology and marketing to create a seamless review platform that simplifies the process of gathering, managing, and showcasing customer feedback. We believe that every review tells a story and that by amplifying the voices of satisfied customers, businesses can establish stronger connections and drive sustainable growth.</p>
                    <p>With a focus on transparency and integrity, we are dedicated to providing our clients with the tools and insights they need to thrive in today&apos;s competitive marketplace. Whether you&apos;re a small startup or a global enterprise, we are here to support you on your journey to success.</p>
                    <p>Join us in revolutionizing the way businesses collect and utilize reviews. Together, let&apos;s build a future where trust and authenticity are at the heart of every customer interaction.</p>

                </div>

            </div>

        </section>
    )
}

const Features = () => {
    return (
        <section className="features-section" id="features">
            <div className="features">
                <div className="header">
                    <p>features</p>
                    <h1>What we offer</h1>
                </div>
                <div className="body">
                    <div className="card">
                        <Image src="/assets/chart.png" width={60} height={60} alt="chart_img"/>
                        <h3>Insightful Analytics</h3>
                        <p>Gain valuable insights into customer sentiment, preferences, and trends through our robust
                            analytics dashboard, enabling you to make informed business decisions.</p>
                    </div>
                    <div className="card">
                        <Image src="/assets/review.jpeg" width={60} height={60} alt="chart_img"/>
                        <h3>Review Moderation</h3>
                        <p>Maintain control over your brand&apos;s reputation with our advanced review moderation tools,
                            allowing you to filter and manage feedback effectively.</p>
                    </div>
                    <div className="card">
                        <Image src="/assets/mobile.png" width={60} height={60} alt="chart_img"/>
                        <h3>Mobile Accessibility</h3>
                        <p>Access our platform anytime, anywhere, with our mobile-responsive design, ensuring that you
                            can manage your reviews on the go.</p>
                    </div>
                    <div className="card">
                        <Image src="/assets/colors1.png" width={60} height={60} alt="chart_img"/>
                        <h3>Customizable Template</h3>
                        <p> Tailor your review requests with customizable templates that reflect your brand&apos;s voice and personality, ensuring consistency across all communications.</p>
                    </div>
                    <div className="card">
                        <Image src="/assets/bot.png" width={60} height={60} alt="chart_img"/>
                        <h3>Powerful AI</h3>
                        <p>Gain access to our powerful AI tool which will help you by summarizing and generalizing your customer&apos;s feedback </p>
                    </div>
                    <div className="card">
                        <Image src="/assets/support.png" width={60} height={60} alt="chart_img"/>
                        <h3>Dedicated Support</h3>
                        <p>Receive personalized support from our dedicated team of experts who are committed to helping you maximize the value of our platform and achieve your business goals.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


const Banner = () => {
    const [users, setUsers] = useState("")
    const addUser = async () => {


        try {
            const docRef = await addDoc(collection(db, "Users"), {
                email: users,

            });
            console.log("success")
            NotificationManager.success('Success', 'Registered');
            setUsers("")
        } catch (e) {
            console.error("Error adding user: ", e);
        }
    }
    return(
        <section>
            <div className="banner">
                <h1>Subscribe now to get updates</h1>
                <div className="input-container">
                    <input value={users} onChange={(e) => setUsers(e.target.value)} placeholder="Your E-mail"
                           type="text"/>
                    <div className="btn" onClick={() => addUser()}>Subscribe</div>
                </div>
            </div>

        </section>
    )
}

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const sendMessage = async () => {


        try {
            const docRef = await addDoc(collection(db, "Messages"), {
                name,
                email,
                subject,
                message

            });
            console.log("success")
            NotificationManager.success('Success', 'message sent');
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (e) {
            console.error("Error adding user: ", e);
        }
    }
    return (
        <section id="contact">
            <div className="contact">
                <div className="header">
                    <p>contact</p>
                    <h1>Contact Us</h1>
                </div>
                <div className="body">
                    <div className="flex">
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text"/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="email"/>
                    </div>
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="subject" type="text"/>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Message" id="" cols={30} rows={10}></textarea>
                    <div className="btn" onClick={() => sendMessage()}>Send</div>
                </div>
            </div>
        </section>
    )
}
export default function Home() {
    return (
        <main>
            <NotificationContainer/>
            <Nav/>
            <Hero/>
            <About/>
            <Features/>
            <Banner/>
            {/*<Comment/>*/}
            <Contact/>
        </main>
  );
}
