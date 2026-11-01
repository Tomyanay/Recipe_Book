

import { Link} from 'react-router-dom'
import notfound from '../assets//Images/Not_Found.png'


function Error() {
  return (
    <div className=' h-screen flex flex-col items-center justify-center text-center text-text [text-shadow:1px_1px_1px_(--color-text-muted)]'>
        <img className='w-150 h-150 md:w-200 md:h-200 select-none' draggable={false} src={notfound} alt="404 Not found" />
        <p className='m-5 text-lg  font-semibold leading-10'> The requested page does not exist  press 
        <Link className=' text-[19px]  mx-1.5' to={'/'}>Here</Link>
         in order for going back to main page</p>
    </div>)}

export default Error