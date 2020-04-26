import React from 'react';
import {
  Layout, avatar1, avatar2, avatar3, avatar4, avatar5,
  avatar6, avatar7, avatar8} from '../partials';


const Plumbers = () => {
  return (
    <div className="plumbers">
      <Layout
        src1={avatar1} alt1="Plumber"
        username1="Kelvin Emeka"
        description1="I am a Skilled Plumber"
        status1="Available" location1="Lagos"

        src2={avatar2} username2="Chukuwdi Nelson"
        description2="I am a Skilled Plumber"
        status2="Available" location2="Port harcourt" alt2="Plumber"

        src3={avatar3} username3="Amadi Emmanuel"
        location3="Abuja" description3="I am a Skilled Plumber"
        status3="Engaged" alt3="Plumber"

        src4={avatar4} username4="Femi Bayo"
        location4="Lagos" description4="I am a Plumber"
        status4="Available" alt4="Plumber"

        src5={avatar5} username5="Kenneth Soludo"
        location5="Enugu" description5="I am a Skilled Plumber"
        status5="Available" alt5="Plumber"

        src6={avatar6} username6="Ahamdu Basiru"
        location6="Kano" description6="I am a Plumber"
        status6="Available" alt6="Plumber"

        src7={avatar7} username7="Okowa Smith"
        location7="Delta" description7="I am a Skilled Plumber"
        status7="Available" alt7="Plumber"

        src8={avatar8} username8="Odunlade Femi"
        location8="Lagos" description8="I am a Skilled Plumber"
        status8="Available" alt8="Plumber"
      />   
    </div>
  )
}

export default Plumbers;
