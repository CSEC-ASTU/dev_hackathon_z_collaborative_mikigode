'use client'

import { Formik, Field } from 'formik'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { quillModules } from '@/helpers/quillModules'
import TextField from '@/components/ui/TextField'
import Select from '@/components/ui/Select'
import Option from '@/components/ui/Option'
import Textarea from '@/components/ui/Textarea'
import { useEffect, useRef, useState } from 'react'
import { ExtFile } from '@dropzone-ui/react'
import { getInitialValues } from './getInitialValues'
import { blogSchema } from './blogSchema'
import Model from '../ui/Model'
import { useAddBlog, useAddCategory, useAddTag } from '@/lib/client-side'
type ItemProps = {
  item: CategoryType | TagType
  itemName: string
  handleUpdate: ({
    id,
    name,
    value,
  }: {
    id: number | string
    name: string
    value: number | string | number[] | string[]
  }) => void
  handleDelete: ({ id, name }: { id: number | string; name: string }) => void
}
const Item = ({ item, itemName, handleUpdate, handleDelete }: ItemProps) => {
  const InputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (InputRef.current) {
      InputRef.current.value = item.name
    }
  }, [item.name])

  return (
    <div className="flex justify-between items-center gap-2">
      <TextField
        type="text"
        // value={item.value}
        defaultValue={item.name}
        label={itemName}
        inputRef={InputRef}
      />
      <button
        onClick={() =>
          handleUpdate({
            name: itemName,
            id: item.id,
            value: InputRef.current?.value || '',
          })
        }
      >
        save
      </button>
      <button onClick={() => handleDelete({ name: itemName, id: item.id })}>
        close
      </button>
    </div>
  )
}

