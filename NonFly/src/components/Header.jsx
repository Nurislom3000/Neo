import { useState } from 'react'
import { Codesandbox, Sun, Flame } from 'lucide-react'

const Header = () => {
    const [theme, setTheme] = useState(true);
    const changeTheme = () => {
        setTheme(!theme);
    }
  return (
    <div className='flex flex-col items-center'>
        <div className='pt-7 flex justify-between items-center w-3xl'>
            <div className='flex items-center gap-2'>
                <div className='flex w-min rounded-full p-2 bg-[#1F1F1F]'>
                    <Codesandbox width={29} height={29} color='#F76F53'/>
                </div>
                <span className='text-[23px] bricolage-grotesque'>Nonfly</span>
            </div>
            <div className='flex items-center'>
                <span>12/04/2024</span>
            </div>
            <div className='flex items-center gap-4'>
                {
                    theme == true ? <button onClick={() => {changeTheme()}}><Sun/></button> : <button onClick={() => {changeTheme()}}><Sun/></button>   
                }
                <span className="flex items-center justify-end"><Flame color="red" fill="red"/>1</span>
                <button className='cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 px-3 py-2 bg-[#2C2C2A] rounded-lg text-[#FEF2E3]'>Download</button>
            </div>
        </div>
    </div>
  )
}

export default Header