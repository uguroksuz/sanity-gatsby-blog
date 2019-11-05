export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dc1d577ff724f50e77ebcd8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ao37fos6',
                  apiId: 'ede0cceb-68a6-4b95-859a-ea408fef7650'
                },
                {
                  buildHookId: '5dc1d578a07d8b0184915d68',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qvg8n3tc',
                  apiId: 'd44edda8-ee43-4812-94ff-4e9694ab435c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toratoraman/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qvg8n3tc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
