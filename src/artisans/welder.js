import React from 'react';
import {
  Layout, avatar1, avatar2, avatar3, avatar4, avatar5,
  avatar6, avatar7, avatar8
} from '../partials';

const Welder = () => {
  return (
    <div>
      <Layout
        src1={avatar1} alt1="Welder"
        username1="Kelvin Emeka"
        description1="I am a Welder"
        status1="Available" location1="Lagos"

        src2={avatar2} username2="Chukuwdi Nelson"
        description2="I am a Welder"
        status2="Available" location2="Port harcourt" alt2="Welder"

        src3={avatar3} username3="Amadi Emmanuel"
        location3="Abuja" description3="I am a Welder"
        status3="Engaged" alt3="Welder"

        src4={avatar4} username4="Femi Bayo"
        location4="Lagos" description4="I am a Welder"
        status4="Available" alt4="Welder"

        src5={avatar5} username5="Kenneth Soludo"
        location5="Enugu" description5="I am a Welder"
        status5="Available" alt5="Welder"

        src6={avatar6} username6="Ahamdu Basiru"
        location6="Kano" description6="I am a Welder"
        status6="Available" alt6="Welder"

        src7={avatar7} username7="Okowa Smith"
        location7="Delta" description7="I am a Welder"
        status7="Available" alt7="Welder"

        src8={avatar8} username8="Odunlade Femi"
        location8="Lagos" description8="I am a Welder"
        status8="Available" alt8="Welder"
      />
    </div >
  )
}

export default Welder;