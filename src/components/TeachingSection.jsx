import {ways} from '../data'
import WayToTeach from './WayToTeach'

export default function TeacingSection(){
    return(
        <section>
        <h3>Our approach to learning</h3>
        <ul>
          {ways.map((way,index) => <WayToTeach key = {index} {...way} /> )}
        </ul>

      </section>

    )
}