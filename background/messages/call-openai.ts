import type { PlasmoMessaging } from "@plasmohq/messaging"

const API_KEY = 'your-api-key-here'; // 替换为你的 OpenAI API 密钥
const API_URL = 'https://api.openai.com/v1/chat/completions';
export type RequestBody = {
    input: string
  }
  export type RequestResponse = string
  const handler: PlasmoMessaging.MessageHandler<
    RequestBody,
    RequestResponse
  > = async (req, res) => {
    const { input } = req.body
    res.send('结果')
     const result = await callOpenAI(input);
  
    // chrome.tabs.query({ active: true, currentWindow: true }, async (res) => {
    //   const { windowId, id: tabId } = res[0]
    //   await chrome.sidePanel.open({ windowId, tabId })
    //   await setTimeout(async () => {
    //     await chrome.runtime.sendMessage({
    //       type: "UPDATE_SIDEPANEL",
    //       data: input
    //     })
    //   }, 300)
    // })
  }
  
  export default handler
  
  async function callOpenAI(prompt) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: prompt}],
          temperature: 0.7
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("调用 OpenAI API 时出错:", error);
      return null;
    }
  }