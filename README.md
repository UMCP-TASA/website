# UMCP TASA Website
The official University of Maryland, College Park Taiwanese American Student Association website. It utilizes Netlify CMS to simplfy adding new events and editing bios. Plus, it comes with helpful link shortening!

# Table of Contents

1. [Installation](#installation)
    1. [Gatsby](#gatsby)
2. [Files to Change](#files-to-change)
3. [Customizing Theme and Styling](#customizing-theme-and-styling)
    1. [Text](#text)
4. [Mailchimp Integration](#mailchimp-integration)
5. [Netlify CMS](#netlify-cms)
6. [Adding New Pages](#adding-new-pages)
7. [Adding New Events](#adding-new-events)
8. [Editing Bios](#editing-bios)
9. [Link Shortening](#link-shortening)
10. [GraphQL Type Generation](#graphql-type-generation)
11. [Miscellaneous](#miscellaneous)

# Installation

Everything is already set-up in the [package.json](package.json) so all you have to do is

```
yarn install
```

Follow [the yarn installation docs](https://classic.yarnpkg.com/en/docs/install) if you need to install yarn!

## Gatsby

You will have to install gatsby-cli which you can do with `npm install -g gatsby-cli`
Their website has a nice [tutorial](https://www.gatsbyjs.org/tutorial/) which I recommend following.

You also can find the original [Gatsby's original README.md here](https://github.com/gatsbyjs/gatsby-starter-hello-world). That doc details a quick look at some file structure and basic files for this repo

# Files to Change

1. [`site-config.js`](site-config.js)
    1. Contains config information about our site like site Title, description, URL, preferred date formats, links
2. [`gatsby-config.js`](gatsby-config.js)
    1. The main config file for Gatsby. This file takes some information from our `site-config.js` as well as the various plugins we've installed.
    2. Add our Mailchimp endpoint here! See [Mailchimp Integration](#mailchimp-integration)
3. [`config.yml`](static/assets/config.yml)
    1. The config file that determines how our Netlify CMS looks and what we can add
    2. In particular, add any new tags you'd like to add to events. See [Netlify CMS](#netlify-cms)
4. [`theme.tsx`](src/theme.tsx)
    1. The theme used throughout our site. Add primary and secondary colors and any new fonts. Be sure to add fonts to the `gatsby-plugin-prefetch-google-fonts` too.
5. [`Header.tsx`](src/components/Layout/Header.tsx)
    1. When you add pages, be sure to add the links to them here!
6. Everything else is individual components on the site!

# Customizing Theme and Styling

This site uses [Material-UI](https://material-ui.com/) components for styling. The theme can be modified in [`theme.tsx`](/src/theme.tsx) to change the primary and secondary colors, the spacing used throughout the site, and typography. More info about customizing theme can be found on the [official Material-UI cutomization guide](https://material-ui.com/customization/theming/). The theme is provided to all the pages in [`gatsby-browser.js`](gatsby-browser.js) via ThemeProvider.

The Material-UI framework relies on the idea of [css-in-js](https://css-tricks.com/bridging-the-gap-between-css-and-javascript-css-in-js/). In particular, we use Material-UI's [withStyles](https://material-ui.com/styles/basics/) method of adding styles.

We can add styles to components by defining CSS in the `styles` object. There's a slight difference in naming between usual CSS fields and CSS-in-JS fields, but that's usually replacing - with camelCase. We can also use media queries to use different styles depending on the size of the screen! Examples can be seen in the [`Header.tsx`](src/components/Layout/Header.tsx) component where it sets the fontsize to be "18px" if the screen is smaller than the "sm" size defined in the theme.

```javascript
[theme.breakpoints.down("sm")]: {
    fontSize: "18px",
},
```

The styles object takes in the optional theme parameter to use information specified by our theme. We use the `createStyles` function so that TypeScript can properly recognize the type of the styles object. We then use `WithStyles<typeof styles>` to get the type of the styles object. The withStyles function passes down `classes` as a prop to the component (this is known as [higher order composition](https://medium.com/@rossbulat/how-to-use-react-higher-order-components-c0be6821eb6c)), and the component can then use the `classes` object to extract out the classNames.

All h1, h2, h3, etc elements can be customized across the site in themes as well. Here's the example from the [Material-UI documentation](https://material-ui.com/customization/typography/)

```javascript
const theme = createMuiTheme({
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: "italic",
        },
    },
})
```

## Text
In order to add a white color option, I created a [`Text.tsx`](src/components/Typography/Text.tsx) component that wraps the [`Typography`](https://material-ui.com/api/typography/) component from Material-UI. Also, since it has a shorter name, it's more likely to fit on one line.

We use Typography so that we can get the benefits of responsive text sizing and unified styling. As noted above, we can customize how all heading elemnts look, and we have to use Typography components to benefit from that styling. 

# Mailchimp Integration

1. Add the Mailchimp endpoint to `gatsby-config.js` by following the instructions listed on [gatsby-plugin-mailchimp](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/)
2. Modify and stylize the [`Newsletter.tsx`](/src/components/Mailchimp/Newsletter.tsx) component to look how you want it to
3. Use the [`Newsletter.tsx`](/src/components/Mailchimp/Newsletter.tsx) component where you want to display it

# Netlify CMS

Netlify CMS (content management system) is a way to easily add new events, bios, and whatever else we choose to add. The interface uses `config.yml` located at [`/static/admin/config.yml`](/static/admin/config.yml) which defines where data should be stored, what folders they should be put in, and what data can be added. The collections field allows us to specify the type of data we can add to the site.

Our site has events and bios. When the user signs into the Netlify CMS admin panel (see [`below`](#adding-new-events)), they see the types of data they can add. This can include titles, images, tags, and markdown content. Then, Gatsby takes this information and displays it on our site.

Be sure to modify [`config.yml`](static/admin/config.yml) so that the repo on line 4 corresponds to your own repo! In addition, be sure to create an OAuth application by following the [official Netlify guide](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#setup-and-settings) and add it to your Netlify site via the dashboard.

# Adding New Pages

To add new pages, just create a file in [`src/pages/`](src/pages/). Gatsby will turn that file into a page on the site with the same name. Layout and ThemeProvider are automatically added by [`gatsby-browser`](gatsby-browser.js). The Layout component wraps our page in a header and footer. You find the components used by the Layout in [`src/Layout`](src/Layout)

Also, since that new component is a page component, it can take `PageProps` from Gatsby which includes location information. More information about pages and layouts can be found in the [Gatsby page documentation](https://www.gatsbyjs.org/docs/recipes/pages-layouts/).

# Adding New Events

Through Netlify CMS, we have a nice interface to add events. You can access it by following the url of the site `[url]/admin` Then, sign in with an account that has access to the repository. Once you're in, you should see ![Netlify CMS admin panel](/docs/netlify-cms-events.png)

You can click on an existing event to edit it or on "New Events" to create a new event. From there, you should see ![Netlify CMS add event](/docs/netlify-cms-events-edit.png) Once all the fields are filled out, hit publish and a markdown file and image file should be added to the GitHub repository! Then, Netlify will rebuild the site with the new content.

## How does it work?

When new events are created via the Netlify CMS interface, a markdown file gets added to [`content/events`](/content/events) and the uploaded image gets added to [`static/assets/`](/static/assets). Then, [`gatsby-node.js`](gatsby-node.js) creates a new page using [`EventPageTemplate.tsx`](/src/templates/EventPageTemplate.tsx).

The markdown file has a section called frontmatter and the actual body which should be the description. We can then query graphql to get this file. For the event pages, this happens at the page level, so we can query for the file and the corresponding image.

For everywhere else, we have to use static queries which can't take parameters. We get the events through the hook [`useEvents.tsx`](/src/hooks/useEvents.tsx). More about hooks can be found [on the official React site](https://reactjs.org/docs/hooks-intro.html). The useEvents hook queries for all of the event markdown files and every image. Then, it filters based off any tags given and returns a combined node with the associated image.

We can use the result from useEvents to display the data in various ways such as in a grid. If we wanted to get upcoming or previous events, we can add a filter to the useEvents hook which can return us events that occur before or after a certain date.

The [`Event.tsx`](/src/components/Events/Event.tsx) component displays a card with information about the event. If you click on the card, it brings us to the dedicated page for that event.

# Editing Bios

Similar to adding events, go to the Netlify CMS admin panel. Click on the bios section on the side, and you should be able to add new bios and edit existing ones. You can choose their position with a drop-down menu. In order to add new positions, go to the "Editable Options" collection on the left side of the page and select the "Bio Positions Order" file. Inside that file is an array of all the possible positions! You can add new positions there. The order the positions are listed also determine their order on the site.

## How does it work?

We get all the bios using the [`useBios.tsx`](/src/hooks/useBios.tsx) hook. Like the useEvents hook, it runs a static query that gets all the content labeled bio and links them together with their associated images. Then, we can use the [`Bio.tsx`](/src/components/Bios/Bio.tsx) component to display the data.

We can change how the bios look on the site by editing [`Bio.tsx`](/src/components/Bios/Bio.tsx).

# Link Shortening

With Netlify, we can make our own link shortening service! The magic all happens in our [`_redirects`](/static/_redirects) file. In that file, we can add a URL on our site, and redirect it to another URL! For example,
`/l/fb https://www.facebook.com/umcptasa/` redirects from `umcp-tase.netlify.app/l/fn` to the TASA Facebook page. I chose to add `/l/` in front to make it clear that the link is shortened and not a page on our site. This isn't necessary, but it helps separate out links and ensure we can add shortened URLs with the same name as a page on our site.

# GraphQL Type Generation

Gatsby uses [GraphQL](https://www.gatsbyjs.org/docs/recipes/querying-data/) to query data. We use [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen) to automatically generate types from the queries we make. Then, you can import the generated type from graphql types. You can see an example of this in the [`Logo`](src/components/Logo/Logo.tsx) component.

```typescript
import { LogoQuery } from "graphql-types"

const data =
    useStaticQuery<LogoQuery >
    graphql`
        query Logo {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `
```

Note how the query itself is named on the second line, and how `LogoQuery` is present as the type for `useStaticQuery`. All generated types get stored in [`graphql-types.ts`](graphql-types.ts)

# Miscellaneous

## Typescript Module Resolution

https://www.typescriptlang.org/docs/handbook/module-resolution.html
Change in tsconfig.json

[When to use type vs interface for Typescript](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)

## Making the Header stay at the top of the screen
That's pretty easy! Just set the position prop of the AppBar to "fixed" instead of "relative". If you want the header to respond to scroll actions (ex: changing from transparent to opaque), utilize the scrollTrigger boolean passed in from the Layout component. You can set different styles depending on whether or not scrollTrigger is true or false. Check out the commented code for an example.

## Material Kit React
This interface is based off of https://github.com/creativetimofficial/material-kit-react 

## GraphQL Fragments
In order to re-use the same query for all our background iamges, we create a fragment in [`ParallaxBackground.tsx`](src/components/General/ParallaxBackground.tsx) that can be used in all those queries.
```javascript
export const imageQueryFragment = graphql`
    fragment BackgroundImage on File {
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
    }
`
```
As described in the [Gatsby docs on fragments](https://www.gatsbyjs.org/docs/using-graphql-fragments/), the `ParallaxBackground` component won't actually use this query for data. But since Gatsby preprocesses all graphql queries, it'll generate this fragment that we can then use in other queries. The fragment name is `BackgroundImage` and it can be used in queries under the type `File`. For example, in [`index.tsx`](src/pages/index.tsx) we use the fragment by writing
```javascript
export const query = graphql`
    query HomePage {
        mainBackground: file(relativePath: { eq: "Taiwan.png" }) {
            ...BackgroundImage
        }
        presidentBackground: file(relativePath: { eq: "bg10.jpg" }) {
            ...BackgroundImage
        }
        newsletterBackground: file(relativePath: { eq: "Taiwan2.jpg" }) {
            ...BackgroundImage
        }
`
```

## React Rehydration
If styles look like they work on first load but don't on subsequent loads or vice versa, the problem is likely with server side rendering. In order to serve faster pages, Gatsby first pre-compiles during build the DOM from our React code on build. Gatsby uses the functions wrapRootElement and wrapPageElement in [`gatsby-ssr.js`](gatsby-ssr.js) during this time, which is why those two functions have to be the same as the ones in [`gatsby-browser.js`](gatsby-browser.js) which is the file that determines what the site uses on the client side. 

Because React uses rehydration instead of re-rendering to reconcile the differences between server and client side rendering, things can start to get wonky. Rehydration relies on the assumption that the DOM stays the same which sometimes isn't the case if we have dynamic content. So if styles look wonky between first load, which is what the server provides to the user, and the second load, where the client usually kicks in to render the page, it's likely that some element isn't in the right place in the DOM. To be honest, I'm not sure if this is exactly why things don't look right, but it seems to be the best explanation I've found.

That's where the [`ClientOnly`](src/components/General/ClientOnly.tsx) component comes in! It utilizes useEffect to only mount the component when the page is loaded. Since this only happens for the client, then the DOM stays the same between when the page is compiled during server-side rendering and when the client gets the page. Rehydration works, and then, the client can add the content that's missing after rehydration occurs. This is called two-pass rendering! 

The code for the component as well as a better explanation about this issue can be found on Josh W Comeau's blog post [The Perils of Rehydration](https://joshwcomeau.com/react/the-perils-of-rehydration/)
