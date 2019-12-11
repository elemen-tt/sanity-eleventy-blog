export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5df09302f6d23366e9f21648',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-srh83stz',
                  apiId: '82a8ce49-7b91-474c-a768-c1ba82af441b'
                },
                {
                  buildHookId: '5df0930250225b25166c849b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-pfo7xotg',
                  apiId: 'f4c0478d-61ca-4f7a-823f-02f3c9c673fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azcunaga/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-pfo7xotg.netlify.com', category: 'apps'}
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
