<template>
  <v-treeview 
    v-model="sitetree" 
    :open="pageopen" 
    :items="siteitems" 
    dense 
    item-key="name" 
    open-on-click
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.pagetype">
        {{ open ? 'folder_open' : 'folder' }}
      </v-icon>
      <v-icon v-else>
        {{ pagetypes[item.pagetype] }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
export default {
  name: "BeeContentSitemap",
  data: () => ({
    pageopen: [],
    pagetypes: {
      home: 'home',
      html: 'public',
      dl: 'cloud_download',
      json: 'mdi-json',
      md: 'mdi-markdown',
      pdf: 'picture_as_pdf',
      png: 'picture_in_picture',
      xls: 'mdi-file-excel',
    },
    sitetree: [],
    siteitems: [
      {
        name: 'Home', pagetype: 'home'
      },
      {
        name: 'Who we are',
        children: [
          { name: 'Company', pagetype: 'html' },
          { name: 'Chrome', pagetype: 'png' },
          { name: 'Webstorm', pagetype: 'png' },
        ],
      },
      {
        name: 'What we do',
        children: [
          { name: 'October', pagetype: 'pdf' },
          { name: 'November', pagetype: 'pdf' },
          { name: 'Tutorial', pagetype: 'html' },
        ],
      },
      {
        name: 'Documents',
        children: [
          {
            name: 'vuetify',
            children: [
              { name: 'index', pagetype: 'html' },
              { name: 'bootstrap', pagetype: 'html' },
            ],
          },
          {
            name: 'material2',
            children: [
              {
                name: 'src :',
                children: [
                  { name: 'v-btn', pagetype: 'html' },
                  { name: 'v-card', pagetype: 'html' },
                  { name: 'v-window', pagetype: 'html' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Products',
        children: [
          { name: 'Product 1', pagetype: 'pdf' },
          { name: 'Pruduct 2', pagetype: 'pdf' },
          { name: 'Product 3', pagetype: 'html' },
        ],
      },
      {
        name: 'Blog',
        children: [
          {
            name: 'Tutorials',
            children: [
              { name: 'Basic layouts', pagetype: 'html' },
              { name: 'Advanced techniques', pagetype: 'html' },
              { name: 'All about app', pagetype: 'html' },
            ],
          },
          { name: 'Intro', pagetype: 'html' },
          { name: 'Conference introduction', pagetype: 'html' },
        ],
      },
      { name: 'Downloads', pagetype: 'dl' },
      { name: 'Contact us', pagetype: 'html' },
    ],
  }),
}
</script>