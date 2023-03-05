import React, { useEffect, useState, useCallback } from 'react'
import { urls } from '../helpers/urlForApi'
export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(urls.GET)
  const [data, setData] = useState({ users: [] })

  const [isLastPages, setIsLastPages] = useState(false)

  const getData = useCallback(async () => {
    const response = await fetch(url)
    const dataApi = await response.json().then((data) => {
      return data
    })
    setData(dataApi)
    setLoading(false)
  }, [url])

  const getNewListOfUsers = (nextUrl, total, pages) => {
    console.log('I am here')
    if (total === pages) {
      setIsLastPages(true)
    } else {
      setUrl(nextUrl)
    }
  }

  console.log(url)
  useEffect(() => {
    if (!isLastPages) {
      getData()
    }
  }, [url, getData, isLastPages])

  return { ...data, getNewListOfUsers, isLastPages }
}
