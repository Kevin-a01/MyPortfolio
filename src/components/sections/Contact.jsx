import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com"
function Contact({menuOpen}) {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: ""


  })

  const language = navigator.language.startsWith('sv') ? 'sv' : 'en'

  const texts = {
    sv: {
      getContact: "Få Kontakt med mig!",
      name: "Namn...",
      email: "exempel@gmail.com",
      message: "Ditt Meddelande...",
      sendMessage: "Skicka Meddelande"
    },
    en: {
      getContact: "Get In Touch!",
      name: "Name...",
      email: "example@gmail.com",
      message: "Your Message...",
      sendMessage: "Send Message"
    }
  };
  
  const t = texts[language]

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      alert("Message Sent!");
      setFormData({name: "", email: "", message: ""})

    }).catch(() => alert("Oops! Something went wrong. Please try again later!"))
  };


  return (
    
  <section id="contact" className={`min-h-screen flex items-center justify-center py-20 transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"}`}>
    <RevealOnScroll>
    <div className="px-4 w-150">
      <h2 className="text-3xl font-bold mb-8  bg-gradient-to-r from-red-500 to bg-purple-600  leading-right bg-clip-text text-transparent text-center">
        {t.getContact}
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="md:relative flex justify-center items-center">
            <input type="text" id="name" name="name" required value={formData.name} className=" w-3/5 md:w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/10" placeholder={t.name} onChange={(e) => setFormData({...formData, name: e.target.value })} />
        </div>

        <div className="md:relative flex justify-center items-center">
            <input type="email" id="email" name="email" required value={formData.email} className="w-3/5 md:w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/10" placeholder={t.email}
            onChange={(e) => setFormData({...formData, email: e.target.value })} />
        </div>

        <div className="md:relative flex justify-center items-center">
            <textarea id="message" name="message" required value={formData.message} rows={5} className=" w-3/5 md:w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/10" placeholder={t.message} onChange={(e) => setFormData({...formData, message: e.target.value })} />
        </div>
        <div className="flex justify-center">
        <button type="submit" className="w-3/5 md:w-full  bg-purple-600 text-white py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer">
          {t.sendMessage}
        </button>
        </div>

      </form>
    </div>
    </RevealOnScroll>
  </section>
  
  )
  
}

export default Contact;