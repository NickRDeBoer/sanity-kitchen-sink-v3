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
                  buildHookId: '6217e0a59e35380a403ae065',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-v-3-studio',
                  apiId: '4a40ffaf-65eb-4be3-b158-e6363de2c195'
                },
                {
                  buildHookId: '6217e0a50aaaeb0ad5d33d09',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-v-3',
                  apiId: '987966a1-71e5-4307-9033-5f5145f74e3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NickRDeBoer/sanity-kitchen-sink-v3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-v-3.netlify.app', category: 'apps'}
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
