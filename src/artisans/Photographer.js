import React from 'react';
import {
  Layout, avatar1, avatar2, avatar3, avatar4, avatar5,
  avatar6, avatar7, avatar8
} from '../partials';



const Photographer = () => {
  return (
    <div>
      <Layout
        src1={avatar1} alt1="Photographer"
        username1="Kelvin Emeka"
        description1="I am a Skilled Photographer"
        status1="Available" location1="Lagos"

        src2={avatar2} username2="Chukuwdi Nelson"
        description2="I am a Skilled Photographer"
        status2="Available" location2="Port harcourt" alt2="Photographer"

        src3={avatar3} username3="Amadi Emmanuel"
        location3="Abuja" description3="I am a Skilled Photographer"
        status3="Engaged" alt3="Photographer"

        src4={avatar4} username4="Femi Bayo"
        location4="Lagos" description4="I am a Photographer"
        status4="Available" alt4="Photographer"

        src5={avatar5} username5="Kenneth Soludo"
        location5="Enugu" description5="I am a Skilled Photographer"
        status5="Available" alt5="Photographer"

        src6={avatar6} username6="Ahamdu Basiru"
        location6="Kano" description6="I am a Photographer"
        status6="Available" alt6="Photographer"

        src7={avatar7} username7="Okowa Smith"
        location7="Delta" description7="I am a Skilled Photographer"
        status7="Available" alt7="Photographer"

        src8={avatar8} username8="Odunlade Femi"
        location8="Lagos" description8="I am a Skilled Photographer"
        status8="Available" alt8="Photographer"
      />
    </div>
  )
}

export default Photographer;