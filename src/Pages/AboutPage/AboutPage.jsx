import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const AboutPage = () => {

    const description = "About Page"

    return (
        <ContentWrapper title="ABOUT" subtitle={description} description={description}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odio omnis non incidunt. Animi dolore voluptate magnam inventore, at vitae dolores, magni voluptatibus fuga, maxime debitis aut perspiciatis eligendi veniam?</p>
        </ContentWrapper>
    )
}