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
                  buildHookId: '5f63ebd04037df6936511628',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cf622zwr',
                  apiId: '8c0ef357-14cd-41e6-a29d-8dd916aa2a72'
                },
                {
                  buildHookId: '5f63ebd070f9468be0d32c40',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rjs2zdt3',
                  apiId: '06a93500-364f-4f57-bfd5-660f1ffd0714'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pschramm/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rjs2zdt3.netlify.app', category: 'apps'}
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
