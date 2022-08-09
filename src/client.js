import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    //projectId: process.env.SANITY_PROJECTID,
    projectId: "yfhcl1lq",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    //token: process.env.SANITY_API_TOKEN, 
    token: 'skfTzDnWNAUK2We6oyHdxzdvUj43ft8LPg4ZxDhIl6DZ7Hjf0fETB7cBH3bIQ84rwPmjtopkHqRphX76A9S6PL11j8blqg90GkCZwoFejMg1QpPnt4V2JuZMUVswfbp8eZSHsH0lWxWtqCBSR4UNuOEf02uDzARZvZ8yjGkQKZ0bZKPUcSrs',
});

const builder = imageUrlBuilder(client);

export const  urlFor = (source) => builder.image(source);

// Makemaker07045185420