import { useState, useEffect, useCallback } from 'react';
import { Storage } from "@plasmohq/storage";

const storage = new Storage();
export function useMessages() {
    const [messages, setMessages] = useState<Array<any>>([])
  
    useEffect(() => {
      // Load messages when the component mounts
      storage.get('messages').then(messagesString => {
        if (messagesString) {
          setMessages(JSON.parse(messagesString))
        }
      })
    }, [])
  
    const saveMessages = useCallback(async (newMessages: Array<any>) => {
      await storage.set('messages', JSON.stringify(newMessages))
      setMessages(newMessages)
    }, [])
  
    const addMessage = useCallback(async (message: any) => {
      const newMessages = [...messages, message]
      await saveMessages(newMessages)
    }, [messages, saveMessages])
  
    return { messages, saveMessages, addMessage }
  }