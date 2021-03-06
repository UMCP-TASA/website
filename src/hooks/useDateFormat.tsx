import { useStaticQuery, graphql } from "gatsby"
import { DateFormatQuery } from "graphql-types"

export default function useDateFormat() {
    const data = useStaticQuery<DateFormatQuery>(graphql`
        query DateFormat {
            site {
                siteMetadata {
                    dateFormat
                }
            }
        }
    `)

    if(data.site?.siteMetadata?.dateFormat) {
        return data.site.siteMetadata.dateFormat
    } else {
        console.error("Dateformat doesn't exist in siteMetadata")
        return "MMM D, YYYY"
    }
}