import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const computedFields = {
    wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ''),
    },
}

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/*.md`,
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        tags: { type: 'string', required: true },
        image: { type: 'string', required: true },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: 'data',
    documentTypes: [Project],
})