const BlogForm = ({
  blog,
  isEditing,
  categories,
  tags,
}: {
  isEditing: boolean
  blog?: BlogType
  categories?: CategoryType[]
  tags?: TagType[]
}) => {
  const [updating, setUpdating] = useState('')

  const [openModel, setOpenModel] = useState(false)
  const [modelTitle, setModelTitle] = useState('')
  const [modelInputLabel, setModelInputLabel] = useState('')
  const [imageSrc, setImageSrc] = useState<string>()

  const [blogThumbnail, setBlogThumbnail] = useState<ExtFile[]>()
  const [initialValues, setInitialValues] = useState<BlogType>()

  const modelInputRef = useRef<HTMLInputElement>()
  const addCategory = useAddCategory()
  const addTag = useAddTag()
  const addBlog = useAddBlog()

  useEffect(() => {
    setInitialValues(blog)
  }, [blog, isEditing])

  const handleOpenModel = ({
    inputLabel,
    modelTitle,
  }: {
    inputLabel: string
    modelTitle: string
  }) => {
    setModelInputLabel(inputLabel)
    setModelTitle(modelTitle)
    setOpenModel(true)
  }

  const handleAdd = () => {
    if (modelInputRef.current) {
      if (modelInputLabel === 'categories') {
        addCategory(modelInputRef.current?.value)
      } else {
        addTag(modelInputRef.current?.value)
      }
      modelInputRef.current.value = ''
    }
  }
  const handleFormSubmit = (values: BlogType) => {
    console.log(values)

    if (blog && isEditing) {
    } else {
      addBlog(values)
      console.log(values)
    }
  }

  const handleUpdate = ({
    id,
    name,
    value,
  }: {
    id: number | string
    name: string
    value: number | string | number[] | string[]
  }) => {
    const postData = {
      id,
      name,
      label: value,
    }
  }
  const handleDelete = ({
    id,
    name,
  }: {
    id: number | string
    name: string
  }) => {
    const postData = {
      id,
      name,
    }
  }
  const handleClean = (image: any) => {}
  const handelRemoveThumbnail = () => {
    setUpdating('thumbnail')
  }
  return (
    <>
      <Model
        openModel={openModel}
        setOpenModel={setOpenModel}
        modelTitle={modelTitle}
      >
        <div className="w-full flex flex-col gap-2">
          {/* {updating === 'organize' && <CustomAlert />} */}
          <div className="flex justify-between items-center gap-2 mb-2">
            <TextField
              className="w-full"
              type="text"
              name={modelInputLabel}
              // label={modelInputLabel}
              inputRef={modelInputRef}
            />
            <button onClick={handleAdd} className="w-fit">
              save
            </button>
          </div>
          {modelInputLabel === 'categories' &&
            categories?.map((item) => (
              <Item
                key={item.id}
                item={item}
                itemName={modelInputLabel}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            ))}
          {/* <Divider /> */}
          {/* <div className="flex flex-col gap-4 mt-4">
            {!organizeIsFetching &&
              organize &&
              organize[modelInputLabel]?.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  itemName={modelInputLabel}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              ))}
          </div> */}
        </div>
      </Model>
      {/* <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={() => setImageSrc(undefined)}
      /> */}
      <div className="w-full green-pink-gradient p-1 rounded-2xl">
        <div className="w-full bg-primary p-8 rounded-2xl">
          <Formik
            className="w-full"
            onSubmit={handleFormSubmit}
            initialValues={getInitialValues(initialValues)}
            validationSchema={blogSchema}
            enableReinitialize={true}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="w-full px-4 flex flex-col  gap-4"
              >
                {/* <div className="w-full">
          <h5 className="my-2">Display Thumbnail</h5>
          {initialValues?.thumbnail && (
            <div className="w-full ">
              <h6 className="my-2">Old Display thumbnail</h6>
              <div className="w-full p-4 ">
                <div className="w-fit flex flex-col gap-2  outline outline-1 p-1 rounded-sm">
                  <Image
                    alt="Display Thumbnail"
                    className="h-[400px] "
                    height={360}
                    width={400}
                    src={initialValues?.thumbnail}
                  />
                  <div>
                    <button
                      onClick={handelRemoveThumbnail}
                      color="error"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Dropzone
            style={{
              minHeight: '200px',
              minWidth: '100%',
            }}
            label="Drop your Display thumbnail here or click to browse"
            onChange={(incomingImages) =>
              setBlogThumbnail(incomingImages)
            }
            onClean={handleClean}
            value={blogThumbnail}
            maxFiles={1}
            maxFileSize={2900}
            accept=".png,image/*"
          >
            {blogThumbnail?.length &&
              blogThumbnail.map((file) => (
                <FileItem
                  {...file}
                  key={file.id}
                  onDelete={(id) =>
                    setBlogThumbnail(
                      blogThumbnail.filter((x) => x.id !== id)
                    )
                  }
                  onSee={(imageSource) => setImageSrc(imageSource)}
                  resultOnTooltip
                  preview
                  info
                />
              ))}
          </Dropzone>
        </div> */}
                <div className="w-full">
                  <>{console.log(errors)}</>
                  <TextField
                    placeholder="title"
                    type="text"
                    label="Blog Title"
                    onChange={handleChange}
                    value={values.title}
                    name="title"
                    onBlur={handleBlur}
                    isError={!!touched.title && !!errors.title}
                    helperText={errors.title}
                  />
                </div>
                <div className="w-full">
                  <TextField
                    placeholder="headline"
                    type="text"
                    label="Headline"
                    onChange={handleChange}
                    value={values.headline}
                    name="headline"
                    onBlur={handleBlur}
                    isError={!!touched.headline && !!errors.headline}
                    helperText={errors.headline}
                  />
                </div>
                <div className="w-full">
                  <TextField
                    placeholder="slug"
                    type="text"
                    label="Slug"
                    onChange={handleChange}
                    value={values.slug}
                    name="slug"
                    onBlur={handleBlur}
                    isError={!!touched.slug && !!errors.slug}
                    helperText={errors.slug}
                  />
                </div>
                <div className="w-full">
                  <Textarea
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    isError={!!touched.description && !!errors.description}
                    helperText={errors.description}
                    rows={5}
                  />
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-between px-1 gap-2">
                    <h6 className="text-white font-medium mb-1">Category</h6>
                    <h6
                      onClick={() =>
                        handleOpenModel({
                          inputLabel: 'categories',
                          modelTitle: 'Add Category',
                        })
                      }
                      className={`my-2 cursor-pointer hover:text-green-400`}
                    >
                      More
                    </h6>
                  </div>
                  <div className="w-full">
                    <Select
                      name="category"
                      value={values?.category}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isError={!!touched.category && !!errors.category}
                      helperText={errors.category}
                    >
                      <Option value="">
                        <em>None</em>
                      </Option>
                      {categories?.map((category) => (
                        <Option key={category.id} value={category.name}>
                          {category.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-between px-1 gap-2 items-center">
                    <h6 className="text-white font-medium mb-1">Tags</h6>
                    <h6
                      onClick={() =>
                        handleOpenModel({
                          inputLabel: 'tags',
                          modelTitle: 'Add Tags',
                        })
                      }
                      className={`my-2 cursor-pointer hover:text-green-400`}
                    >
                      More
                    </h6>
                  </div>
                  <div className="w-full">
                    <Select
                      multiple
                      value={values?.tags}
                      name="tags"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isError={!!touched.tags && !!errors.tags}
                      helperText={errors.tags}
                    >
                      <Option value="">
                        <em>None</em>
                      </Option>
                      {tags?.map((tag) => (
                        <Option key={tag.id} value={tag.name}>
                          {tag.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="w-full h-fit">
                  <h6 className="my-2">Body</h6>
                  <Field name="body">
                    {({ meta, field }: { meta: any; field: any }) => (
                      <div>
                        <ReactQuill
                          theme="snow"
                          modules={quillModules}
                          // onBlur={handleBlur}
                          value={field.value}
                          onChange={field.onChange(field.name)}
                        />
                        {!!meta.touched && !!meta.errors && (
                          <>
                            {/* <Divider
                      color="error"
                      className="h-[2px] mt-[-1px]"
                    /> */}
                            <span className="text-red-500">
                              {meta.touched && meta.errors}
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <h6 className="my-2">Status</h6>
                  <div className="w-full">
                    <Select
                      name="status"
                      defaultValue=""
                      onChange={handleChange}
                      value={values.status}
                      onBlur={handleBlur}
                      isError={!!touched.status && !!errors.status}
                      helperText={errors.status}
                    >
                      <Option value="">
                        <em>None</em>
                      </Option>
                      <Option value={'published'}>{'Published'}</Option>
                      <Option value={'scheduled'}>{'Scheduled'}</Option>
                      <Option value={'draft'}>{'Draft'}</Option>
                      <Option value={'deleted'}>{'Deleted'}</Option>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-start my-4">
                  <button
                    type="submit"
                    color="secondary"
                    className={`px-8 py-3 bg-[#11998e] hover:bg-[#0c6b63] rounded p-2 shadow`}
                  >
                    {blog && isEditing ? 'Save Blog' : 'Create Blog'}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default BlogForm
