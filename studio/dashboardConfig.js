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
                  buildHookId: '621fa35f6d4b1d3885fb3288',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r6q2rjd5',
                  apiId: '6b89ace1-c983-4f18-9e6a-62165b7b1b59'
                },
                {
                  buildHookId: '621fa35f94520838a15f215f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wy5u5six',
                  apiId: '9ec3054b-1596-458d-9c75-2263d7ed104f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jackattack-create/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wy5u5six.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
