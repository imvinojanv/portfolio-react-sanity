export default {
    name: 'aboutMe',
    title: 'About Me',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'About Me',
            type: 'string'
        }, 
        {
            name: 'strength',
            title: 'My Strength',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}