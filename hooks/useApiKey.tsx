import { useState, useEffect, useCallback } from 'react';
import { Storage } from "@plasmohq/storage";

const storage = new Storage();
export function useApiKey() {
    const [apiKey, setApiKey] = useState<string | undefined>()
  
    useEffect(() => {
      // Load the API key when the component mounts
      storage.get('apiKey').then(setApiKey)
    }, [])
  
    const saveApiKey = useCallback(async (newKey: string) => {
      await storage.set('apiKey', newKey)
      setApiKey(newKey)
    }, [])
  
    return { apiKey, saveApiKey }
  }