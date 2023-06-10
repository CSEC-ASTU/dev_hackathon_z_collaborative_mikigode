'use client'

import BlogCard from '@/components/cards/BlogCard'
import LargeBlogCard from '@/components/cards/LargBlogCard'
import PageHeader from '@/components/PageHeader'

import Subscribe from '@/components/Subscribe'
import Accordion from '@/components/ui/Accordion'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import useSWR, { Fetcher, useSWRConfig } from 'swr'

const blogsFetcher: Fetcher<BlogType[], string> = (...args) =>
  fetch(...args).then((res) => res.json())

const collectionFetcher: Fetcher<CollectionType, string> = (...args) =>
  fetch(...args).then((res) => res.json())

const filterFetcher: Fetcher<FilterType, string> = (...args) =>
  fetch(...args).then((res) => res.json())

const BlogPage = () => {
  const [searchAndFilter, setSearchAndFilter] = useState('')
  const [categoryValue, setCategoryValue] = useState<string[] | undefined>()
  const [archiveValue, setArchiveValue] = useState<string[] | undefined>()
  const [tagValue, setTagValue] = useState<string[] | undefined>()
  const [searchValue, setSearchValue] = useState('')
  const [search, setSearch] = useState('')
  const { mutate } = useSWRConfig()

  const {
    data: blogs,
    error: blogsError,
    isLoading: blogsIsLoading,
  } = useSWR(
    `http://localhost:8000/blogs/search-and-filter/?${searchAndFilter}`,
    blogsFetcher
  )
  const {
    data: collection,
    error: collectionError,
    isLoading: collectionIsLoading,
  } = useSWR(`http://localhost:8000/blogs/collections/`, collectionFetcher)

  const {
    data: filters,
    error: filtersError,
    isLoading: isFetchingFilters,
  } = useSWR(`http://localhost:8000/blogs/filter/`, filterFetcher)

  const handleCheckFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: Dispatch<SetStateAction<string[] | undefined>>
  ) => {
    setValue((prevValues) => {
      if (e.target.checked) {
        if (prevValues) {
          return [...prevValues, e.target.value]
        } else {
          return [e.target.value]
        }
      } else if (!e.target.checked && prevValues) {
        return prevValues.filter((prevValue) => prevValue !== e.target.value)
      }
    })
  }
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setSearchValue(search)
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [search])

  const handleSearch = () => {
    let searchAndFilterValue = ''
    if (searchValue !== '') {
      searchAndFilterValue = searchAndFilterValue + `search=${searchValue}&`
    }

    categoryValue?.forEach((category) => {
      if (category !== '') {
        searchAndFilterValue = searchAndFilterValue + `category=${category}&`
      }
    })
    archiveValue?.forEach((archive) => {
      if (archive !== '') {
        searchAndFilterValue = searchAndFilterValue + `archive=${archive}&`
      }
    })
    tagValue?.forEach((tag) => {
      if (tag !== '') {
        searchAndFilterValue = searchAndFilterValue + `tag=${tag}&`
      }
    })

    setSearchAndFilter(searchAndFilterValue)

    mutate(`http://localhost:8000/blogs/search-and-filter/${searchAndFilter}`)
  }

  useEffect(() => {
    handleSearch()
  }, [archiveValue, categoryValue, searchValue, tagValue])

  return (
    <div className="min-h-screen bg-white backdrop-blur-sm transition-colors bg-app-transparent">
      <div className={`py-16  px-2 md:mx-auto md:px-auto`}>
        <PageHeader title="Alif Newsroom" subtitle="Well come to the news" />
      </div>

      <Subscribe />
      <section className={`sm:px-16 px-6 sm:py-16 py-10  mx-auto relative z-0`}>
        <div
          className={` px-2 md:mx-auto md:px-auto flex flex-col-reverse md:flex-row gap-4`}
        >
          <div className="w-full md:w-2/3 rounded-md px-2">
            <div className="flex flex-col gap-8">
              {!blogsIsLoading && blogs && blogs?.length && (
                <LargeBlogCard key={`${blogs[0]?.slug}`} {...blogs[0]} />
              )}
              <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-auto gap-8 ">
                {blogs?.map(
                  (blog, index) =>
                    index !== 0 && (
                      <BlogCard
                        key={`${blog.slug}-${index}`}
                        {...blog}
                        index={index}
                      />
                    )
                )}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-1">
            <div className=" w-full rounded-md bg-primary p-4">
              <input
                placeholder="search.."
                value={search}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            <Accordion
              className="rounded-md bg-primary "
              accordionSummary="Pin"
              accordionDetails={
                <ul className={`flex flex-col gap-2 my-2`}>
                  {!collectionIsLoading &&
                    collection?.recent_blogs?.map((blog) => (
                      <li key={`blogs-${blog.slug}`} className=" py-1">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className={`hover:text-green-400 flex justify-between items-center`}
                        >
                          {blog.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              }
            />
            <Accordion
              className="rounded-md bg-primary "
              accordionSummary="Recent Posts"
              accordionDetails={
                <ul className={`flex flex-col gap-2 my-2`}>
                  {!collectionIsLoading &&
                    collection?.recent_blogs?.map((blog) => (
                      <li key={`blogs-${blog.slug}`} className=" py-1">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className={`hover:text-green-400 flex justify-between items-center`}
                        >
                          {blog.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              }
            />

            <Accordion
              className="rounded-md bg-primary "
              accordionSummary="Categories"
              accordionDetails={
                <ul className={`flex flex-col gap-2 my-2`}>
                  {!isFetchingFilters &&
                    filters?.categories?.map((category) => (
                      <li
                        key={category.id}
                        className="flex justify-between py-1"
                      >
                        <label htmlFor={`categories-${category.id}`}>
                          {category.name}
                        </label>
                        <input
                          id={`categories-${category.id}`}
                          type="checkbox"
                          value={category.name}
                          onChange={(e) =>
                            handleCheckFilter(e, setCategoryValue)
                          }
                        />
                      </li>
                    ))}
                </ul>
              }
            />
            <Accordion
              className="rounded-md bg-primary "
              accordionSummary="Tags"
              accordionDetails={
                <ul className={`flex flex-col gap-2 my-2`}>
                  {!isFetchingFilters &&
                    filters?.tags?.map((tag) => (
                      <li key={tag.id} className="flex justify-between py-1">
                        <label htmlFor={`tag-${tag.id}`}>{tag.name}</label>
                        <input
                          id={`tag-${tag.id}`}
                          type="checkbox"
                          value={tag.name}
                          onChange={(e) => handleCheckFilter(e, setTagValue)}
                        />
                      </li>
                    ))}
                </ul>
              }
            />

            <Accordion
              className="rounded-md bg-primary "
              accordionSummary="Archive"
              accordionDetails={
                <ul className={`flex flex-col gap-2 my-2`}>
                  {!isFetchingFilters &&
                    filters?.archives?.map((archive) => (
                      <li key={archive} className="flex justify-between py-1">
                        <label htmlFor={`archives-${archive}`}>{archive}</label>
                        <input
                          id={`archives-${archive}`}
                          type="checkbox"
                          value={archive}
                          onChange={(e) =>
                            handleCheckFilter(e, setArchiveValue)
                          }
                        />
                      </li>
                    ))}
                </ul>
              }
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
