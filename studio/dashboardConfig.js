export default {
  widgets: [
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
                  buildHookId: '5f46be2d18ad32511a48c099',
                  title: 'Sanity Studio',
                  name: 'test-site-studio',
                  apiId: '689f68a1-34c9-47b6-8172-b45e15ddfb69'
                },
                {
                  buildHookId: '5f46be2d6ef9bd354776f4e9',
                  title: 'Blog Website',
                  name: 'test-site-web',
                  apiId: '852e9b42-5c6c-4d18-9e5d-282c713ba15d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matsbohn/test-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-site-web.netlify.app', category: 'apps'}
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
