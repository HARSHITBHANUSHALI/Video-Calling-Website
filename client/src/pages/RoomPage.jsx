import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';
const RoomPage = () => {
    const {roomId} = useParams();
    const myMeeting = async (element)=>{
        const appID = 752328650;
        const serverSecret = "bc3c943a1b05e2b2f9c54aeaf271da25";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'Your name'
        );
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container:element,
                scenario:{
                    mode:ZegoUIKitPrebuilt.VideoConference,
                },
            })
    }
  return (
    <div className='room-page'>
        <div ref={myMeeting}></div>
    </div>
  )
}

export default RoomPage
