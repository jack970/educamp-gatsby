module.exports = {
  siteMetadata: {
    siteUrl: 'https://aducamp.netlify.app/',
    title: `aducamp`,
    description: `Site corporativo voltado para venda de produtos agrícolas.`,
    author: `Work - Informática`,
    menuTop: [
      {
        label: "Início"
      },
      {
        label: "Blog"
      },
      {
        label: "Sobre a Empresa",
        linkLabel: "/empresa",
        subMenu: [
          {
            subLabel: 'História'
          },
          {
            subLabel: 'Missão, Visão e Valores'
          },
          {
            subLabel: 'Dados e Localização'
          },
          {
            subLabel: 'Atendimento'
          }
        ]
      },
      {
        label: "Corporativa",
        linkLabel: "/empresa",
        subMenu: [
          {
            subLabel: 'Compromissos com a Qualidade e Cliente'
          },
          {
            subLabel: 'Certificados'
          },
          {
            subLabel: 'Garantias'
          },
          {
            subLabel: 'Códigos de Ética'
          }
        ]
      },
      {
        label: "Produtos",
        linkLabel: "/produtos",
        subMenu: [
          {
            subLabel: 'MAP 11 52'
          },
          {
            subLabel: 'Cloreto de Potássio'
          },
          {
            subLabel: 'Ureia Granulada'
          },
          {
            subLabel: 'Ureia Automotiva'
          },
          {
            subLabel: 'Ureia Prill'
          },
          {
            subLabel: 'Ureia Pecuaria'
          },
          {
            subLabel: 'Sulfato de Amônia'
          },
          {
            subLabel: 'Nitrato de Amônia'
          },
          {
            subLabel: 'Super Triplo'
          },
          {
            subLabel: 'Super Simples 00 21'
          },
          {
            subLabel: 'Fosfato 00 20 Granulado'
          },
          {
            subLabel: 'Fosfato Natural Farelado'
          },
          {
            subLabel: 'Calcário Dolomítico'
          },
          {
            subLabel: 'Calcário Calcítico'
          },
          {
            subLabel: 'Gesso'
          },
          {
            subLabel: 'Formulados no Grão'
          }
        ]
      },
      {
        label: "Contato"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `react-particles-js`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Empresa`,
        path: `${__dirname}/Empresa`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Produtos`,
        path: `${__dirname}/Produtos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Posts`,
        path: `${__dirname}/Posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imagePost`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `imagePost`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-lazy-load`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aducamp - Escolha o nosso serviço.`,
        short_name: `aducamp`,
        start_url: `/`,
        background_color: `#36A953`,
        theme_color: `#36A953`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`
  ],
}
