import React, { useEffect } from "react"
import { useState } from "react"
import CopyableText from "~components/CopyableText"
import { injectTailwindCSS } from "~lib/tools"
import SmoothParticle from "~components/SmoothParticle"



function IndexSidePanel() {
  const [data, setData] = useState("")

  useEffect(() => {

   injectTailwindCSS(); 
      
    // 监听来自背景脚本的消息
    const messageListener = (request) => {
      if (request.type === "UPDATE_SIDEPANEL") {
        setData(request.data)
      }
    }

    chrome.runtime.onMessage.addListener(messageListener)

    return () => {
      chrome.runtime.onMessage.removeListener(messageListener)
    }
  }, [])

    return <>
      <SmoothParticle />
      <CopyableText copyableText={data} />
    </>
}

export default IndexSidePanel