import React from 'react'
import { Card } from '../../partials';

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="card-group">
        <Card
          imgsrc={props.src1}
          altname={`Hire a  ${props.alt1}`} username={props.username1}
          location={props.location1}
          description={props.description1}
          status={props.status1}
        />
        <Card
          imgsrc={props.src2}
          altname={`Hire a  ${props.alt2}`} username={props.username2}
          location={props.location2}
          description={props.description2}
          status={props.status2}
        />
        <Card
          imgsrc={props.src3}
          altname={`Hire a  ${props.alt3}`} username={props.username3}
          location={props.location3}
          description={props.description3}
          status={props.status3}
        />
        <Card
          imgsrc={props.src4}
          altname={`Hire a  ${props.alt4}`} username={props.username4}
          location={props.location4}
          description={props.description4}
          status={props.status4}
        />
        <Card
          imgsrc={props.src5}
          altname={`Hire a  ${props.alt5}`} username={props.username5}
          location={props.location5}
          description={props.description5}
          status={props.status5}
        />
        <Card
          imgsrc={props.src6}
          altname={`Hire a  ${props.alt6}`} username={props.username6}
          location={props.location6}
          description={props.description6}
          status={props.status6}
        />
        <Card
          imgsrc={props.src7}
          altname={`Hire a  ${props.alt7}`} username={props.username7}
          location={props.location7}
          description={props.description7}
          status={props.status7}
        />
        <Card
          imgsrc={props.src8}
          altname={`Hire a  ${props.alt8}`} username={props.username8}
          location={props.location8}
          description={props.description8}
          status={props.status8}
        />       
      </div>
    </div>
  )
}

export default Layout;
