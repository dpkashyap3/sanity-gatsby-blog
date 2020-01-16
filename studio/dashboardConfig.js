export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e20efaa4b59e72df93d7119',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m4figucg',
                  apiId: 'dac125cd-7670-431d-99d3-091d5a48bd03'
                },
                {
                  buildHookId: '5e20efaa27684e0e842dd1b3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ihi7pr97',
                  apiId: 'a41a9b39-37e7-48dd-a125-327251decf31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dpkashyap3/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ihi7pr97.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
