import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = {
  input: string
}
export type RequestResponse = number
const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  RequestResponse
> = async (req, res) => {
  const { input } = req.body

  chrome.tabs.query({ active: true, currentWindow: true }, async (res) => {
    const { windowId, id: tabId } = res[0]
    await chrome.sidePanel.open({ windowId, tabId })
    await setTimeout(async () => {
      await chrome.runtime.sendMessage({
        type: "UPDATE_SIDEPANEL",
        data: input
      })
    }, 300)
  })
}

export default handler
