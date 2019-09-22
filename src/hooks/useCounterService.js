import { useState } from 'react'
import axios from 'axios'

export const useCounter = (url) => {
  const [counter, setCounter] = useState(0)

  const counterService = {
    getCounter: async () => {
      try {
        const { data } = await axios.get(url + '/counter')
        setCounter(data)
      } catch (e) {
        console.error(e)
      }
    },
    sendCounter: async () => {
      try {
        console.log('counter', counter)
        const res = await axios.post(url + '/counter', { counter: counter })
        console.log('res', res)
        return res
      } catch (e) {
        console.error(e)
      }
    }
  }

  return [counter, setCounter, counterService]
}