import React from 'react'
import { useParams } from 'react-router-dom'
import Posters from '../../../data/posters'

const MoodCollection = () => {

    const {moodId} = useParams.moodId()

    const currentMood = Posters.find((item)=>{
       

        const formattedTitle = item.title.toLowerCase.replace(/\s+/g,"-")

        return formattedTitle === moodId
    })

    if(!currentMood){
        return(
            <div className='min-h-screen bg-neutral-950 flex items-center justify-center text-white'>
                <h2>No films found for this mood.</h2>
            </div>
        )
    }



    return (
    <main>
        <div>
            <div>
                <h1>
                    {currentMood.title}
                    
                </h1>
                <p> {currentMood.subtitle} </p>
            </div>
        </div>
    </main>
  )
}

export default MoodCollection