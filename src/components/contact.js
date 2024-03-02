export default function Contact(){
    const config = {
        email:'Vishvavs8202@gmail.com',
        phone:'9361319096',
    }
    return<section id="contact" className=" flex flex-col bg-secondry px-5 py-36 justify-center">
        <div className="flex flex-col items-center">
        <h1 className="text-4xl pb-3 ">
            Contact
        </h1>
        <p>If You Whant To Discuss More Detial, Contact Me </p>
        <p><span className="font-bold">Email:</span>{config.email}</p>
        <p><span className="font-bold">Phone:</span>{config.phone}</p>
        </div>
    </section>
}