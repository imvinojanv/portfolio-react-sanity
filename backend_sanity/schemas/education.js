export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
        },
        {
            name: 'institute',
            title: 'Institute',
            type: 'string',
        },
        {
            name: 'period',
            title: 'Time Period',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Institute Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'fieldTitle',
            title: 'Field Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
        },
    ]
}