import Project1 from '../assets/Project1.png.png';
export default function Project(){
    return <section id='project' className='flex flex-col md:flex-row py-5 px-5 justify-center bg-secondry'>
        <div className="md:w-1/2 flex flex-col justify-center">
           <h1 className='text-4xl '>Project</h1>
           <p className='px-1 py-2'>
           EXTRACTING TEXT FROM IMAGE & BRAILLE TO SPEECH CONVERSION
2022-2023 <br/>"We have developed a mobile-based application."
for Visually Challenged persons to recognise the Braille Dots. The app
basically contains two features
Converting braille dots into text and then audio format.
Converting audio format into text and braille dot images.
<br/>
The project utilizes TensorFlow for machine learning,
Google ML Kit for optical character recognition (OCR), and
text-to-speech (TTS)
Created an app for Visually Challenged persons to
recognise the Braille Dots.

           </p>
        </div>
        <div className="md:w-1/2">
            <img className='' src={Project1}/>
        </div>
    </section>
}