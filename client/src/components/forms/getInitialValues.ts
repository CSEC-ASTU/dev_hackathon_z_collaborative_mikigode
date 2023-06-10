export const getInitialValues = (
  initialValues: BlogType | undefined
): BlogType => {
  if (initialValues) {
    return {
      id: initialValues.id,
      title: initialValues.title,
      headline: initialValues.headline,
      slug: initialValues.slug,
      description: initialValues.description,
      category: initialValues.category,
      tags: initialValues.tags,
      body: initialValues.body,
      status: initialValues.status,
      thumbnail: initialValues.thumbnail,
      published: initialValues.published,
    }
  } else {
    return {
      title: '',
      headline: '',
      slug: '',
      description: '',
      category: '',
      tags: [],
      body: '',
      status: '',
      thumbnail: '',
      published: '',
    }
  }
}
