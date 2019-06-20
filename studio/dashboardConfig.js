export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d0c0a7e5f34c2017f50b26a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yi433fff',
                  apiId: 'e635ad51-8b44-4f67-abc0-385f7139b96a'
                },
                {
                  buildHookId: '5d0c0a7ed8e803018ea5ba20',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-imk85g9v',
                  apiId: '0cf7c485-2dda-492b-9288-e208d07d492e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jhoffner/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-imk85g9v.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
